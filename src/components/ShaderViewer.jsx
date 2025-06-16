// src/components/ShaderViewer.jsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const TEMPLATE_FRAGMENT_SHADER = `#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float color = 0.0;
    color += sin(uv.x * cos(u_time / 15.0) * 80.0) + cos(uv.y * cos(u_time / 15.0) * 10.0);
    color += sin(uv.y * sin(u_time / 10.0) * 40.0) + cos(uv.x * sin(u_time / 25.0) * 40.0);
    color += sin(uv.x * sin(u_time / 5.0) * 10.0) + sin(uv.y * sin(u_time / 35.0) * 80.0);
    color *= sin(u_time / 10.0) * 0.5;
    gl_FragColor = vec4(
        vec3(
            sin(color + u_time / 2.0) * 0.5 + 0.5,
            sin(color + u_time / 3.0) * 0.5 + 0.5,
            sin(color + u_time / 4.0) * 0.5 + 0.5
        ),
        1.0
    );
}
`;

const DEFAULT_VERTEX_SHADER = `
attribute float faceIndex;
varying vec2 vUv;
varying vec3 vNormal;
varying float vFaceIndex;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vFaceIndex = faceIndex;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export default function ShaderViewer({ 
  fragmentShader, 
  vertexShader,
  geometryType = "cube",
  shouldRotate = true
}) {
  const mountRef = useRef();
  const animationFrameRef = useRef();
  const sceneRef = useRef();
  const meshRef = useRef();
  const [error, setError] = useState(null);
  const rotationSpeed = 0.01;

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add more lights for better visibility
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 2).normalize();
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(-1, -1, -2).normalize();
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Create geometry based on type
    let geometry;
    switch (geometryType) {
      case "plane":
        geometry = new THREE.PlaneGeometry(4, 4);
        // Add face index attribute for plane
        addFaceAttributes(geometry, [0]); // Single face
        break;
      case "sphere":
        geometry = new THREE.SphereGeometry(1.2, 32, 32);
        // For sphere, assign face indices based on position
        const sphereVertexCount = geometry.attributes.position.count;
        const sphereFaceIndices = new Float32Array(sphereVertexCount);
        for (let i = 0; i < sphereVertexCount; i++) {
          const x = geometry.attributes.position.array[i * 3];
          const y = geometry.attributes.position.array[i * 3 + 1];
          const z = geometry.attributes.position.array[i * 3 + 2];
          // Determine dominant axis
          const absX = Math.abs(x);
          const absY = Math.abs(y);
          const absZ = Math.abs(z);
          
          if (absX > absY && absX > absZ) {
            sphereFaceIndices[i] = x > 0 ? 0 : 1; // Right/Left
          } else if (absY > absX && absY > absZ) {
            sphereFaceIndices[i] = y > 0 ? 2 : 3; // Top/Bottom
          } else {
            sphereFaceIndices[i] = z > 0 ? 4 : 5; // Front/Back
          }
        }
        geometry.setAttribute('faceIndex', new THREE.BufferAttribute(sphereFaceIndices, 1));
        break;
      case "cube":
      default:
        geometry = new THREE.BoxGeometry(2, 2, 2);
        // Add face indices to the cube geometry
        geometry = geometry.toNonIndexed();
        addFaceAttributes(geometry, [0, 1, 2, 3, 4, 5]);
        break;
    }

    // Function to add face index attributes to geometry
    function addFaceAttributes(geometry, faceIndices) {
      const positionCount = geometry.attributes.position.count;
      const itemSize = 1;
      const faceIndexArray = new Float32Array(positionCount);
      
      // For cube: 6 faces with 6 vertices each (2 triangles per face)
      // BoxGeometry faces order is: right, left, top, bottom, front, back
      if (geometry.type === "BoxGeometry") {
        for (let face = 0; face < 6; face++) {
          for (let vertex = 0; vertex < 6; vertex++) {
            faceIndexArray[face * 6 + vertex] = faceIndices[face];
          }
        }
      } else {
        // For other geometries, assign based on array length
        for (let i = 0; i < positionCount; i++) {
          const faceIndex = Math.floor(i / (positionCount / faceIndices.length));
          faceIndexArray[i] = faceIndices[Math.min(faceIndex, faceIndices.length - 1)];
        }
      }
      
      geometry.setAttribute('faceIndex', new THREE.BufferAttribute(faceIndexArray, itemSize));
    }

    // Setup uniforms for time and resolution
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2(width, height) }
    };

    let material;
    try {
      material = new THREE.ShaderMaterial({
        vertexShader: vertexShader || DEFAULT_VERTEX_SHADER,
        fragmentShader: fragmentShader || TEMPLATE_FRAGMENT_SHADER,
        uniforms,
        side: THREE.DoubleSide
      });
      setError(null);
    } catch (err) {
      setError(err.message);
      material = new THREE.ShaderMaterial({
        vertexShader: DEFAULT_VERTEX_SHADER,
        fragmentShader: TEMPLATE_FRAGMENT_SHADER,
        uniforms,
        side: THREE.DoubleSide
      });
    }

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    let startTime = Date.now();
    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);
      // Animate time uniform
      uniforms.u_time.value = (Date.now() - startTime) / 1000.0;
      // Animate rotation if needed
      if (shouldRotate && meshRef.current && geometryType !== "plane") {
        meshRef.current.rotation.x += rotationSpeed;
        meshRef.current.rotation.y += rotationSpeed;
      }
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
      uniforms.time.value = (Date.now() - startTime) / 1000.0;
      uniforms.resolution.value.set(width, height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [fragmentShader, vertexShader, geometryType, shouldRotate]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      {error && (
        <div style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          right: "1rem",
          backgroundColor: "rgba(239, 68, 68, 0.9)",
          color: "white",
          padding: "1rem",
          borderRadius: "4px",
          fontSize: "0.875rem",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          maxHeight: "200px",
          overflowY: "auto"
        }}>
          <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
            Shader Compilation Error:
          </div>
          {error}
        </div>
      )}
    </div>
  );
}
