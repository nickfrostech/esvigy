/** @format */

import React, { useState } from "react";
import * as EsvigyComponents from "@esvigy/react";
import { IllustrationItem } from "./IllustrationModal";

interface HomePageProps {
  onExploreCatalog: () => void;
  onSelectIllustration: (item: IllustrationItem) => void;
  illustrations: IllustrationItem[];
}

const PRESET_PALETTES = [
  { name: "Cyan Pop", primary: "#00D4FF", secondary: "#0B1528" },
  { name: "Emerald", primary: "#10B981", secondary: "#064E3B" },
  { name: "Purple Neon", primary: "#A855F7", secondary: "#1E1B4B" },
  { name: "Sunset Flame", primary: "#F97316", secondary: "#431407" },
  { name: "Monochrome", primary: "#F8FAFC", secondary: "#334155" },
];

const INSTALL_COMMANDS = {
  pnpm: "pnpm add @esvigy/react",
  npm: "npm install @esvigy/react",
  yarn: "yarn add @esvigy/react",
  bun: "bun add @esvigy/react",
};

export function HomePage({ onExploreCatalog, onSelectIllustration, illustrations }: HomePageProps) {
  const [heroIllustration, setHeroIllustration] = useState<string>("NotFoundRobot");
  const [heroPalette, setHeroPalette] = useState(PRESET_PALETTES[0]);
  const [heroAnimated, setHeroAnimated] = useState(true);
  const [installTab, setInstallTab] = useState<"pnpm" | "npm" | "yarn" | "bun">("pnpm");
  const [copiedInstall, setCopiedInstall] = useState(false);

  // Dynamic component for hero
  const HeroComponent = (EsvigyComponents as any)[heroIllustration] || EsvigyComponents.NotFoundRobot;

  const copyInstall = () => {
    navigator.clipboard.writeText(INSTALL_COMMANDS[installTab]);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  // 6 featured illustrations for showcase teaser
  const featuredNames = [
    "NotFoundRobot",
    "ActionUpload",
    "SecurityLock",
    "WomanLaptop",
    "EmptyCart",
    "StatusSuccess",
  ];
  const featuredItems = illustrations.filter((i) => featuredNames.includes(i.name));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "96px", paddingBottom: "80px" }}>
      {/* 1. Hero Section */}
      <section
        style={{
          position: "relative",
          paddingTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "350px",
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Release Pill Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "30px",
            backgroundColor: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            fontSize: "13px",
            fontWeight: 600,
            color: "#00D4FF",
            marginBottom: "24px",
            zIndex: 1,
          }}
        >
          <span>✨</span>
          <span>v0.1.0 Released — 30 Canonical UI Illustrations</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: "0 0 24px 0",
            maxWidth: "900px",
            zIndex: 1,
          }}
        >
          UI illustrations as simple and developer-friendly as{" "}
          <span className="text-gradient">icons.</span>
        </h1>

        {/* Hero Subtitle */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#94a3b8",
            lineHeight: 1.6,
            maxWidth: "720px",
            margin: "0 0 36px 0",
            zIndex: 1,
          }}
        >
          The open-source, framework-agnostic illustration collection. Treat UI empty states and error screens as lightweight, typed components with dynamic two-tone colors and zero-JS CSS micro-animations.
        </p>

        {/* Hero Action Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "56px", zIndex: 1 }}>
          <button
            onClick={onExploreCatalog}
            className="btn-primary"
            style={{ fontSize: "15px", padding: "14px 28px", borderRadius: "10px" }}
          >
            <span>Explore 30 Illustrations</span>
            <span>→</span>
          </button>
          <a
            href="https://github.com/nickfrostech/esvigy"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ fontSize: "15px", padding: "14px 24px", borderRadius: "10px" }}
          >
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Interactive Live Hero Widget */}
        <div
          style={{
            width: "100%",
            maxWidth: "980px",
            borderRadius: "24px",
            backgroundColor: "rgba(13, 21, 39, 0.75)",
            border: "1px solid rgba(0, 212, 255, 0.25)",
            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 212, 255, 0.12)",
            overflow: "hidden",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 1,
            textAlign: "left",
          }}
        >
          {/* Top Bar of Widget */}
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Pick demo illustration */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600 }}>Demo Component:</span>
              {["NotFoundRobot", "ActionUpload", "WomanLaptop", "SecurityLock", "LogoEsvigy"].map((name) => (
                <button
                  key={name}
                  onClick={() => setHeroIllustration(name)}
                  style={{
                    backgroundColor: heroIllustration === name ? "rgba(0, 212, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
                    color: heroIllustration === name ? "#00D4FF" : "#94a3b8",
                    border: heroIllustration === name ? "1px solid rgba(0, 212, 255, 0.4)" : "1px solid transparent",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Animation Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label style={{ fontSize: "12px", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <span>animated:</span>
                <input
                  type="checkbox"
                  checked={heroAnimated}
                  onChange={(e) => setHeroAnimated(e.target.checked)}
                  style={{ cursor: "pointer", accentColor: "#00D4FF" }}
                />
                <span style={{ color: heroAnimated ? "#00D4FF" : "#64748b", fontWeight: 700 }}>
                  {heroAnimated ? "true" : "false"}
                </span>
              </label>
            </div>
          </div>

          {/* Body of Widget (Preview Left + Code Right) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              minHeight: "360px",
            }}
          >
            {/* Live Illustration Render */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
              }}
            >
              <div style={{ width: "240px", height: "240px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HeroComponent
                  animated={heroAnimated}
                  color={heroPalette.primary}
                  secondaryColor={heroPalette.secondary}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>

              {/* Palette selector pills floating at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "6px",
                  padding: "4px 8px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {PRESET_PALETTES.map((pal) => (
                  <button
                    key={pal.name}
                    title={pal.name}
                    onClick={() => setHeroPalette(pal)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: pal.primary,
                      border: heroPalette.name === pal.name ? "2px solid #fff" : "1px solid rgba(255, 255, 255, 0.3)",
                      cursor: "pointer",
                      padding: 0,
                      transition: "transform 0.15s",
                      transform: heroPalette.name === pal.name ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Code Snippet with Live updates */}
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  JSX Code Component
                </span>
                <pre
                  style={{
                    margin: "12px 0 0 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#f8fafc",
                  }}
                >
                  <span style={{ color: "#a855f7" }}>import</span> &#123; {heroIllustration} &#125;{" "}
                  <span style={{ color: "#a855f7" }}>from</span>{" "}
                  <span style={{ color: "#10b981" }}>"@esvigy/react"</span>;{"\n\n"}
                  <span style={{ color: "#00D4FF" }}>&lt;{heroIllustration}</span>{"\n"}
                  {"  "}
                  <span style={{ color: "#f59e0b" }}>animated</span>
                  {heroAnimated ? "" : "={false}"}
                  {"\n"}
                  {"  "}
                  <span style={{ color: "#f59e0b" }}>color</span>=
                  <span style={{ color: "#10b981" }}>"{heroPalette.primary}"</span>{"\n"}
                  {"  "}
                  <span style={{ color: "#f59e0b" }}>secondaryColor</span>=
                  <span style={{ color: "#10b981" }}>"{heroPalette.secondary}"</span>{"\n"}
                  {"  "}
                  <span style={{ color: "#f59e0b" }}>className</span>=
                  <span style={{ color: "#10b981" }}>"w-48 h-48"</span>{"\n"}
                  <span style={{ color: "#00D4FF" }}>/&gt;</span>
                </pre>
              </div>

              <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => {
                    const code = `<${heroIllustration} animated={${heroAnimated}} color="${heroPalette.primary}" secondaryColor="${heroPalette.secondary}" className="w-48 h-48" />`;
                    navigator.clipboard.writeText(code);
                  }}
                  className="btn-secondary"
                  style={{ fontSize: "12px", padding: "6px 14px" }}
                >
                  <span>📋 Copy Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Propositions Bento-Grid ("Why Esvigy") */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", margin: "0 0 12px 0" }}>
            Engineered for Developer Joy
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Say goodbye to downloading static SVGs and editing messy XML by hand.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: "32px", borderRadius: "18px" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>📦</div>
            <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "0 0 10px 0" }}>
              "Lucide for Illustrations"
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
              Import illustrations like standard components. Normalized viewBox coordinates and clean semantic DOM trees ready for production.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: "32px", borderRadius: "18px" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>🎨</div>
            <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "0 0 10px 0" }}>
              Two-Tone Color Engine
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
              Control primary brand accents via <code>color</code> and background surfaces with <code>secondaryColor</code>. Seamless dark/light theme switching.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: "32px", borderRadius: "18px" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>⚡</div>
            <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "0 0 10px 0" }}>
              Zero-JS Micro-Animations
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
              Animations are 100% pure vector CSS keyframes. Toggle motion with <code>animated</code> with zero JavaScript runtime performance cost.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel" style={{ padding: "32px", borderRadius: "18px" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>🌲</div>
            <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "0 0 10px 0" }}>
              Tree-Shakable & Modular
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
              Strict <code>sideEffects: false</code> dead-code elimination. Your final client bundle only includes the exact illustrations you import.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Quickstart & Installation Section */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div className="glass-panel" style={{ padding: "40px", borderRadius: "24px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 8px 0" }}>
            Quick Start
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 24px 0" }}>
            Install the official package for your favorite JavaScript package manager:
          </p>

          {/* Package manager tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
            {(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
              <button
                key={pm}
                onClick={() => setInstallTab(pm)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: installTab === pm ? "1px solid rgba(0, 212, 255, 0.4)" : "1px solid transparent",
                  backgroundColor: installTab === pm ? "rgba(0, 212, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  color: installTab === pm ? "#00D4FF" : "#94a3b8",
                }}
              >
                {pm}
              </button>
            ))}
          </div>

          {/* Command display box */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              padding: "14px 20px",
            }}
          >
            <code style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#00D4FF" }}>
              {INSTALL_COMMANDS[installTab]}
            </code>
            <button
              onClick={copyInstall}
              className="btn-secondary"
              style={{ fontSize: "12px", padding: "6px 12px" }}
            >
              {copiedInstall ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      {/* 4. Featured Showcase Teaser */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 8px 0" }}>
              Featured Illustrations
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0 }}>
              A preview of canonical empty states, actions, and character designs.
            </p>
          </div>
          <button onClick={onExploreCatalog} className="btn-primary" style={{ fontSize: "14px" }}>
            <span>View All {illustrations.length} Illustrations →</span>
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {featuredItems.map((item) => (
            <div
              key={item.name}
              onClick={() => onSelectIllustration(item)}
              className="glass-panel"
              style={{
                borderRadius: "18px",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 212, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ height: "180px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <item.Component
                  animated
                  color="#00D4FF"
                  secondaryColor="#0F172A"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#fff" }}>{item.name}</span>
                <span
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#94a3b8",
                    textTransform: "capitalize",
                  }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "40px",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0 0 12px 0" }}>
          Released under the <strong style={{ color: "#fff" }}>MIT License</strong>. Free for personal and commercial projects.
        </p>
        <p style={{ margin: 0 }}>
          Designed and maintained by{" "}
          <a href="https://github.com/nickfrostech" target="_blank" rel="noreferrer" style={{ color: "#00D4FF", textDecoration: "none" }}>
            Nick Frost
          </a>
        </p>
      </footer>
    </div>
  );
}
