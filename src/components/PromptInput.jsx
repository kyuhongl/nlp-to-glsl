import { useState, useRef, useEffect } from "react";
import ClaudeIcon from "../images/Claude.svg";
import GPT4oIcon from "../images/GPT-4o.svg";

function CustomDropdown({ options, value, onChange, icon = null, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div 
      ref={dropdownRef}
      className="custom-dropdown"
      style={{
        position: 'relative',
        minWidth: '280px',
      }}
    >
      <div
        className="dropdown-header"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#343541",
          border: "1px solid #565869",
          borderRadius: "6px",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.7 : 1,
          transition: "all 0.2s ease",
        }}
      >
        {/* Show icon for selected model if icon prop is provided */}
        {icon && (
          <img
            src={icon}
            alt="Icon"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "0.75rem",
            }}
          />
        )}
        {/* Show icon for selected geometry if no icon prop and is geometry */}
        {!icon && selectedOption && ["plane", "cube", "sphere"].includes(selectedOption.value) && (
          <span style={{ marginRight: "0.75rem", display: "flex", alignItems: "center" }}>
            {selectedOption.value === "plane" && (
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M22 2H2v20h20V2zm-2 2v16H4V4h16z"/>
              </svg>
            )}
            {selectedOption.value === "cube" && (
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
              </svg>
            )}
            {selectedOption.value === "sphere" && (
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
            )}
          </span>
        )}
        <span style={{ flex: 1, fontSize: "0.875rem", color: "#ffffff" }}>
          {selectedOption?.label || "Select..."}
        </span>
        <div
          className={`select-arrow ${isOpen ? 'rotated' : ''}`}
          style={{
            display: "flex",
            alignItems: "center",
            transition: "transform 0.2s ease",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: "16px",
              height: "16px",
              fill: "currentColor",
              opacity: 0.7,
            }}
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div
        className={`dropdown-menu ${isOpen ? 'open' : ''}`}
        style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          right: 0,
          backgroundColor: "#2D2D2D",
          border: "1px solid #565869",
          borderRadius: "6px",
          zIndex: 1000,
          maxHeight: "250px",
          overflowY: "auto",
          opacity: 0,
          visibility: "hidden",
          transform: "translateY(-10px)",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`dropdown-item ${option.disabled ? 'disabled' : ''} ${option.value === value ? 'selected' : ''}`}
            onClick={() => {
              if (!option.disabled) {
                onChange(option.value);
                setIsOpen(false);
              }
            }}
            style={{
              padding: "0.75rem 1rem",
              cursor: option.disabled ? "not-allowed" : "pointer",
              color: option.disabled ? "#666666" : "#ffffff",
              backgroundColor: option.value === value ? "#444654" : "transparent",
              fontStyle: option.disabled ? "italic" : "normal",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              transition: "background-color 0.15s ease",
            }}
          >
            {option.icon && (
              <img
                src={option.icon}
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                  opacity: option.disabled ? 0.5 : 1,
                }}
              />
            )}
            {!option.icon && (
              <div style={{ 
                width: "20px", 
                height: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                opacity: option.disabled ? 0.5 : 0.8,
              }}>
                {option.value === "plane" && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 2H2v20h20V2zm-2 2v16H4V4h16z"/>
                  </svg>
                )}
                {option.value === "cube" && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
                  </svg>
                )}
                {option.value === "sphere" && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                )}
                {option.value === "gpt-4o" && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm2-1.61V14h-2v-3.61c0-.52.42-.94.94-.94h.12c.52 0 .94.42.94.94zM12 6c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3z"/>
                  </svg>
                )}
              </div>
            )}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PromptInput({ prompt, setPrompt, onSubmit, isGenerating, currentCode }) {
  const [selectedModel, setSelectedModel] = useState("claude-3-sonnet");
  const [selectedGeometry, setSelectedGeometry] = useState("plane");

  const modelOptions = [
    { value: "claude-3-sonnet", label: "Claude 3.7 Sonnet", icon: ClaudeIcon },
    { value: "gpt-4o", label: "GPT-4o (Coming soon...)", icon: GPT4oIcon, disabled: true },
  ];

  const geometryOptions = [
    { value: "plane", label: "Plane" },
    { value: "cube", label: "Cube" },
    { value: "sphere", label: "Sphere" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isGenerating) onSubmit(selectedGeometry);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim() && !isGenerating) onSubmit(selectedGeometry);
    }
  };

  // Add export function
  const handleExport = () => {
    if (!currentCode) return;
    
    // Create blob with current shader code
    const blob = new Blob([currentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create temporary link element to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shader.glsl';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const buttonStyle = {
    backgroundColor: "#343541",
    color: "white",
    border: "1px solid #565869",
    borderRadius: "6px",
    padding: "0.75rem 1rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "center",
    width: "100%"
  };

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          <label style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.875rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            Select Geometry Type
          </label>
          <CustomDropdown
            options={geometryOptions}
            value={selectedGeometry}
            onChange={setSelectedGeometry}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          <label style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.875rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            </svg>
            AI Model
          </label>
          <CustomDropdown
            options={modelOptions}
            value={selectedModel}
            onChange={setSelectedModel}
            icon={ClaudeIcon}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ 
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}>
        <div style={{ 
          display: "flex", 
          gap: "0.75rem",
          alignItems: "flex-start",
          position: "relative",
          backgroundColor: "#1a1a1a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "0.75rem",
          transition: "all 0.2s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:focus-within": {
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
          }
        }}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`Describe your shader for a ${selectedGeometry}...`}
            rows={3}
            onKeyDown={handleKeyDown}
            disabled={isGenerating}
            style={{
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "0.875rem",
              resize: "none",
              outline: "none",
              fontFamily: "inherit",
              minHeight: "72px",
              padding: 0,
              margin: 0,
              lineHeight: "1.5",
              opacity: isGenerating ? 0.6 : 1,
              "&::placeholder": {
                color: "rgba(255, 255, 255, 0.4)"
              }
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "0.5rem",
              cursor: isGenerating ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              opacity: prompt && !isGenerating ? 1 : 0.5,
              transition: "all 0.2s ease",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }
            }}
          >
            {isGenerating ? (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <span className="spinner" style={{
                  width: 16, 
                  height: 16, 
                  border: "2px solid rgba(255, 255, 255, 0.3)", 
                  borderTop: "2px solid #fff", 
                  borderRadius: "50%",
                  display: "inline-block", 
                  animation: "spin 1s linear infinite"
                }} />
                <span style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  whiteSpace: "nowrap"
                }}>
                  Generating...
                </span>
              </div>
            ) : (
              <svg 
                viewBox="0 0 24 24" 
                style={{
                  width: "20px",
                  height: "20px",
                  fill: "currentColor"
                }}
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            )}
          </button>
        </div>
      </form>

      <button
        onClick={handleExport}
        style={buttonStyle}
        disabled={!currentCode}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        Export Shader
      </button>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dropdown-header:hover {
          background-color: #2a2a2a !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .dropdown-item:hover {
          background-color: #2a2a2a !important;
          transform: translateX(4px);
        }

        .dropdown-item.selected {
          background-color: #2a2a2a !important;
        }

        .dropdown-item.disabled:hover {
          background-color: transparent !important;
          transform: none;
        }

        .select-arrow.rotated {
          transform: rotate(180deg);
        }

        .dropdown-menu.open {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .dropdown-menu::-webkit-scrollbar {
          width: 8px;
        }

        .dropdown-menu::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .dropdown-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .dropdown-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
