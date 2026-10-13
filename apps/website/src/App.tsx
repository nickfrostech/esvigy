/** @format */

import React, { useState, useMemo } from "react";
import * as EsvigyComponents from "@esvigy/react";
import manifestData from "../../../packages/svg/manifest.json";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { IllustrationCatalog } from "./components/IllustrationCatalog";
import { IllustrationModal, IllustrationItem } from "./components/IllustrationModal";

export function App() {
  const [activeTab, setActiveTab] = useState<"home" | "catalog">("home");
  const [primaryColor, setPrimaryColor] = useState("#00D4FF");
  const [secondaryColor, setSecondaryColor] = useState("#0F172A");
  const [animated, setAnimated] = useState(true);
  const [selectedItem, setSelectedItem] = useState<IllustrationItem | null>(null);

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

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#070b14", color: "#f8fafc" }}>
      {/* Global Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} count={illustrations.length} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeTab === "home" ? (
          <HomePage
            onExploreCatalog={() => {
              setActiveTab("catalog");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectIllustration={(item) => setSelectedItem(item)}
            illustrations={illustrations}
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
