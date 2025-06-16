import { useState } from "react";
import { generateShader } from "./api";
import PromptInput from "./components/PromptInput";
import ShaderEditor from "./components/ShaderEditor";
import ShaderViewer from "./components/ShaderViewer";

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
            sin(color + u_time / 3.0) * 0.5 + 0.5
            sin(color + u_time / 4.0) * 0.5 + 0.5
        ),
        1.0
    );
}
`;

function App() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState(TEMPLATE_FRAGMENT_SHADER);
  const [liveShader, setLiveShader] = useState("");
  const [geometryType, setGeometryType] = useState("plane");
  const [shouldRotate, setShouldRotate] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  // Helper to simulate streaming/chunking
  const streamTextToEditor = async (text) => {
    setCode("");
    let i = 0;
    const chunkSize = 3; // characters per chunk
    setIsGenerating(true);
    while (i < text.length) {
      setCode((prev) => prev + text.slice(i, i + chunkSize));
      await new Promise((res) => setTimeout(res, 30));
      i += chunkSize;
    }
    setIsGenerating(false);
  };

  const onSubmit = async (selectedGeometry) => {
    setIsGenerating(true);
    setGeometryType(selectedGeometry);
    const result = await generateShader(prompt, selectedGeometry);
    // Simulate streaming/chunking
    await streamTextToEditor(result);
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#343541",
    color: "white",
    border: "1px solid #565869",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "0.5rem",
    fontSize: "0.875rem",
    transition: "background-color 0.2s"
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#40414f",
    borderColor: "#565869"
  };

  return (
    <div style={{ 
      height: "100vh",
      display: "flex",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      position: "relative"
    }}>
      {/* Sidebar */}
      <div style={{
        width: "320px",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        background: "linear-gradient(to bottom, #1a1a1a, #2a2a2a)"
      }}>
        <div style={{
          padding: "1.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <h1 style={{ 
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "600",
            background: "linear-gradient(90deg, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            fontFamily: 'Menlo, Monaco, "Fira Mono", "Liberation Mono", "Consolas", monospace'
          }}>
            nlp to glsl.<span className="blinking-cursor" style={{
              display: 'inline-block',
              width: '1ch',
              fontWeight: 400,
              fontSize: '1.5rem',
              lineHeight: 1,
              background: 'linear-gradient(90deg, #fff, #aaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Menlo, Monaco, "Fira Mono", "Liberation Mono", "Consolas", monospace'
            }}>|</span>
          </h1>
          <style>{`
            .blinking-cursor {
              animation: blink-cursor 1s steps(1) infinite;
            }
            @keyframes blink-cursor {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
          `}</style>
        </div>
        <div style={{
          flex: 1,
          padding: "1.5rem",
          overflowY: "auto"
        }}>
          <PromptInput 
            prompt={prompt} 
            setPrompt={setPrompt} 
            onSubmit={onSubmit} 
            isGenerating={isGenerating}
            currentCode={code}
          />
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        <div style={{
          display: "flex",
          flex: 1,
          gap: "1.5rem",
          padding: "1.5rem",
          minHeight: 0
        }}>
          <div style={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            minHeight: 0
          }}>
            <div style={{ 
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ 
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <h2 style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.8)"
                }}>
                  Shader Code
                </h2>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button 
                    onClick={() => setShouldRotate(!shouldRotate)}
                    style={{
                      ...(shouldRotate ? activeButtonStyle : buttonStyle),
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    {shouldRotate ? "Stop Rotation" : "Start Rotation"}
                  </button>
                  <button 
                    onClick={() => setLiveShader(code)} 
                    style={{
                      ...buttonStyle,
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }}
                    disabled={isGenerating}
                  >
                    Apply Shader
                  </button>
                </div>
              </div>
              <div style={{ flex: 1, minHeight: 0 }}>
                <ShaderEditor code={code} setCode={setCode} />
              </div>
            </div>
          </div>
          <div style={{ 
            flex: 1,
            minHeight: 0,
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ 
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <h2 style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "rgba(255, 255, 255, 0.8)"
              }}>
                Shader Preview
              </h2>
              <div style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.6)",
                textTransform: "capitalize"
              }}>
                {geometryType}
              </div>
            </div>
            <div style={{ 
              flex: 1,
              minHeight: 0,
              position: "relative",
              overflow: "hidden"
            }}>
              <ShaderViewer 
                fragmentShader={liveShader} 
                geometryType={geometryType}
                shouldRotate={shouldRotate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Signature at bottom left */}
      <div style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        fontSize: "0.75rem",
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "Menlo, Monaco, 'Courier New', monospace",
        zIndex: 10,
        padding: "4px 8px",
        borderRadius: "4px",
        background: "rgba(0, 0, 0, 0.2)"
      }}>
        made by kyuhong.
      </div>
    </div>
  );
}

export default App;
