export async function generateShader(prompt, geometryType = "plane") {
  let geometryGuidance = "";
  
  if (geometryType === "plane") {
    geometryGuidance = `
Assume UV coordinates vary linearly across a flat plane from (0,0) to (1,1).
You can directly use uv.x and uv.y for procedural effects.
`;
  } else if (geometryType === "sphere") {
    geometryGuidance = `
Assume the shader will be applied to a 3D sphere with built-in UV coordinates.
Use the varying vec2 vUv passed from the vertex shader to compute effects.
Do NOT use gl_FragCoord.
Use circular or symmetrical effects to avoid distortion at the poles.
`;
  } else if (geometryType === "cube") {
    geometryGuidance = `
The shader will be applied to a rotating cube, where each face has independent UVs ranging from (0.0, 0.0) to (1.0, 1.0).

Use the following inputs:

- \`varying vec2 vUv;\` represents the UV coordinates of the current face.
- \`varying float vFaceIndex;\` is a unique integer (0–5) passed from the vertex shader that identifies which face of the cube is being rendered:
    - 0 = right
    - 1 = left
    - 2 = top
    - 3 = bottom
    - 4 = front
    - 5 = back

Instructions:
- Use \`int faceIndex = int(vFaceIndex);\` in the fragment shader to branch per face.
- Render different visual effects or patterns on each face depending on the face index.
- For example, you may show a different number of circular dots (like dice faces) depending on the index.
- You may use \`distance(uv, center)\` to draw circles at fixed positions in UV space.
- Do not attempt to use \`vNormal\`, \`gl_FragCoord\`, or dot products for face detection — use \`vFaceIndex\` only.
- Return only the final fragment shader code. Do not include comments or explanation.
`;
  }

  const fullPrompt = `${geometryGuidance}\n\n${prompt}`;

  const res = await fetch("http://localhost:8000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: fullPrompt, geometryType }),
  });

  const data = await res.json();
  return data?.content?.[0]?.text || "";
}
