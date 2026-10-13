/** @format */

import React, { useState, useMemo, useEffect } from "react";
import * as EsvigyComponents from "@esvigy/react";
import manifestData from "../../../packages/svg/manifest.json";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { IllustrationCatalog } from "./components/IllustrationCatalog";
import { IllustrationModal, IllustrationItem } from "./components/IllustrationModal";

export function App() {
  const [activeTab, setActiveTab] = useState<"home" | "catalog">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("esvigy_theme") as "dark" | "light") || "dark";
  });
  const [primaryColor, setPrimaryColor] = useState("#00D4FF");
  const [secondaryColor, setSecondaryColor] = useState("#0F172A");
  const [animated, setAnimated] = useState(true);
  const [selectedItem, setSelectedItem] = useState<IllustrationItem | null>(null);

  // Sync theme to document attribute and storage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("esvigy_theme", theme);
  }, [theme]);

  // Sync page title with active section
  useEffect(() => {
    if (activeTab === "catalog") {
      document.title = "Illustration Studio — Esvigy";
    } else {
      document.title = "Esvigy — UI Illustrations as simple and developer-friendly as icons";
    }
  }, [activeTab]);

  // Discover and sort all illustration components from @esvigy/react
  const illustrations: IllustrationItem[] = useMemo(() => {
    const manifest = manifestData as Record<string, any>;
    return Object.entries(EsvigyComponents)
      .filter(([name, Comp]) => typeof Comp === "function" && name !== "App" && !name.startsWith("_"))
      .map(([name, Component]) => {
        const meta = manifest[name] || {};
        return {
          name,
          Component: Component as React.ComponentType<any>,
          author: meta.author || "nick",
          source: meta.source || "https://github.com/nickfrostech",
          category: meta.category || "general",
          tags: meta.tags || [],
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const handleNavigateSection = (sectionId: "guide" | "packages") => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-dark)", color: "var(--text-main)" }}>
      {/* Global Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        count={illustrations.length}
        theme={theme}
        setTheme={setTheme}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, paddingTop: "60px" }}>
        {activeTab === "home" ? (
          <HomePage
            onExploreCatalog={() => {
              setActiveTab("catalog");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSearch={(query) => {
              setSearchQuery(query);
              setActiveTab("catalog");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectIllustration={(item) => setSelectedItem(item)}
            illustrations={illustrations}
            theme={theme}
          />
        ) : (
          <IllustrationCatalog
            illustrations={illustrations}
            onSelectIllustration={(item) => setSelectedItem(item)}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
            secondaryColor={secondaryColor}
            setSecondaryColor={setSecondaryColor}
            animated={animated}
            setAnimated={setAnimated}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            theme={theme}
          />
        )}
      </main>

      {/* Deep Inspection Modal */}
      <IllustrationModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        animated={animated}
      />
    </div>
  );
}
