/** @format */

import React, { useState, useMemo } from "react";
import * as EsvigyComponents from "@esvigy/react";
import manifestData from "../../../packages/svg/manifest.json";

interface IllustrationItem {
	name: string;
	Component: React.ComponentType<any>;
	author: string;
	source: string;
	category: string;
	tags: string[];
}

const PRESET_PALETTES = [
	{ name: "Cyan Pop", primary: "#00D4FF", secondary: "#0B1528" },
	{ name: "Emerald", primary: "#10B981", secondary: "#064E3B" },
	{ name: "Purple Neon", primary: "#A855F7", secondary: "#1E1B4B" },
	{ name: "Sunset", primary: "#F97316", secondary: "#431407" },
	{ name: "Rose", primary: "#F43F5E", secondary: "#270714" },
	{ name: "Monochrome", primary: "#F8FAFC", secondary: "#334155" },
];

export function App() {
	const [animated, setAnimated] = useState(true);
	const [primaryColor, setPrimaryColor] = useState("#00D4FF");
	const [secondaryColor, setSecondaryColor] = useState("#0F172A");
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cardBgMode, setCardBgMode] = useState<"dark" | "light" | "grid">("dark");
	const [cardSize, setCardSize] = useState<"sm" | "md" | "lg">("md");
	const [copiedName, setCopiedName] = useState<string | null>(null);
	const [focusedItem, setFocusedItem] = useState<IllustrationItem | null>(null);

	// Automatically extract and sort all illustration components from @esvigy/react
	const illustrations: IllustrationItem[] = useMemo(() => {
		const manifest = manifestData as Record<string, any>;
		return Object.entries(EsvigyComponents)
			.filter(
				([name, Comp]) =>
					typeof Comp === "function" && name !== "App" && !name.startsWith("_"),
			)
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

	// Extract unique categories for filter pills
	const categories = useMemo(() => {
		const set = new Set(illustrations.map((item) => item.category));
		return ["all", ...Array.from(set)];
	}, [illustrations]);

	// Filter illustrations based on search and category
	const filteredIllustrations = useMemo(() => {
		const q = searchQuery.toLowerCase().trim();
		return illustrations.filter((item) => {
			const matchesCategory =
				selectedCategory === "all" || item.category === selectedCategory;
			const matchesQuery =
				!q ||
				item.name.toLowerCase().includes(q) ||
				item.author.toLowerCase().includes(q) ||
				item.tags.some((t) => t.toLowerCase().includes(q));
			return matchesCategory && matchesQuery;
		});
	}, [illustrations, searchQuery, selectedCategory]);

	const copyCode = (name: string) => {
		const codeSnippet = `<${name} animated={${animated}} color="${primaryColor}" secondaryColor="${secondaryColor}" />`;
		navigator.clipboard.writeText(codeSnippet);
		setCopiedName(name);
		setTimeout(() => setCopiedName(null), 2000);
	};

	const sizeHeightMap = {
		sm: "180px",
		md: "240px",
		lg: "320px",
	};

	const cardBackgroundStyle = {
		dark: {
			background: "linear-gradient(145deg, #131b2e 0%, #0d1322 100%)",
			border: "1px solid rgba(255, 255, 255, 0.08)",
		},
		light: {
			background: "#ffffff",
			border: "1px solid #e2e8f0",
			color: "#0f172a",
		},
		grid: {
			background:
				"radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px), #0b0f19",
			backgroundSize: "16px 16px",
			border: "1px solid rgba(0, 212, 255, 0.2)",
		},
	}[cardBgMode];

	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundColor: "#070b14",
				color: "#f8fafc",
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* Top Navbar */}
			<header
				style={{
					position: "sticky",
					top: 0,
					zIndex: 40,
					backdropFilter: "blur(20px)",
					backgroundColor: "rgba(7, 11, 20, 0.85)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
					padding: "16px 32px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "16px",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
					<div
						style={{
							width: "36px",
							height: "36px",
							borderRadius: "10px",
							background: "linear-gradient(135deg, #00D4FF 0%, #0284C7 100%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 800,
							color: "#000",
							fontSize: "18px",
							boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
						}}
					>
						E
					</div>
					<div>
						<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<h1
								style={{
									margin: 0,
									fontSize: "20px",
									fontWeight: 700,
									letterSpacing: "-0.5px",
								}}
							>
								Esvigy Studio
							</h1>
							<span
								style={{
									fontSize: "12px",
									padding: "2px 8px",
									borderRadius: "12px",
									backgroundColor: "rgba(0, 212, 255, 0.15)",
									color: "#00D4FF",
									border: "1px solid rgba(0, 212, 255, 0.3)",
									fontWeight: 600,
								}}
							>
								{illustrations.length} Illustrations
							</span>
						</div>
						<p
							style={{
								margin: "2px 0 0 0",
								fontSize: "12px",
								color: "#94a3b8",
							}}
						>
							Live Interactive Monorepo Showcase & Generator Verification
						</p>
					</div>
				</div>

				{/* Search box */}
				<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
					<input
						type="text"
						placeholder="Search by name, tag, or author..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.05)",
							border: "1px solid rgba(255, 255, 255, 0.12)",
							borderRadius: "8px",
							padding: "8px 14px",
							color: "#fff",
							fontSize: "13px",
							outline: "none",
							minWidth: "260px",
							transition: "border 0.2s",
						}}
					/>
				</div>
			</header>

			{/* Control Toolbar */}
			<section
				style={{
					backgroundColor: "rgba(15, 23, 42, 0.5)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
					padding: "16px 32px",
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "20px",
				}}
			>
				{/* Category Pills */}
				<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setSelectedCategory(cat)}
							style={{
								padding: "6px 14px",
								borderRadius: "20px",
								fontSize: "12px",
								fontWeight: 600,
								cursor: "pointer",
								textTransform: "capitalize",
								backgroundColor:
									selectedCategory === cat
										? "#00D4FF"
										: "rgba(255, 255, 255, 0.06)",
								color: selectedCategory === cat ? "#070b14" : "#94a3b8",
								border: "none",
								transition: "all 0.2s ease",
							}}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Live Props Configurator */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "20px",
						flexWrap: "wrap",
					}}
				>
					{/* Animated toggle */}
					<label
						style={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							fontSize: "13px",
							fontWeight: 600,
							cursor: "pointer",
							color: animated ? "#00D4FF" : "#94a3b8",
						}}
					>
						<input
							type="checkbox"
							checked={animated}
							onChange={(e) => setAnimated(e.target.checked)}
							style={{ cursor: "pointer", accentColor: "#00D4FF" }}
						/>
						Micro-Animations
					</label>

					{/* Primary Color Picker */}
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<span style={{ fontSize: "12px", color: "#94a3b8" }}>Primary:</span>
						<input
							type="color"
							value={primaryColor}
							onChange={(e) => setPrimaryColor(e.target.value)}
							style={{
								width: "28px",
								height: "28px",
								border: "none",
								borderRadius: "6px",
								cursor: "pointer",
								backgroundColor: "transparent",
							}}
						/>
					</div>

					{/* Secondary Color Picker */}
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<span style={{ fontSize: "12px", color: "#94a3b8" }}>Secondary:</span>
						<input
							type="color"
							value={secondaryColor}
							onChange={(e) => setSecondaryColor(e.target.value)}
							style={{
								width: "28px",
								height: "28px",
								border: "none",
								borderRadius: "6px",
								cursor: "pointer",
								backgroundColor: "transparent",
							}}
						/>
					</div>

					{/* Preset Palettes */}
					<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
						{PRESET_PALETTES.map((p) => (
							<button
								key={p.name}
								title={p.name}
								onClick={() => {
									setPrimaryColor(p.primary);
									setSecondaryColor(p.secondary);
								}}
								style={{
									width: "20px",
									height: "20px",
									borderRadius: "50%",
									background: `linear-gradient(135deg, ${p.primary} 50%, ${p.secondary} 50%)`,
									border: "1px solid rgba(255, 255, 255, 0.3)",
									cursor: "pointer",
									padding: 0,
								}}
							/>
						))}
					</div>

					{/* Canvas Background mode */}
					<div
						style={{
							display: "flex",
							borderRadius: "8px",
							backgroundColor: "rgba(255, 255, 255, 0.05)",
							padding: "2px",
						}}
					>
						{(["dark", "light", "grid"] as const).map((mode) => (
							<button
								key={mode}
								onClick={() => setCardBgMode(mode)}
								style={{
									padding: "4px 10px",
									fontSize: "11px",
									fontWeight: 600,
									borderRadius: "6px",
									border: "none",
									cursor: "pointer",
									textTransform: "capitalize",
									backgroundColor:
										cardBgMode === mode ? "rgba(255, 255, 255, 0.15)" : "transparent",
									color: cardBgMode === mode ? "#fff" : "#94a3b8",
								}}
							>
								{mode}
							</button>
						))}
					</div>

					{/* Size controls */}
					<div
						style={{
							display: "flex",
							borderRadius: "8px",
							backgroundColor: "rgba(255, 255, 255, 0.05)",
							padding: "2px",
						}}
					>
						{(["sm", "md", "lg"] as const).map((s) => (
							<button
								key={s}
								onClick={() => setCardSize(s)}
								style={{
									padding: "4px 8px",
									fontSize: "11px",
									fontWeight: 600,
									borderRadius: "6px",
									border: "none",
									cursor: "pointer",
									textTransform: "uppercase",
									backgroundColor:
										cardSize === s ? "rgba(255, 255, 255, 0.15)" : "transparent",
									color: cardSize === s ? "#fff" : "#94a3b8",
								}}
							>
								{s}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Main Grid View */}
			<main style={{ padding: "32px", flex: 1 }}>
				{filteredIllustrations.length === 0 ? (
					<div
						style={{
							textAlign: "center",
							padding: "80px 20px",
							color: "#64748b",
						}}
					>
						<h2 style={{ fontSize: "18px", color: "#94a3b8" }}>
							No illustrations found for "{searchQuery}"
						</h2>
						<p style={{ fontSize: "13px" }}>
							Try adjusting your search query or selected category filter.
						</p>
					</div>
				) : (
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								cardSize === "lg"
									? "repeat(auto-fill, minmax(420px, 1fr))"
									: cardSize === "sm"
										? "repeat(auto-fill, minmax(260px, 1fr))"
										: "repeat(auto-fill, minmax(340px, 1fr))",
							gap: "24px",
						}}
					>
						{filteredIllustrations.map((item) => {
							const { name, Component, author, source, category } = item;
							const isCopied = copiedName === name;

							return (
								<div
									key={name}
									style={{
										...cardBackgroundStyle,
										borderRadius: "16px",
										overflow: "hidden",
										display: "flex",
										flexDirection: "column",
										boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
										transition: "transform 0.2s, box-shadow 0.2s",
									}}
								>
									{/* Card Header: Name + Category badge */}
									<div
										style={{
											padding: "16px 20px",
											borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<div>
											<span
												style={{
													fontWeight: 700,
													fontSize: "15px",
													letterSpacing: "-0.3px",
													color: cardBgMode === "light" ? "#0f172a" : "#f8fafc",
												}}
											>
												{name}
											</span>
											<span
												style={{
													marginLeft: "8px",
													fontSize: "10px",
													textTransform: "uppercase",
													letterSpacing: "0.5px",
													padding: "2px 6px",
													borderRadius: "4px",
													backgroundColor: "rgba(255, 255, 255, 0.08)",
													color: cardBgMode === "light" ? "#64748b" : "#94a3b8",
													fontWeight: 600,
												}}
											>
												{category}
											</span>
										</div>

										{/* Interactive Focus inspect button */}
										<button
											onClick={() => setFocusedItem(item)}
											title="Inspect Full Size"
											style={{
												background: "transparent",
												border: "none",
												color: cardBgMode === "light" ? "#64748b" : "#94a3b8",
												cursor: "pointer",
												padding: "4px",
												fontSize: "14px",
											}}
										>
											🔍
										</button>
									</div>

									{/* Illustration Display Stage */}
									<div
										style={{
											height: sizeHeightMap[cardSize],
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "24px",
											overflow: "hidden",
										}}
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Component
												animated={animated}
												color={primaryColor}
												secondaryColor={secondaryColor}
												style={{
													maxWidth: "100%",
													maxHeight: "100%",
													width: "auto",
                                       height: "auto",
                                       border: "1px solid red"
												}}
											/>
										</div>
									</div>

									{/* Card Footer: Dynamic Attribution & Quick Actions */}
									<div
										style={{
											padding: "14px 20px",
											borderTop: "1px solid rgba(255, 255, 255, 0.06)",
											backgroundColor:
												cardBgMode === "light"
													? "#f8fafc"
													: "rgba(0, 0, 0, 0.2)",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											fontSize: "12px",
										}}
									>
										{/* Creator & Source attribution */}
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												gap: "2px",
											}}
										>
											<span
												style={{
													color: cardBgMode === "light" ? "#475569" : "#94a3b8",
													fontSize: "11px",
												}}
											>
												Author:{" "}
												<strong
													style={{
														color: cardBgMode === "light" ? "#0f172a" : "#f1f5f9",
													}}
												>
													{author}
												</strong>
											</span>
											{source && (
												<a
													href={source}
													target="_blank"
													rel="noreferrer"
													style={{
														color: "#00D4FF",
														textDecoration: "none",
														fontSize: "11px",
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap",
														maxWidth: "180px",
													}}
												>
													{source.replace(/^https?:\/\/(www\.)?/, "")} ↗
												</a>
											)}
										</div>

										{/* Copy Button */}
										<button
											onClick={() => copyCode(name)}
											style={{
												padding: "6px 12px",
												borderRadius: "6px",
												fontSize: "11px",
												fontWeight: 600,
												cursor: "pointer",
												backgroundColor: isCopied
													? "#10B981"
													: "rgba(255, 255, 255, 0.1)",
												color: isCopied ? "#000" : "#fff",
												border: "none",
												transition: "all 0.2s",
											}}
										>
											{isCopied ? "✓ Copied!" : "Copy JSX"}
										</button>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</main>

			{/* Focused Detail Modal */}
			{focusedItem && (
				<div
					onClick={() => setFocusedItem(null)}
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						backdropFilter: "blur(8px)",
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
							maxWidth: "700px",
							width: "100%",
							padding: "32px",
							boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
							position: "relative",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "20px",
							}}
						>
							<div>
								<h2 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
									{focusedItem.name}
								</h2>
								<p style={{ margin: "4px 0 0", fontSize: "12px", color: "#94a3b8" }}>
									Author: {focusedItem.author} • Source:{" "}
									<a
										href={focusedItem.source}
										target="_blank"
										rel="noreferrer"
										style={{ color: "#00D4FF" }}
									>
										{focusedItem.source}
									</a>
								</p>
							</div>
							<button
								onClick={() => setFocusedItem(null)}
								style={{
									backgroundColor: "transparent",
									border: "none",
									color: "#94a3b8",
									fontSize: "20px",
									cursor: "pointer",
								}}
							>
								✕
							</button>
						</div>

						<div
							style={{
								height: "360px",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								borderRadius: "14px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "32px",
								marginBottom: "24px",
							}}
						>
							<focusedItem.Component
								animated={animated}
								color={primaryColor}
								secondaryColor={secondaryColor}
								style={{ maxWidth: "100%", maxHeight: "100%" }}
							/>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<code
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.06)",
									padding: "8px 14px",
									borderRadius: "8px",
									fontSize: "12px",
									color: "#00D4FF",
									fontFamily: "monospace",
								}}
							>
								&lt;{focusedItem.name} animated={String(animated)} color="
								{primaryColor}" secondaryColor="{secondaryColor}" /&gt;
							</code>
							<button
								onClick={() => copyCode(focusedItem.name)}
								style={{
									padding: "8px 18px",
									borderRadius: "8px",
									fontWeight: 600,
									fontSize: "13px",
									backgroundColor:
										copiedName === focusedItem.name ? "#10B981" : "#00D4FF",
									color: "#000",
									border: "none",
									cursor: "pointer",
								}}
							>
								{copiedName === focusedItem.name
									? "✓ Copied JSX!"
									: "Copy JSX Snippet"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
