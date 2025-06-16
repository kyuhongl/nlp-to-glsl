// src/components/ShaderEditor.jsx
import Editor from "@monaco-editor/react";

export default function ShaderEditor({ code, setCode }) {
  return (
    <div style={{ 
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      <Editor
        height="100%"
        language="cpp"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          roundedSelection: false,
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
            useShadows: false,
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10
          },
          renderLineHighlight: "all",
          readOnly: false,
          automaticLayout: true,
          fontFamily: "Menlo, Monaco, 'Courier New', monospace"
        }}
      />
    </div>
  );
}
