/** @format */

import React from "react";
import { LogoEsvigy } from "@esvigy/react";

interface NavbarProps {
  activeTab: "home" | "catalog";
  setActiveTab: (tab: "home" | "catalog") => void;
  count: number;
}

export function Navbar({ activeTab, setActiveTab, count }: NavbarProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(7, 11, 20, 0.85)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "14px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {/* Brand logo & title */}
      <div
        onClick={() => setActiveTab("home")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LogoEsvigy
            animated
            color="#00D4FF"
            secondaryColor="#0F172A"
            style={{ width: "38px", height: "38px", borderRadius: "10px", boxShadow: "0 0 18px rgba(0, 212, 255, 0.35)" }}
          />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#ffffff",
              }}
            >
              Esvigy
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 212, 255, 0.15)",
                color: "#00D4FF",
                border: "1px solid rgba(0, 212, 255, 0.3)",
              }}
            >
              v0.1.0
            </span>
          </div>
          <span style={{ fontSize: "11px", color: "#94a3b8", display: "block" }}>
            Lucide for illustrations
          </span>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <button
          onClick={() => setActiveTab("home")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            border: activeTab === "home" ? "1px solid rgba(0, 212, 255, 0.4)" : "1px solid transparent",
            backgroundColor: activeTab === "home" ? "rgba(0, 212, 255, 0.12)" : "transparent",
            color: activeTab === "home" ? "#00D4FF" : "#94a3b8",
            transition: "all 0.2s ease",
          }}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab("catalog")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            border: activeTab === "catalog" ? "1px solid rgba(0, 212, 255, 0.4)" : "1px solid transparent",
            backgroundColor: activeTab === "catalog" ? "rgba(0, 212, 255, 0.12)" : "transparent",
            color: activeTab === "catalog" ? "#00D4FF" : "#94a3b8",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>Illustrations</span>
          <span
            style={{
              fontSize: "11px",
              padding: "1px 6px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#f8fafc",
            }}
          >
            {count}
          </span>
        </button>
      </nav>

      {/* Action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => setActiveTab("catalog")}
          className="btn-primary"
          style={{ fontSize: "13px", padding: "8px 16px" }}
        >
          <span>Explore Catalog</span>
          <span>→</span>
        </button>
        <a
          href="https://github.com/nickfrostech/esvigy"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ fontSize: "13px", padding: "8px 14px" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
}
