/** @format */

import { useEffect } from "react";
import { useRoute, Redirect } from "wouter";
import { DocsLayout } from "./DocsLayout";
import { mdxComponents } from "./MDXComponents";
import { TocItem } from "./TableOfContents";

// Import MDX documentation files
import IntroductionDoc from "../../docs/introduction.mdx";
import InstallationDoc from "../../docs/installation.mdx";
import CliDoc from "../../docs/cli.mdx";
import ThemingDoc from "../../docs/theming.mdx";
import AnimationsDoc from "../../docs/animations.mdx";
import ReactDoc from "../../docs/frameworks-react.mdx";
import VueDoc from "../../docs/frameworks-vue.mdx";
import SvgDoc from "../../docs/frameworks-svg.mdx";

interface DocConfig {
	title: string;
	description: string;
	docFile: string;
	Component: any;
	toc: TocItem[];
}

const DOCS_MAP: Record<string, DocConfig> = {
	introduction: {
		title: "What is Esvigy?",
		description:
			"An open-source illustration ecosystem designed with the simplicity, tree-shaking, and multi-package architecture of Lucide.",
		docFile: "introduction.mdx",
		Component: IntroductionDoc,
		toc: [
			{ id: "available-illustrations", text: "Available Illustrations", level: 2 },
			{ id: "complete-set-of-illustrations", text: "Design Rules", level: 2 },
			{ id: "code-optimization-tree-shaking", text: "Code Optimization", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "official-packages-tools", text: "Official Packages & Tools", level: 2 },
			{ id: "comparison-matrix", text: "Comparison Matrix", level: 2 },
			{ id: "community", text: "Community", level: 2 },
		],
	},
	installation: {
		title: "Installation",
		description:
			"Choose between the standalone CLI scaffolder, React, Vue 3, or static SVG vector assets.",
		docFile: "installation.mdx",
		Component: InstallationDoc,
		toc: [
			{ id: "cli", text: "CLI", level: 2 },
			{ id: "react", text: "React", level: 2 },
			{ id: "vue", text: "Vue", level: 2 },
			{ id: "static-svg", text: "Static SVG", level: 2 },
		],
	},
	cli: {
		title: "CLI",
		description:
			"Official @esvigy/cli component scaffolder reference, options, interactive mode, and auto-detection.",
		docFile: "cli.mdx",
		Component: CliDoc,
		toc: [
			{ id: "commands", text: "Commands", level: 2 },
			{ id: "smart-auto-detection", text: "Smart Auto-Detection", level: 2 },
		],
	},
	theming: {
		title: "Two-Tone Theming",
		description:
			"Disciplined two-tone color hierarchy compatible with Tailwind CSS utilities and dark/light modes.",
		docFile: "theming.mdx",
		Component: ThemingDoc,
		toc: [
			{ id: "the-two-tone-structure", text: "The Two-Tone Structure", level: 2 },
			{ id: "props-reference", text: "Props Reference", level: 2 },
			{ id: "tailwind-css-integration", text: "Tailwind CSS Integration", level: 2 },
			{ id: "dark-light-mode-adaptation", text: "Dark & Light Mode Adaptation", level: 2 },
			{ id: "recommended-palette-presets", text: "Recommended Palette Presets", level: 2 },
		],
	},
	animations: {
		title: "Micro-Animations",
		description:
			"Zero-runtime, GPU-accelerated CSS keyframe animations with built-in accessibility compliance.",
		docFile: "animations.mdx",
		Component: AnimationsDoc,
		toc: [
			{ id: "zero-runtime-performance", text: "Zero-Runtime Performance", level: 2 },
			{ id: "toggling-animations", text: "Toggling Animations", level: 2 },
			{ id: "accessibility-reduced-motion", text: "Accessibility: Reduced Motion", level: 2 },
			{ id: "customizing-animation-speed", text: "Customizing Animation Speed", level: 2 },
		],
	},
	"frameworks/react": {
		title: "React",
		description:
			"Official @esvigy/react adapter with Server Components (RSC) and Next.js App Router support.",
		docFile: "frameworks-react.mdx",
		Component: ReactDoc,
		toc: [
			{ id: "installation", text: "Installation", level: 2 },
			{ id: "nextjs-app-router-pages-router", text: "Next.js Integration", level: 2 },
			{ id: "vite-remix-setup", text: "Vite & Remix Setup", level: 2 },
			{ id: "typescript-interface-esvigyprops", text: "TypeScript Props Reference", level: 2 },
		],
	},
	"frameworks/vue": {
		title: "Vue",
		description:
			"Official @esvigy/vue adapter with Composition API and Nuxt 3 support.",
		docFile: "frameworks-vue.mdx",
		Component: VueDoc,
		toc: [
			{ id: "installation", text: "Installation", level: 2 },
			{ id: "vue-3-vite-setup", text: "Vue 3 Setup", level: 2 },
			{ id: "nuxt-3-setup", text: "Nuxt 3 Setup", level: 2 },
			{ id: "vue-component-props", text: "Component Props", level: 2 },
		],
	},
	"frameworks/svg": {
		title: "SVG & HTML",
		description:
			"Normalized vector files for static HTML, Astro, and non-framework projects.",
		docFile: "frameworks-svg.mdx",
		Component: SvgDoc,
		toc: [
			{ id: "downloading-via-cli", text: "Downloading via CLI", level: 2 },
			{ id: "using-in-vanilla-html", text: "Using in Vanilla HTML", level: 2 },
			{ id: "styling-raw-svgs-with-css", text: "Styling Raw SVGs with CSS", level: 2 },
			{ id: "using-in-astro-markdown", text: "Using in Astro & Markdown", level: 2 },
		],
	},
};

export function DocsPage() {
	const [matchSimple, paramsSimple] = useRoute("/docs/:slug");
	const [matchFramework, paramsFramework] = useRoute("/docs/frameworks/:framework");

	const rawSlug = matchFramework
		? `frameworks/${paramsFramework?.framework}`
		: paramsSimple?.slug || "introduction";

	const currentDoc = DOCS_MAP[rawSlug];

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [rawSlug]);

	if (rawSlug === "quick-start") {
		return <Redirect to='/docs/installation' />;
	}

	if (!currentDoc) {
		return <Redirect to='/docs/introduction' />;
	}

	const { title, description, docFile, Component, toc } = currentDoc;

	return (
		<DocsLayout title={title} description={description} docFile={docFile} toc={toc}>
			<Component components={mdxComponents} />
		</DocsLayout>
	);
}
