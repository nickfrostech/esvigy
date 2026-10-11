/** @format */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, "../../svg/src");
const OUTPUT_DIR = path.resolve(__dirname, "../src/illustrations");
const INDEX_FILE = path.resolve(__dirname, "../src/index.ts");

// Helper to convert kebab-case SVG attributes to React camelCase
function toReactSvgAttrs(svgContent: string): string {
	return svgContent
		.replace(/<!--[\s\S]*?-->/g, "") // Strip XML comments
		.replace(/\bclass=/g, "className=")
		.replace(/stroke-width=/g, "strokeWidth=")
		.replace(/stroke-linecap=/g, "strokeLinecap=")
		.replace(/stroke-linejoin=/g, "strokeLinejoin=")
		.replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
		.replace(/text-anchor=/g, "textAnchor=")
		.replace(/font-size=/g, "fontSize=")
		.replace(/font-weight=/g, "fontWeight=")
		.replace(/font-family=/g, "fontFamily=")
		.replace(/fill-rule=/g, "fillRule=")
		.replace(/clip-rule=/g, "clipRule=")
		.replace(/clip-path=/g, "clipPath=")
		.replace(/stop-color=/g, "stopColor=")
		.replace(/stop-opacity=/g, "stopOpacity=");
}

function generateComponent(fileName: string): string {
	const componentName = path.basename(fileName, ".svg");
	const svgRaw = fs.readFileSync(path.join(SVG_DIR, fileName), "utf-8");

	// Extract viewBox (defaults to 0 0 400 300 if not found)
	const viewBoxMatch = svgRaw.match(/viewBox="([^"]+)"/);
	const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 400 300";

	// Extract <style> block from raw SVG if authored
	const styleMatch = svgRaw.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
	const rawCss = styleMatch ? styleMatch[1].trim() : "";

	// Extract inner SVG content (between <svg ...> and </svg>)
	const innerContentMatch = svgRaw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
	let inner = innerContentMatch ? innerContentMatch[1].trim() : "";

	// Strip the raw <style> tag from inner so we can render it cleanly in JSX
	inner = inner.replace(/<style[^>]*>[\s\S]*?<\/style>/i, "").trim();

	// Convert SVG attributes to React JSX syntax
	inner = toReactSvgAttrs(inner);

	// Prefix all gradient and clip-path IDs so multiple illustrations never clash
	const idMatches = [...inner.matchAll(/\bid="([^"]+)"/g)];
	const uniqueIds = [...new Set(idMatches.map((m) => m[1]))];
	for (const id of uniqueIds) {
		const prefixedId = `${componentName}_${id}`;
		inner = inner.replaceAll(`id="${id}"`, `id="${prefixedId}"`);
		inner = inner.replaceAll(`url(#${id})`, `url(#${prefixedId})`);
		inner = inner.replaceAll(`href="#${id}"`, `href="#${prefixedId}"`);
	}

	// Wire up secondaryColor with optional custom default fallback
	inner = inner.replace(
		/fill="currentColor"([^>]*data-memy-secondary="true"[^>]*data-memy-default="([^"]+)")/g,
		'fill={secondaryColor !== "transparent" ? secondaryColor : "$2"}$1',
	);
	inner = inner.replace(
		/fill="currentColor"([^>]*data-memy-secondary="true")/g,
		'fill={secondaryColor !== "transparent" ? secondaryColor : color}$1',
	);
	inner = inner.replace(
		/stroke="currentColor"([^>]*data-memy-secondary="true"[^>]*data-memy-default="([^"]+)")/g,
		'stroke={secondaryColor !== "transparent" ? secondaryColor : "$2"}$1',
	);
	inner = inner.replace(
		/stroke="currentColor"([^>]*data-memy-secondary="true")/g,
		'stroke={secondaryColor !== "transparent" ? secondaryColor : color}$1',
	);

	// Wire up data-memy-primary="true"
	inner = inner.replace(
		/fill="[^"]*"([^>]*data-memy-primary="true")/g,
		'fill={color}$1',
	);
	inner = inner.replace(
		/stroke="[^"]*"([^>]*data-memy-primary="true")/g,
		'stroke={color}$1',
	);

	// Wire up primary color for remaining currentColor
	inner = inner.replace(/fill="currentColor"/g, "fill={color}");
	inner = inner.replace(/stroke="currentColor"/g, "stroke={color}");

	// Build optional animation style block from the raw SVG stylesheet
	const animationStyleBlock = rawCss
		? `\n      {animated && (
        <style>
          {\`
${rawCss.replace(/`/g, "\\`").replace(/\${/g, "\\${")}
          \`}
        </style>
      )}`
		: "";

	// Generate component code
	return `/**
 * Generated automatically by @memy/react generator.
 * Source: packages/svg/src/${fileName}
 */

import type { MemyProps } from "../types";

export const ${componentName} = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: MemyProps) => {
  return (
    <svg
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["memy-svg", animated ? "memy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      style={{
        display: "block",
        ...style,
      }}
      role="img"
      aria-label="${componentName} illustration"
      {...props}
    >${animationStyleBlock}
      ${inner}
    </svg>
  );
};
`;
}

function run() {
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	const svgFiles = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith(".svg"));
	const components: string[] = [];

	for (const file of svgFiles) {
		const componentName = path.basename(file, ".svg");
		const code = generateComponent(file);
		fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), code);
		components.push(componentName);
		console.log(`✓ Generated ${componentName}.tsx`);
	}

	// Generate barrel index.ts
	const indexContent = `/**
 * Generated automatically by @memy/react generator.
 */

export * from "./types";
${components.map((c) => `export { ${c} } from "./illustrations/${c}";`).join("\n")}
`;

	fs.writeFileSync(INDEX_FILE, indexContent);
	console.log(`✓ Generated index.ts with ${components.length} components`);
}

run();
