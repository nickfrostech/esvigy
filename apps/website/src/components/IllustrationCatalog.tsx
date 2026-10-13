/** @format */

import React, { useState, useMemo } from "react";
import { IllustrationItem } from "./IllustrationModal";

interface IllustrationCatalogProps {
  illustrations: IllustrationItem[];
  onSelectIllustration: (item: IllustrationItem) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
  animated: boolean;
  setAnimated: (animated: boolean) => void;
}

const PRESET_PALETTES = [
  { name: "Cyan Pop", primary: "#00D4FF", secondary: "#0B1528" },
  { name: "Emerald", primary: "#10B981", secondary: "#064E3B" },
  { name: "Purple Neon", primary: "#A855F7", secondary: "#1E1B4B" },
  { name: "Sunset", primary: "#F97316", secondary: "#431407" },
  { name: "Rose", primary: "#F43F5E", secondary: "#270714" },
  { name: "Monochrome", primary: "#F8FAFC", secondary: "#334155" },
];

export function IllustrationCatalog({
  illustrations,
  onSelectIllustration,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  animated,
  setAnimated,
}: IllustrationCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cardBgMode, setCardBgMode] = useState<"dark" | "light" | "grid">("dark");
  const [cardSize, setCardSize] = useState<"sm" | "md" | "lg">("md");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  // Extract categories dynamically
  const categories = useMemo(() => {
    const set = new Set(illustrations.map((item) => item.category));
    return ["all", ...Array.from(set)];
  }, [illustrations]);

  // Filter items
  const filteredIllustrations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return illustrations.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [illustrations, searchQuery, selectedCategory]);

  const sizeHeightMap = {
    sm: "180px",
    md: "240px",
    lg: "320px",
  };

  const cardBackgroundStyle = {
    dark: {
      background: "linear-gradient(145deg, #131b2e 0%, #0d1322 100%)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      color: "#fff",
    },
    light: {
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      color: "#0f172a",
    },
    grid: {
      background: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px), #0b0f19",
      backgroundSize: "16px 16px",
      border: "1px solid rgba(0, 212, 255, 0.2)",
      color: "#fff",
    },
  }[cardBgMode];

  const quickCopyCode = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    const codeSnippet = `<${name} animated={${animated}} color="${primaryColor}" secondaryColor="${secondaryColor}" />`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px 80px 24px", width: "100%" }}>
      {/* Studio Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 8px 0" }}>
          Illustration Studio
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0 }}>
          Interactive catalog and verification workbench. Preview with real-time themes and copy ready-to-use snippets.
        </p>
      </div>

      {/* Control Toolbar */}
      <section
        className="glass-panel"
        style={{
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* Top row: Search & Filters */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "300px", flex: 1 }}>
            <input
              type="text"
              placeholder="Search by name, tag, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "8px",
                padding: "10px 16px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                transition: "border 0.2s",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Stats Pill */}
          <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
            Showing <strong style={{ color: "#00D4FF" }}>{filteredIllustrations.length}</strong> of {illustrations.length}
          </span>
        </div>

        {/* Second row: Color Controls & Presets */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          {/* Color Palettes */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600 }}>Palettes:</span>
            {PRESET_PALETTES.map((pal) => (
              <button
                key={pal.name}
                onClick={() => {
                  setPrimaryColor(pal.primary);
                  setSecondaryColor(pal.secondary);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border:
                    primaryColor === pal.primary && secondaryColor === pal.secondary
                      ? "1px solid #00D4FF"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: pal.primary }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: pal.secondary }} />
                <span>{pal.name}</span>
              </button>
            ))}

            {/* Custom pickers */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "8px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#94a3b8", cursor: "pointer" }}>
                <span>Primary</span>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  style={{ width: "24px", height: "24px", border: "none", borderRadius: "4px", cursor: "pointer", padding: 0, backgroundColor: "transparent" }}
                />
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#94a3b8", cursor: "pointer" }}>
                <span>Secondary</span>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  style={{ width: "24px", height: "24px", border: "none", borderRadius: "4px", cursor: "pointer", padding: 0, backgroundColor: "transparent" }}
                />
              </label>
            </div>
          </div>

          {/* Animation & Display Modes */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", color: "#94a3b8" }}>
              <span>Animated</span>
              <input
                type="checkbox"
                checked={animated}
                onChange={(e) => setAnimated(e.target.checked)}
                style={{ accentColor: "#00D4FF", cursor: "pointer" }}
              />
            </label>

            {/* Card Background Modes */}
            <div style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "6px", padding: "2px" }}>
              {(["dark", "light", "grid"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCardBgMode(mode)}
                  style={{
                    backgroundColor: cardBgMode === mode ? "rgba(0, 212, 255, 0.2)" : "transparent",
                    color: cardBgMode === mode ? "#00D4FF" : "#94a3b8",
                    border: "none",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Size options */}
            <div style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "6px", padding: "2px" }}>
              {(["sm", "md", "lg"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setCardSize(s)}
                  style={{
                    backgroundColor: cardSize === s ? "rgba(0, 212, 255, 0.2)" : "transparent",
                    color: cardSize === s ? "#00D4FF" : "#94a3b8",
                    border: "none",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "11px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Third row: Category Filter Pills */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "12px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: selectedCategory === cat ? "#00D4FF" : "rgba(255, 255, 255, 0.05)",
                color: selectedCategory === cat ? "#070b14" : "#94a3b8",
                border: "none",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: selectedCategory === cat ? 700 : 500,
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Illustrations */}
      {filteredIllustrations.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 20px", color: "#64748b" }}>
          <p style={{ fontSize: "18px", margin: "0 0 8px 0" }}>No illustrations match "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="btn-secondary"
            style={{ fontSize: "13px" }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${cardSize === "sm" ? "220px" : cardSize === "lg" ? "360px" : "280px"}, 1fr))`,
            gap: "20px",
          }}
        >
          {filteredIllustrations.map((item) => (
            <div
              key={item.name}
              onClick={() => onSelectIllustration(item)}
              style={{
                ...cardBackgroundStyle,
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 212, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Illustration Canvas */}
              <div
                style={{
                  height: sizeHeightMap[cardSize],
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                  overflow: "hidden",
                }}
              >
                <item.Component
                  animated={animated}
                  color={primaryColor}
                  secondaryColor={secondaryColor}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>

              {/* Card Meta & Quick Copy Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: cardBgMode === "light" ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "12px",
                  marginTop: "auto",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{item.name}</div>
                  <div style={{ fontSize: "11px", color: cardBgMode === "light" ? "#64748b" : "#94a3b8", marginTop: "2px" }}>
                    by {item.author}
                  </div>
                </div>

                <button
                  onClick={(e) => quickCopyCode(e, item.name)}
                  title="Quick Copy JSX"
                  style={{
                    backgroundColor: copiedName === item.name ? "#10B981" : "rgba(255, 255, 255, 0.08)",
                    color: copiedName === item.name ? "#000" : "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "11px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {copiedName === item.name ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
