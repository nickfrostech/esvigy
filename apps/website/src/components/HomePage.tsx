/** @format */

import { useState } from "react";
import { IllustrationItem } from "./IllustrationModal";
import { HeroSection } from "./home/HeroSection";
import { HeroDemoWidget } from "./home/HeroDemoWidget";
import { FeaturesSection } from "./home/FeaturesSection";
import { QuickStartGuide } from "./home/QuickStartGuide";
import { PackagesSection } from "./home/PackagesSection";
import { FeaturedIllustrations } from "./home/FeaturedIllustrations";
import { ContributorsSection } from "./home/ContributorsSection";
import { Footer } from "./home/Footer";

interface HomePageProps {
	onExploreCatalog: () => void;
	onSearch: (query: string) => void;
	onSelectIllustration: (item: IllustrationItem) => void;
	illustrations: IllustrationItem[];
	theme: "dark" | "light";
}

export function HomePage({
	onExploreCatalog,
	onSearch,
	onSelectIllustration,
	illustrations,
	theme,
}: HomePageProps) {
	const [selectedIllustrationName, setSelectedIllustrationName] =
		useState<string>("NotFoundRobot");

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "80px",
				paddingBottom: "70px",
			}}
		>
			{/* 1. Hero Section (Takes full viewport height until scroll, transparent floating SVGs) */}
			<HeroSection
				onExploreCatalog={onExploreCatalog}
				onSearch={onSearch}
				onSelectIllustrationName={setSelectedIllustrationName}
				theme={theme}
			/>

			{/* 2. Interactive Live Demo Widget (with comfortable margin from the hero) */}
			<HeroDemoWidget
				selectedIllustrationName={selectedIllustrationName}
				onSelectIllustrationName={setSelectedIllustrationName}
			/>

			{/* 3. Value Propositions ("Why Esvigy") */}
			<FeaturesSection />

			{/* 4. Quickstart & Installation Section */}
			<QuickStartGuide />

			{/* 5. Ecosystem Packages */}
			<PackagesSection />

			{/* 6. Featured Showcase Teaser */}
			<FeaturedIllustrations
				illustrations={illustrations}
				onSelectIllustration={onSelectIllustration}
				onExploreCatalog={onExploreCatalog}
				theme={theme}
			/>

			{/* 7. Contributors & Creators */}
			<ContributorsSection />

			{/* 8. Footer */}
			<Footer />
		</div>
	);
}
