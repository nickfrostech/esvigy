/** @format */

import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";

export interface DocRouteItem {
	slug: string;
	title: string;
	keywords?: string[];
}

export interface DocCategory {
	title: string;
	items: DocRouteItem[];
}

export const DOCS_NAVIGATION: DocCategory[] = [
	{
		title: "Introduction",
		items: [
			{
				slug: "introduction",
				title: "What is Esvigy?",
				keywords: ["about", "overview", "philosophy", "comparison", "matrix", "lucide", "undraw"],
			},
			{
				slug: "installation",
				title: "Installation",
				keywords: ["install", "pnpm", "npm", "yarn", "bun", "setup", "quickstart"],
			},
		],
	},
	{
		title: "Frameworks & Adapters",
		items: [
			{
				slug: "frameworks/react",
				title: "React",
				keywords: ["react", "nextjs", "next.js", "rsc", "vite", "remix", "ssr"],
			},
			{
				slug: "frameworks/vue",
				title: "Vue",
				keywords: ["vue", "vue3", "nuxt", "nuxt3", "sfc", "vite"],
			},
			{
				slug: "frameworks/svelte",
				title: "Svelte",
				keywords: ["svelte", "svelte4", "svelte5", "sveltekit", "kit", "vite"],
			},
			{
				slug: "cli",
				title: "CLI",
				keywords: ["cli", "add", "list", "scaffold", "shadcn", "terminal", "detect"],
			},
			{
				slug: "frameworks/svg",
				title: "SVG & HTML",
				keywords: ["svg", "raw", "static", "vanilla", "html", "astro"],
			},
		],
	},
	{
		title: "Theming & Style",
		items: [
			{
				slug: "theming",
				title: "Two-Tone Theming",
				keywords: ["theme", "color", "secondaryColor", "tailwind", "dark", "light", "presets"],
			},
			{
				slug: "animations",
				title: "Micro-Animations",
				keywords: ["animations", "keyframes", "css", "gpu", "motion", "prefers-reduced-motion"],
			},
		],
	},
];

interface DocsSidebarProps {
	onCloseMobile?: () => void;
}

export function DocsSidebar({ onCloseMobile }: DocsSidebarProps) {
	const [location] = useLocation();
	const [searchQuery, setSearchQuery] = useState("");

	// Normalise path (default /docs -> /docs/introduction)
	const currentSlug = location.startsWith("/docs/")
		? location.replace("/docs/", "")
		: "introduction";

	// Filter navigation items by search query
	const filteredCategories = useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return DOCS_NAVIGATION;

		return DOCS_NAVIGATION.map((category) => {
			const matchingItems = category.items.filter((item) => {
				const titleMatch = item.title.toLowerCase().includes(q);
				const slugMatch = item.slug.toLowerCase().includes(q);
				const keywordMatch = (item.keywords || []).some((kw) =>
					kw.toLowerCase().includes(q),
				);
				return titleMatch || slugMatch || keywordMatch;
			});

			return {
				...category,
				items: matchingItems,
			};
		}).filter((category) => category.items.length > 0);
	}, [searchQuery]);

	return (
		<aside
			style={{
				width: "240px",
				flexShrink: 0,
				padding: "24px 16px 40px 0",
				boxSizing: "border-box",
			}}
		>

			{/* Docs Search Bar */}
			<div
				style={{
					marginBottom: "20px",
					position: "relative",
				}}
			>
				<Search
					size={14}
					style={{
						position: "absolute",
						left: "10px",
						top: "50%",
						transform: "translateY(-50%)",
						color: "var(--text-dim)",
						pointerEvents: "none",
					}}
				/>
				<input
					type='text'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder='Search documentation...'
					aria-label='Search documentation'
					style={{
						width: "100%",
						boxSizing: "border-box",
						padding: "7px 28px 7px 30px",
						fontSize: "12.5px",
						fontFamily: "var(--font-sans)",
						color: "var(--text-main)",
						backgroundColor: "var(--bg-surface)",
						border: "1px solid var(--border-subtle)",
						borderRadius: "8px",
						outline: "none",
						transition: "border-color 0.15s ease",
					}}
					onFocus={(e) =>
						(e.currentTarget.style.borderColor = "var(--cyan-primary)")
					}
					onBlur={(e) =>
						(e.currentTarget.style.borderColor = "var(--border-subtle)")
					}
				/>
				{searchQuery && (
					<button
						onClick={() => setSearchQuery("")}
						aria-label='Clear search'
						style={{
							position: "absolute",
							right: "8px",
							top: "50%",
							transform: "translateY(-50%)",
							background: "none",
							border: "none",
							color: "var(--text-dim)",
							cursor: "pointer",
							padding: "2px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<X size={12} />
					</button>
				)}
			</div>

			{/* Navigation Categories */}
			<nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				{filteredCategories.length === 0 ? (
					<div
						style={{
							fontSize: "13px",
							color: "var(--text-dim)",
							padding: "12px 8px",
							fontStyle: "italic",
						}}
					>
						No matching documentation found.
					</div>
				) : (
					filteredCategories.map((category, catIndex) => (
						<div key={category.title}>
							{catIndex > 0 && (
								<div
									style={{
										height: "1px",
										backgroundColor: "var(--border-subtle)",
										margin: "0 0 16px 0",
										opacity: 0.6,
									}}
								/>
							)}
							<div
								style={{
									fontSize: "11.5px",
									fontWeight: 600,
									textTransform: "uppercase",
									letterSpacing: "0.06em",
									color: "var(--text-dim)",
									marginBottom: "8px",
									paddingLeft: "8px",
								}}
							>
								{category.title}
							</div>
							<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
								{category.items.map((item) => {
									const isActive = currentSlug === item.slug;
									return (
										<Link
											key={item.slug}
											href={`/docs/${item.slug}`}
											onClick={() => {
												setSearchQuery("");
												onCloseMobile?.();
											}}
											style={{
												display: "block",
												padding: "6px 10px",
												fontSize: "13.5px",
												fontWeight: isActive ? 600 : 450,
												color: isActive
													? "var(--cyan-primary)"
													: "var(--text-muted)",
												backgroundColor: "transparent",
												border: "none",
												textDecoration: "none",
												transition: "color 0.15s ease",
											}}

										>
											{item.title}
										</Link>
									);
								})}
							</div>
						</div>
					))
				)}
			</nav>
		</aside>
	);
}
