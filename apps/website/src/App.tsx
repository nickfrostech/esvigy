/** @format */

import { useState, useMemo, useEffect } from "react";
import { Route, Switch, Redirect, useLocation, useSearch } from "wouter";
import * as EsvigyComponents from "@esvigy/react";
import manifestData from "../../../packages/svg/manifest.json";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { IllustrationCatalog } from "./components/IllustrationCatalog";
import {
	IllustrationModal,
	IllustrationItem,
} from "./components/IllustrationModal";
import { DocsPage } from "./components/docs/DocsPage";

export function App() {
	const [location, navigate] = useLocation();
	const searchString = useSearch();
	const [searchQuery, setSearchQuery] = useState("");
	const [theme, setTheme] = useState<"dark" | "light">(() => {
		return (
			(localStorage.getItem("esvigy_theme") as "dark" | "light") || "dark"
		);
	});
	const [primaryColor, setPrimaryColor] = useState("#00D4FF");
	const [secondaryColor, setSecondaryColor] = useState("#0F172A");
	const [animated, setAnimated] = useState(true);

	// Sync theme to document attribute and storage
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("esvigy_theme", theme);
	}, [theme]);

	// Discover and sort all illustration components from @esvigy/react
	const illustrations: IllustrationItem[] = useMemo(() => {
		const manifest = manifestData as Record<string, any>;
		return Object.entries(EsvigyComponents)
			.filter(
				([name, Comp]) =>
					typeof Comp === "function" &&
					name !== "App" &&
					!name.startsWith("_"),
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

	// Extract illustration name if on /illustrations/:name
	const illustrationMatch = location.match(/^\/illustrations\/([^/?#]+)/i);
	const routeIllustrationName = illustrationMatch
		? decodeURIComponent(illustrationMatch[1])
		: null;

	const selectedItem = useMemo(() => {
		if (!routeIllustrationName) return null;
		return (
			illustrations.find(
				(item) =>
					item.name.toLowerCase() === routeIllustrationName.toLowerCase(),
			) || null
		);
	}, [routeIllustrationName, illustrations]);

	// Sync search query from URL search parameters (?q=... or ?search=...)
	useEffect(() => {
		const params = new URLSearchParams(searchString);
		const q = params.get("q") || params.get("search");
		if (q !== null && q !== undefined) {
			setSearchQuery(q);
		}
	}, [searchString]);

	// Sync page title with active section and selected illustration
	useEffect(() => {
		if (selectedItem) {
			document.title = `${selectedItem.name} — Illustration Studio — Esvigy`;
		} else if (location.startsWith("/docs")) {
			document.title = "Documentation — Esvigy";
		} else if (
			location.startsWith("/illustrations") ||
			location.startsWith("/catalog")
		) {
			document.title = "Illustration Studio — Esvigy";
		} else {
			document.title =
				"Esvigy — UI Illustrations as simple and developer-friendly as icons";
		}
	}, [location, selectedItem]);


	// Handle in-page hash scrolling (e.g. /#guide or /#packages)
	const handleNavigateSection = (sectionId: "guide" | "packages") => {
		const targetId = sectionId === "guide" ? "packages" : sectionId;
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const rawHash = window.location.hash.replace("#", "");
		const hash = rawHash === "guide" ? "packages" : rawHash;
		if (hash && (location === "/" || location === "")) {
			setTimeout(() => {
				const el = document.getElementById(hash);
				if (el) {
					el.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
		}
	}, [location]);

	const handleSelectIllustration = (item: IllustrationItem) => {
		navigate(`/illustrations/${item.name}`);
	};

	const handleCloseModal = () => {
		if (searchQuery.trim()) {
			navigate(`/illustrations?q=${encodeURIComponent(searchQuery.trim())}`);
		} else {
			navigate("/illustrations");
		}
	};

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
		if (location.startsWith("/illustrations") && !routeIllustrationName) {
			const newSearch = query.trim()
				? `?q=${encodeURIComponent(query.trim())}`
				: "";
			window.history.replaceState(null, "", `/illustrations${newSearch}`);
		}
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "var(--bg-dark)",
				color: "var(--text-main)",
			}}
		>
			{/* Global Navigation Header */}
			<Navbar
				count={illustrations.length}
				theme={theme}
				setTheme={setTheme}
				onNavigateSection={handleNavigateSection}
			/>

			{/* Main Content Area */}
			<main style={{ flex: 1, paddingTop: "60px" }}>
				<Switch>
					<Route path='/'>
						<HomePage
							onExploreCatalog={() => {
								navigate("/illustrations");
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							onSearch={(query) => {
								navigate(`/illustrations?q=${encodeURIComponent(query)}`);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							onSelectIllustration={handleSelectIllustration}
							illustrations={illustrations}
							theme={theme}
						/>
					</Route>

					<Route path='/catalog'>
						<Redirect to='/illustrations' />
					</Route>

					{/* Documentation Routes */}
					<Route path='/docs'>
						<Redirect to='/docs/introduction' />
					</Route>

					<Route path='/docs/:slug'>
						<DocsPage />
					</Route>

					<Route path='/docs/frameworks/:framework'>
						<DocsPage />
					</Route>

					<Route path='/illustrations/:name?'>

						{() => (
							<IllustrationCatalog
								illustrations={illustrations}
								onSelectIllustration={handleSelectIllustration}
								primaryColor={primaryColor}
								setPrimaryColor={setPrimaryColor}
								secondaryColor={secondaryColor}
								setSecondaryColor={setSecondaryColor}
								animated={animated}
								setAnimated={setAnimated}
								searchQuery={searchQuery}
								setSearchQuery={handleSearchChange}
								theme={theme}
							/>
						)}
					</Route>

					{/* Fallback route */}
					<Route>
						<Redirect to='/' />
					</Route>
				</Switch>
			</main>

			{/* Deep Inspection Modal */}
			<IllustrationModal
				item={selectedItem}
				onClose={handleCloseModal}
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
				animated={animated}
			/>
		</div>
	);
}

