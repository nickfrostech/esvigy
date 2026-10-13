/** @format */

import React, { useState } from "react";

export interface IllustrationItem {
  name: string;
  Component: React.ComponentType<any>;
  author: string;
  source: string;
  category: string;
  tags: string[];
}

interface IllustrationModalProps {
  item: IllustrationItem | null;
  onClose: () => void;
  primaryColor: string;
  secondaryColor: string;
  animated: boolean;
}

export function IllustrationModal({
  item,
  onClose,
  primaryColor,
  secondaryColor,
  animated,
}: IllustrationModalProps) {
  const [activeTab, setActiveTab] = useState<"react" | "cli" | "svg">("react");
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const reactSnippet = `import { ${item.name} } from "@esvigy/react";

<${item.name}
  animated={${animated}}
  color="${primaryColor}"
  secondaryColor="${secondaryColor}"
  className="w-48 h-48"
/>`;

  const cliSnippet = `# Add as self-contained component to components/esvigy/
pnpm dlx esvigy add ${item.name.toLowerCase()} --framework react`;

  const codeToShow = activeTab === "react" ? reactSnippet : activeTab === "cli" ? cliSnippet : reactSnippet;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    // Generate SVG element download from active rendered DOM
    const svgElem = document.getElementById(`modal-preview-${item.name}`);
    if (svgElem) {
      const svgXml = new XMLSerializer().serializeToString(svgElem);
      const blob = new Blob([svgXml], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.name}.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#0d1322",
          border: "1px solid rgba(0, 212, 255, 0.3)",
          borderRadius: "20px",
          maxWidth: "760px",
          width: "100%",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 212, 255, 0.15)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 700, color: "#fff" }}>
                {item.name}
              </h2>
              <span
                style={{
                  fontSize: "12px",
                  padding: "3px 10px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 212, 255, 0.15)",
                  color: "#00D4FF",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {item.category}
              </span>
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#94a3b8" }}>
              Artist / Author: <strong style={{ color: "#fff" }}>{item.author}</strong> • Source:{" "}
              <a
                href={item.source}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00D4FF", textDecoration: "none" }}
              >
                {item.source}
              </a>
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              color: "#94a3b8",
              fontSize: "18px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            ✕
          </button>
        </div>

        {/* Live Preview Display */}
        <div
          style={{
            height: "360px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "36px",
            marginBottom: "24px",
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          }}
        >
          <div id={`modal-preview-${item.name}`} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <item.Component
              animated={animated}
              color={primaryColor}
              secondaryColor={secondaryColor}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>

        {/* Snippet format tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setActiveTab("react")}
              style={{
                background: activeTab === "react" ? "rgba(0, 212, 255, 0.15)" : "transparent",
                color: activeTab === "react" ? "#00D4FF" : "#94a3b8",
                border: activeTab === "react" ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid transparent",
                borderRadius: "6px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              React Component
            </button>
            <button
              onClick={() => setActiveTab("cli")}
              style={{
                background: activeTab === "cli" ? "rgba(0, 212, 255, 0.15)" : "transparent",
                color: activeTab === "cli" ? "#00D4FF" : "#94a3b8",
                border: activeTab === "cli" ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid transparent",
                borderRadius: "6px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              CLI Scaffolder (shadcn style)
            </button>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handleDownloadSvg}
              className="btn-secondary"
              style={{ fontSize: "12px", padding: "6px 12px" }}
            >
              <span>Download .SVG</span>
            </button>
            <button
              onClick={() => handleCopy(codeToShow)}
              className="btn-primary"
              style={{ fontSize: "12px", padding: "6px 16px" }}
            >
              <span>{copied ? "✓ Copied!" : "Copy Snippet"}</span>
            </button>
          </div>
        </div>

        {/* Code block */}
        <pre
          style={{
            margin: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            padding: "16px",
            color: "#00D4FF",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            overflowX: "auto",
            lineHeight: 1.5,
          }}
        >
          {codeToShow}
        </pre>

        {/* Tags footer */}
        {item.tags && item.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "18px" }}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#94a3b8",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
