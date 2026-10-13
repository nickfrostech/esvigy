/** @format */

import { useState, useMemo, useEffect, useRef } from "react";
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
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	theme: "dark" | "light";
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
	searchQuery,
	setSearchQuery,
	theme,
}: IllustrationCatalogProps) {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cardBgMode, setCardBgMode] = useState<"dark" | "light" | "grid">(
		theme === "light" ? "light" : "dark",
	);
	const [cardSize, setCardSize] = useState<"sm" | "md" | "lg">("md");
	const [copiedName, setCopiedName] = useState<string | null>(null);
	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	const desktopSidebarRef = useRef<HTMLElement | null>(null);

	// Prevent wheel scrolling on desktop sidebar from chaining to background page
	useEffect(() => {
		const sidebar = desktopSidebarRef.current;
		if (!sidebar) return;

		const handleWheel = (e: WheelEvent) => {
			const { deltaY } = e;
			const isScrollable = sidebar.scrollHeight > sidebar.clientHeight;

			if (!isScrollable) {
				// Prevent wheel event from scrolling document when sidebar fits completely
				e.preventDefault();
				return;
			}

			const atTop = sidebar.scrollTop <= 0 && deltaY < 0;
			const atBottom =
				sidebar.scrollTop + sidebar.clientHeight >= sidebar.scrollHeight - 1 &&
				deltaY > 0;

			if (atTop || atBottom) {
				// Prevent bubbling to background page when reaching boundaries
				e.preventDefault();
			}
		};

		sidebar.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			sidebar.removeEventListener("wheel", handleWheel);
		};
	}, []);

	// Lock background page scroll when mobile filter drawer is open
	useEffect(() => {
		if (mobileFilterOpen) {
			const prevOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prevOverflow;
			};
		}
	}, [mobileFilterOpen]);

	// Extract categories dynamically
	const categories = useMemo(() => {
		const set = new Set(illustrations.map((item) => item.category));
		return ["all", ...Array.from(set)];
	}, [illustrations]);

	// Category counts
	const categoryCounts = useMemo(() => {
		const counts: Record<string, number> = { all: illustrations.length };
		for (const item of illustrations) {
			counts[item.category] = (counts[item.category] || 0) + 1;
		}
		return counts;
	}, [illustrations]);

	// Filter items
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

	const sizeHeightMap = {
		sm: "180px",
		md: "240px",
		lg: "320px",
	};

	const cardBackgroundStyle = {
		dark: {
			background: "var(--bg-surface)",
			border: "1px solid var(--border-subtle)",
			color: "var(--text-main)",
		},
		light: {
			background: "#ffffff",
			border: "1px solid #e2e8f0",
			color: "#0f172a",
		},
		grid: {
			background: "var(--bg-surface)",
			backgroundImage:
				"radial-gradient(circle, var(--border-subtle) 1px, transparent 1px)",
			backgroundSize: "16px 16px",
			border: "1px solid var(--border-subtle)",
			color: "var(--text-main)",
		},
	}[cardBgMode];

	const quickCopyCode = (e: React.MouseEvent, name: string) => {
		e.stopPropagation();
		const codeSnippet = `<${name} animated={${animated}} color="${primaryColor}" secondaryColor="${secondaryColor}" />`;
		navigator.clipboard.writeText(codeSnippet);
		setCopiedName(name);
		setTimeout(() => setCopiedName(null), 2000);
	};

	// Reusable filter sectors content (used in both desktop sidebar & mobile drawer)
	const renderFilterSectors = () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
			{/* Sector 1: Categories (Most used sector first) */}
			<div>
				<div
					style={{
						fontSize: "11px",
						fontWeight: 600,
						color: "var(--text-dim)",
						textTransform: "uppercase",
						letterSpacing: "0.8px",
						marginBottom: "10px",
					}}
				>
					Categories
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
					{categories.map((cat) => {
						const isSelected = selectedCategory === cat;
						return (
							<button
								key={cat}
								onClick={() => {
									setSelectedCategory(cat);
									setMobileFilterOpen(false);
								}}
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									width: "100%",
									padding: "8px 12px",
									borderRadius: "10px",
									cornerShape: "squircle",
									fontSize: "13px",
									fontWeight: isSelected ? 600 : 400,
									cursor: "pointer",
									border: isSelected
										? "1px solid var(--cyan-primary)"
										: "1px solid transparent",
									backgroundColor: isSelected
										? "var(--bg-surface-hover)"
										: "transparent",
									color: isSelected
										? "var(--cyan-primary)"
										: "var(--text-main)",
									textTransform: "capitalize",
									transition: "all 0.15s ease",
								}}
							>
								<span>
									{cat === "all" ? "All Illustrations" : cat.replace("-", " ")}
								</span>
								<span
									style={{
										fontSize: "11px",
										color: isSelected
											? "var(--cyan-primary)"
											: "var(--text-muted)",
										padding: "1px 6px",
										borderRadius: "6px",
										backgroundColor: "var(--bg-dark)",
									}}
								>
									{categoryCounts[cat] || 0}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			<div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />

			{/* Sector 2: Palettes & Colors */}
			<div>
				<div
					style={{
						fontSize: "11px",
						fontWeight: 600,
						color: "var(--text-dim)",
						textTransform: "uppercase",
						letterSpacing: "0.8px",
						marginBottom: "10px",
					}}
				>
					Color Palettes
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "6px",
						marginBottom: "12px",
					}}
				>
					{PRESET_PALETTES.map((pal) => {
						const isSelected = primaryColor === pal.primary;
						return (
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
									padding: "6px 8px",
									borderRadius: "8px",
									cornerShape: "squircle",
									fontSize: "12px",
									fontWeight: isSelected ? 600 : 400,
									cursor: "pointer",
									border: isSelected
										? "1px solid var(--cyan-primary)"
										: "1px solid var(--border-subtle)",
									backgroundColor: isSelected
										? "var(--bg-surface-hover)"
										: "transparent",
									color: isSelected
										? "var(--cyan-primary)"
										: "var(--text-muted)",
									transition: "all 0.15s ease",
								}}
							>
								<span
									style={{
										width: "10px",
										height: "10px",
										borderRadius: "50%",
										backgroundColor: pal.primary,
										flexShrink: 0,
									}}
								/>
								<span
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
									}}
								>
									{pal.name}
								</span>
							</button>
						);
					})}
				</div>

				{/* Custom Color Pickers */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "6px 10px",
						backgroundColor: "var(--bg-dark)",
						borderRadius: "10px",
						border: "1px solid var(--border-subtle)",
					}}
				>
					<label
						style={{
							fontSize: "11px",
							color: "var(--text-muted)",
							display: "flex",
							alignItems: "center",
							gap: "6px",
							cursor: "pointer",
						}}
					>
						<span>Primary</span>
						<input
							type='color'
							value={primaryColor}
							onChange={(e) => setPrimaryColor(e.target.value)}
							style={{
								width: "20px",
								height: "20px",
								border: "none",
								backgroundColor: "transparent",
								cursor: "pointer",
							}}
						/>
					</label>
					<label
						style={{
							fontSize: "11px",
							color: "var(--text-muted)",
							display: "flex",
							alignItems: "center",
							gap: "6px",
							cursor: "pointer",
						}}
					>
						<span>Secondary</span>
						<input
							type='color'
							value={secondaryColor}
							onChange={(e) => setSecondaryColor(e.target.value)}
							style={{
								width: "20px",
								height: "20px",
								border: "none",
								backgroundColor: "transparent",
								cursor: "pointer",
							}}
						/>
					</label>
				</div>
			</div>

			<div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />

			{/* Sector 3: Motion & Animation */}
			<div>
				<div
					style={{
						fontSize: "11px",
						fontWeight: 600,
						color: "var(--text-dim)",
						textTransform: "uppercase",
						letterSpacing: "0.8px",
						marginBottom: "10px",
					}}
				>
					Motion
				</div>
				<label
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						fontSize: "13px",
						color: "var(--text-main)",
						cursor: "pointer",
						padding: "4px 2px",
					}}
				>
					<span>Micro-Animations</span>
					<input
						type='checkbox'
						checked={animated}
						onChange={(e) => setAnimated(e.target.checked)}
						style={{
							cursor: "pointer",
							accentColor: "var(--cyan-primary)",
						}}
					/>
				</label>
			</div>

			<div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />

			{/* Sector 4: Canvas Surface */}
			<div>
				<div
					style={{
						fontSize: "11px",
						fontWeight: 600,
						color: "var(--text-dim)",
						textTransform: "uppercase",
						letterSpacing: "0.8px",
						marginBottom: "10px",
					}}
				>
					Canvas Surface
				</div>
				<div
					style={{
						display: "flex",
						backgroundColor: "var(--bg-dark)",
						borderRadius: "8px",
						cornerShape: "squircle",
						padding: "2px",
						border: "1px solid var(--border-subtle)",
					}}
				>
					{(["dark", "light", "grid"] as const).map((mode) => (
						<button
							key={mode}
							onClick={() => setCardBgMode(mode)}
							style={{
								flex: 1,
								backgroundColor:
									cardBgMode === mode
										? "var(--bg-surface-hover)"
										: "transparent",
								color:
									cardBgMode === mode
										? "var(--cyan-primary)"
										: "var(--text-muted)",
								border: "none",
								borderRadius: "6px",
								cornerShape: "squircle",
								padding: "4px 8px",
								fontSize: "11px",
								fontWeight: 500,
								cursor: "pointer",
								textTransform: "capitalize",
							}}
						>
							{mode}
						</button>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<div
			style={{
				maxWidth: "1400px",
				margin: "0 auto",
				padding: "28px 24px 70px 24px",
				width: "100%",
			}}
		>
			{/* Page Header */}
			<div style={{ marginBottom: "24px" }}>
				<h1
					style={{
						fontSize: "28px",
						fontWeight: 600,
						letterSpacing: "-0.5px",
						margin: "0 0 6px 0",
						color: "var(--text-main)",
					}}
				>
					Illustration Studio
				</h1>
				<p
					style={{
						color: "var(--text-muted)",
						fontSize: "14px",
						margin: 0,
					}}
				>
					Interactive catalog and verification workbench. Preview with
					real-time themes and copy ready-to-use snippets.
				</p>
			</div>

			{/* Top Bar: Search, Size, Count, Mobile Filter Button */}
			<div
				className='flat-panel'
				style={{
					padding: "12px 18px",
					marginBottom: "24px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexWrap: "wrap",
					gap: "14px",
				}}
			>
				{/* Search Input */}
				<div style={{ position: "relative", flex: 1, minWidth: "240px" }}>
					<input
						type='text'
						placeholder='Search by name, tag, or author...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						style={{
							width: "100%",
							backgroundColor: "var(--bg-dark)",
							border: "1px solid var(--border-subtle)",
							borderRadius: "12px",
							cornerShape: "squircle",
							padding: "9px 14px",
							color: "var(--text-main)",
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
								color: "var(--text-muted)",
								cursor: "pointer",
								fontSize: "14px",
							}}
						>
							✕
						</button>
					)}
				</div>

				{/* Right Controls: Filter button on mobile, Size selector, Count */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
						flexWrap: "wrap",
					}}
				>
					{/* Mobile Filter Button */}
					<button
						onClick={() => setMobileFilterOpen(true)}
						className='catalog-mobile-filter-btn btn-secondary'
						style={{
							fontSize: "13px",
							padding: "7px 14px",
							borderRadius: "10px",
							cornerShape: "squircle",
						}}
					>
						<span>Filters</span>
						{selectedCategory !== "all" && (
							<span
								style={{
									fontSize: "10px",
									padding: "1px 6px",
									borderRadius: "6px",
									backgroundColor: "var(--cyan-primary)",
									color: "var(--primary-contrast)",
									fontWeight: 600,
									textTransform: "capitalize",
								}}
							>
								{selectedCategory}
							</span>
						)}
					</button>

					{/* Size segmented control */}
					<div
						style={{
							display: "flex",
							backgroundColor: "var(--bg-dark)",
							borderRadius: "8px",
							cornerShape: "squircle",
							padding: "2px",
							border: "1px solid var(--border-subtle)",
						}}
					>
						{(["sm", "md", "lg"] as const).map((s) => (
							<button
								key={s}
								onClick={() => setCardSize(s)}
								style={{
									backgroundColor:
										cardSize === s
											? "var(--bg-surface-hover)"
											: "transparent",
									color:
										cardSize === s
											? "var(--cyan-primary)"
											: "var(--text-muted)",
									border: "none",
									borderRadius: "6px",
									cornerShape: "squircle",
									padding: "4px 9px",
									fontSize: "11px",
									fontWeight: 500,
									cursor: "pointer",
									textTransform: "uppercase",
								}}
							>
								{s}
							</button>
						))}
					</div>

					{/* Count indicator */}
					<span
						style={{
							fontSize: "13px",
							color: "var(--text-muted)",
							fontWeight: 500,
							whiteSpace: "nowrap",
						}}
					>
						Showing{" "}
						<strong
							style={{ color: "var(--cyan-primary)", fontWeight: 600 }}
						>
							{filteredIllustrations.length}
						</strong>{" "}
						of {illustrations.length}
					</span>
				</div>
			</div>

			{/* Main Content Area: Sidebar on Desktop + Grid on Right */}
			<div className='catalog-layout'>
				{/* Desktop Filter Sidebar */}
				<aside
					ref={desktopSidebarRef}
					className='catalog-sidebar-desktop flat-panel'
					style={{ padding: "20px" }}
				>
					{renderFilterSectors()}
				</aside>

				{/* Grid Area */}
				<div className='catalog-grid-area'>
					{filteredIllustrations.length === 0 ? (
						<div
							style={{
								textAlign: "center",
								padding: "60px 20px",
								color: "var(--text-dim)",
							}}
						>
							<p style={{ fontSize: "16px", margin: "0 0 12px 0" }}>
								No illustrations match "{searchQuery}"
							</p>
							<button
								onClick={() => {
									setSearchQuery("");
									setSelectedCategory("all");
								}}
								className='btn-secondary'
								style={{ fontSize: "13px" }}
							>
								Clear filters
							</button>
						</div>
					) : (
						<div
							style={{
								display: "grid",
								gridTemplateColumns: `repeat(auto-fill, minmax(${
									cardSize === "sm"
										? "200px"
										: cardSize === "lg"
											? "340px"
											: "260px"
								}, 1fr))`,
								gap: "20px",
							}}
						>
							{filteredIllustrations.map((item) => (
								<div
									key={item.name}
									onClick={() => onSelectIllustration(item)}
									style={{
										...cardBackgroundStyle,
										borderRadius: "18px",
										cornerShape: "squircle",
										padding: "20px",
										cursor: "pointer",
										position: "relative",
										display: "flex",
										flexDirection: "column",
										transition:
											"border-color 0.2s ease, transform 0.2s ease",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.borderColor =
											"var(--cyan-primary)";
										e.currentTarget.style.transform = "translateY(-2px)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.borderColor =
											cardBackgroundStyle.border.split(" ")[2] ||
											"var(--border-subtle)";
										e.currentTarget.style.transform = "translateY(0)";
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
											borderTop: "1px solid var(--border-subtle)",
											paddingTop: "12px",
											marginTop: "auto",
										}}
									>
										<div>
											<div style={{ fontWeight: 600, fontSize: "14px" }}>
												{item.name}
											</div>
											<div
												style={{
													fontSize: "11px",
													color: "var(--text-muted)",
													marginTop: "2px",
												}}
											>
												by {item.author}
											</div>
										</div>

										<button
											onClick={(e) => quickCopyCode(e, item.name)}
											title='Quick Copy JSX'
											style={{
												backgroundColor:
													copiedName === item.name
														? "var(--cyan-primary)"
														: "var(--bg-surface-hover)",
												color:
													copiedName === item.name
														? "var(--primary-contrast)"
														: "var(--text-main)",
												border: "1px solid var(--border-subtle)",
												borderRadius: "8px",
												cornerShape: "squircle",
												padding: "5px 10px",
												fontSize: "11px",
												fontWeight: 500,
												cursor: "pointer",
												transition: "all 0.15s",
											}}
										>
											{copiedName === item.name ? "Copied" : "Copy"}
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Mobile Filter Drawer Overlay */}
			{mobileFilterOpen && (
				<div
					onClick={() => setMobileFilterOpen(false)}
					onWheel={(e) => e.stopPropagation()}
					onTouchMove={(e) => e.stopPropagation()}
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						backdropFilter: "blur(4px)",
						WebkitBackdropFilter: "blur(4px)",
						zIndex: 140,
						overscrollBehavior: "contain",
					}}
				/>
			)}

			{/* Mobile Filter Drawer (Slide out from left) */}
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					bottom: 0,
					width: "300px",
					maxWidth: "85vw",
					backgroundColor: "var(--bg-surface)",
					borderRight: "1px solid var(--border-subtle)",
					zIndex: 150,
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					transform: mobileFilterOpen ? "translateX(0)" : "translateX(-100%)",
					transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
					overflowY: "auto",
					overscrollBehavior: "contain",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "16px",
						paddingBottom: "12px",
						borderBottom: "1px solid var(--border-subtle)",
					}}
				>
					<span
						style={{
							fontSize: "16px",
							fontWeight: 600,
							color: "var(--text-main)",
						}}
					>
						Filters & Options
					</span>
					<button
						onClick={() => setMobileFilterOpen(false)}
						className='btn-icon'
						style={{ width: "32px", height: "32px" }}
						aria-label='Close filters'
					>
						✕
					</button>
				</div>

				{renderFilterSectors()}
			</div>
		</div>
	);
}
