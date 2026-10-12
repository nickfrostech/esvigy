/** @format */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, "../../svg/src");
const OUTPUT_DIR = path.resolve(__dirname, "../src/illustrations");
const INDEX_FILE = path.resolve(__dirname, "../src/index.ts");
const MANIFEST_FILE = path.resolve(SVG_DIR, "manifest.json");

// Ignore temporary, scratch, or test assets from component generation
const IGNORED_FILES = new Set([
	"president_letter_head.svg",
]);

export interface SvgMetadata {
	author?: string;
	source?: string;
	category?: string;
	tags?: string[];
	license?: string;
	[key: string]: any;
}

// Load optional metadata manifest if present
function loadManifest(): Record<string, SvgMetadata> {
	if (fs.existsSync(MANIFEST_FILE)) {
		try {
			const raw = fs.readFileSync(MANIFEST_FILE, "utf-8");
			const parsed = JSON.parse(raw);
			return parsed.illustrations || parsed;
		} catch (err) {
			console.warn("⚠ Warning: Failed to parse manifest.json:", err);
		}
	}
	return {};
}

// Extract attribution metadata from inline SVG comments, data attributes, or manifest
function extractMetadata(
	svgRaw: string,
	fileName: string,
	manifest: Record<string, SvgMetadata>,
): SvgMetadata {
	const componentName = path.basename(fileName, ".svg");
	const meta: SvgMetadata = { ...(manifest[componentName] || manifest[fileName] || {}) };

	// 1. Check data attributes on <svg ...> tag: data-author, data-creator, data-source, data-url
	const svgTagMatch = svgRaw.match(/<svg\b([^>]*)>/i);
	if (svgTagMatch) {
		const attrs = svgTagMatch[1];
		const authorAttr = attrs.match(/\bdata-(?:author|creator)="([^"]+)"/i);
		if (authorAttr && !meta.author) meta.author = authorAttr[1].trim();

		const sourceAttr = attrs.match(/\bdata-(?:source|url|link)="([^"]+)"/i);
		if (sourceAttr && !meta.source) meta.source = sourceAttr[1].trim();
	}

	// 2. Check XML comments for author / creator / source / url / license
	const commentMatches = [...svgRaw.matchAll(/<!--([\s\S]*?)-->/g)];
	for (const match of commentMatches) {
		const commentBody = match[1];
		const lines = commentBody.split(/\r?\n/);
		for (const rawLine of lines) {
			const line = rawLine.trim().replace(/^[\s*#/-]+/, "").trim();
			if (!meta.author) {
				const aMatch = line.match(
					/^(?:@author|author|autor|@creator|creator|artist|@artist)\s*[:=]?\s*(.+)$/i,
				);
				if (aMatch) meta.author = aMatch[1].trim();
			}
			if (!meta.source) {
				const sMatch = line.match(
					/^(?:@source|source|@url|url|@link|link|@website|website)\s*[:=]?\s*(.+)$/i,
				);
				if (sMatch) meta.source = sMatch[1].trim();
			}
			if (!meta.license) {
				const lMatch = line.match(/^(?:@license|license)\s*[:=]?\s*(.+)$/i);
				if (lMatch) meta.license = lMatch[1].trim();
			}
		}

		// Inline fallback (e.g. <!-- author: nick | source: https://github.com/nickfrostech -->)
		if (!meta.author) {
			const aInline = commentBody.match(
				/(?:@author|author|autor|@creator|creator|artist)\s*[:=]?\s*([^\r\n*|<>\t]+)/i,
			);
			if (aInline) meta.author = aInline[1].trim();
		}
		if (!meta.source) {
			const sInline = commentBody.match(
				/(?:@source|source|@url|url|@link|link|@website|website)\s*[:=]?\s*([^\r\n*|<>\t]+)/i,
			);
			if (sInline) meta.source = sInline[1].trim();
		}
	}

	// 3. Check <metadata> tags if present
	const metaTagMatch = svgRaw.match(/<metadata[^>]*>([\s\S]*?)<\/metadata>/i);
	if (metaTagMatch) {
		const body = metaTagMatch[1];
		if (!meta.author) {
			const creatorTag = body.match(
				/<(?:dc:)?(?:creator|author)>([^<]+)<\/(?:dc:)?(?:creator|author)>/i,
			);
			if (creatorTag) meta.author = creatorTag[1].trim();
		}
		if (!meta.source) {
			const sourceTag = body.match(
				/<(?:dc:)?(?:source|url)>([^<]+)<\/(?:dc:)?(?:source|url)>/i,
			);
			if (sourceTag) meta.source = sourceTag[1].trim();
		}
	}

	// 4. Canonical project defaults if unspecified
	if (!meta.author) {
		meta.author = "nick";
	}
	if (!meta.source) {
		meta.source = "https://github.com/nickfrostech";
	}

	return meta;
}

// Build JSDoc header comment for the generated TSX file
function buildHeaderComment(meta: SvgMetadata, fileName: string): string {
	const lines: string[] = ["/**"];
	if (meta.author) {
		lines.push(` * Author: ${meta.author}`);
	}
	if (meta.source) {
		lines.push(` * Source: ${meta.source}`);
	}
	if (meta.author || meta.source) {
		lines.push(" *");
	}
	lines.push(" * Generated automatically by @memy/react generator.");
	lines.push(` * Source: packages/svg/src/${fileName}`);
	lines.push(" */");
	return lines.join("\n");
}

// Helper to convert kebab-case SVG attributes to React camelCase
function toReactSvgAttrs(svgContent: string): string {
	return svgContent
		.replace(/<!--[\s\S]*?-->/g, "") // Strip XML comments from JSX output
		.replace(/\bclass=/g, "className=")
		.replace(/stroke-width=/g, "strokeWidth=")
		.replace(/stroke-linecap=/g, "strokeLinecap=")
		.replace(/stroke-linejoin=/g, "strokeLinejoin=")
		.replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
		.replace(/stroke-dasharray=/g, "strokeDasharray=")
		.replace(/stroke-dashoffset=/g, "strokeDashoffset=")
		.replace(/stroke-opacity=/g, "strokeOpacity=")
		.replace(/fill-opacity=/g, "fillOpacity=")
		.replace(/text-anchor=/g, "textAnchor=")
		.replace(/font-size=/g, "fontSize=")
		.replace(/font-weight=/g, "fontWeight=")
		.replace(/font-family=/g, "fontFamily=")
		.replace(/fill-rule=/g, "fillRule=")
		.replace(/clip-rule=/g, "clipRule=")
		.replace(/clip-path=/g, "clipPath=")
		.replace(/stop-color=/g, "stopColor=")
		.replace(/stop-opacity=/g, "stopOpacity=")
		.replace(/dominant-baseline=/g, "dominantBaseline=")
		.replace(/shape-rendering=/g, "shapeRendering=")
		.replace(/color-interpolation-filters=/g, "colorInterpolationFilters=")
		.replace(/flood-color=/g, "floodColor=")
		.replace(/flood-opacity=/g, "floodOpacity=");
}

function generateComponent(fileName: string, manifest: Record<string, SvgMetadata>): string {
	const componentName = path.basename(fileName, ".svg");
	const svgRaw = fs.readFileSync(path.join(SVG_DIR, fileName), "utf-8");

	// Extract dynamic attribution metadata
	const meta = extractMetadata(svgRaw, fileName, manifest);

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
	inner = inner.replace(
		/stopColor="currentColor"([^>]*data-memy-secondary="true"[^>]*data-memy-default="([^"]+)")/g,
		'stopColor={secondaryColor !== "transparent" ? secondaryColor : "$2"}$1',
	);
	inner = inner.replace(
		/stopColor="currentColor"([^>]*data-memy-secondary="true")/g,
		'stopColor={secondaryColor !== "transparent" ? secondaryColor : color}$1',
	);
	inner = inner.replace(/stopColor="currentColor"/g, "stopColor={color}");

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

	const headerComment = buildHeaderComment(meta, fileName);

	// Generate component code
	return `${headerComment}

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
      data-author="${meta.author}"
      data-source="${meta.source}"
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

	const manifest = loadManifest();
	const svgFiles = fs
		.readdirSync(SVG_DIR)
		.filter((f) => f.endsWith(".svg") && !f.startsWith("_") && !IGNORED_FILES.has(f));

	const components: string[] = [];

	for (const file of svgFiles) {
		const componentName = path.basename(file, ".svg");
		const code = generateComponent(file, manifest);
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
