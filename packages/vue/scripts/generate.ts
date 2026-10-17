/** @format */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, "../../svg/src");
const OUTPUT_DIR = path.resolve(__dirname, "../src/illustrations");
const MANIFEST_FILE = path.resolve(__dirname, "../../svg/manifest.json");


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
	const meta: SvgMetadata = {
		...(manifest[componentName] || manifest[fileName] || {}),
	};

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
			const line = rawLine
				.trim()
				.replace(/^[\s*#/-]+/, "")
				.trim();
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

// Build JSDoc header comment for the generated Vue SFC
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
	lines.push(" * Generated automatically by @esvigy/vue generator.");
	lines.push(` * Source: packages/svg/src/${fileName}`);
	lines.push(" */");
	return lines.join("\n");
}

function generateComponent(
	fileName: string,
	manifest: Record<string, SvgMetadata>,
): string {
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

	// Strip the raw <style> tag and comments from inner
	inner = inner.replace(/<style[^>]*>[\s\S]*?<\/style>/i, "").trim();
	inner = inner.replace(/<!--[\s\S]*?-->/g, "").trim();

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
		/fill="currentColor"([^>]*data-esvigy-secondary="true"[^>]*data-esvigy-default="([^"]+)")/g,
		':fill="secondaryColor !== \'transparent\' ? secondaryColor : \'$2\'"$1',
	);
	inner = inner.replace(
		/fill="currentColor"([^>]*data-esvigy-secondary="true")/g,
		':fill="secondaryColor !== \'transparent\' ? secondaryColor : color"$1',
	);
	inner = inner.replace(
		/stroke="currentColor"([^>]*data-esvigy-secondary="true"[^>]*data-esvigy-default="([^"]+)")/g,
		':stroke="secondaryColor !== \'transparent\' ? secondaryColor : \'$2\'"$1',
	);
	inner = inner.replace(
		/stroke="currentColor"([^>]*data-esvigy-secondary="true")/g,
		':stroke="secondaryColor !== \'transparent\' ? secondaryColor : color"$1',
	);
	inner = inner.replace(
		/stop-color="currentColor"([^>]*data-esvigy-secondary="true"[^>]*data-esvigy-default="([^"]+)")/g,
		':stop-color="secondaryColor !== \'transparent\' ? secondaryColor : \'$2\'"$1',
	);
	inner = inner.replace(
		/stop-color="currentColor"([^>]*data-esvigy-secondary="true")/g,
		':stop-color="secondaryColor !== \'transparent\' ? secondaryColor : color"$1',
	);

	// Wire up data-esvigy-primary="true"
	inner = inner.replace(
		/fill="[^"]*"([^>]*data-esvigy-primary="true")/g,
		':fill="color"$1',
	);
	inner = inner.replace(
		/stroke="[^"]*"([^>]*data-esvigy-primary="true")/g,
		':stroke="color"$1',
	);

	// Wire up primary color for remaining currentColor
	inner = inner.replace(/fill="currentColor"/g, ':fill="color"');
	inner = inner.replace(/stroke="currentColor"/g, ':stroke="color"');
	inner = inner.replace(/stop-color="currentColor"/g, ':stop-color="color"');

	const headerComment = buildHeaderComment(meta, fileName);

	// Generate Vue Single-File Component
	return `<script setup lang="ts">
${headerComment}

import type { StyleValue } from "vue";

interface Props {
  color?: string;
  secondaryColor?: string;
  animated?: boolean;
  className?: string;
  style?: StyleValue;
}

withDefaults(defineProps<Props>(), {
  color: "currentColor",
  secondaryColor: "transparent",
  animated: false,
  className: "",
});
</script>

<template>
  <svg
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="['esvigy-svg', animated ? 'esvigy-animated' : '', className]"
    :data-animated="animated ? 'true' : undefined"
    data-author="${meta.author}"
    data-source="${meta.source}"
    :style="[{ display: 'block' }, style]"
    role="img"
    aria-label="${componentName} illustration"
  >${rawCss ? `\n    <component is="style" v-if="animated">\n${rawCss}\n    </component>` : ""}
    ${inner}
  </svg>
</template>
`;
}

function findMatchingSvg(
	target: string,
	availableFiles: string[],
): string | undefined {
	const cleaned = path.basename(target).replace(/\.(svg|vue)$/i, "");

	if (availableFiles.includes(target)) {
		return target;
	}
	const exactSvg = `${cleaned}.svg`;
	if (availableFiles.includes(exactSvg)) {
		return exactSvg;
	}
	const lowerCleaned = cleaned.toLowerCase();
	const found = availableFiles.find(
		(f) => path.basename(f, ".svg").toLowerCase() === lowerCleaned,
	);
	if (found) {
		return found;
	}
	return undefined;
}

async function run() {
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	const manifest = loadManifest();
	const svgFiles = (fs.readdirSync(SVG_DIR) as string[])
		.filter((f: string) => f.endsWith(".svg") && !f.startsWith("_"))
		.sort((a, b) => a.localeCompare(b));

	const rawArgs = process.argv.slice(2);
	const positionalArgs = rawArgs.filter((arg) => !arg.startsWith("-"));
	const isAllFlag = rawArgs.some((arg) => arg === "--all" || arg === "-a");

	let targetFiles: string[] = [];

	if (isAllFlag) {
		targetFiles = svgFiles;
	} else if (positionalArgs.length > 0) {
		for (const arg of positionalArgs) {
			const matched = findMatchingSvg(arg, svgFiles);
			if (!matched) {
				console.error(`❌ SVG file not found for: "${arg}"`);
				const suggestions = svgFiles.filter((f) =>
					f.toLowerCase().includes(arg.toLowerCase()),
				);
				if (suggestions.length > 0) {
					console.log(
						`   Did you mean: ${suggestions.map((s) => path.basename(s, ".svg")).join(", ")}?`,
					);
				} else {
					console.log(
						`   Available SVGs (${svgFiles.length}):\n   ${svgFiles.map((f) => path.basename(f, ".svg")).join(", ")}`,
					);
				}
				process.exit(1);
			}
			targetFiles.push(matched);
		}
	} else if (process.stdin.isTTY) {
		// Interactive mode
		const rl = readline.createInterface({ input, output });
		console.log("\n📦 Esvigy Vue Component Generator");
		console.log("-----------------------------------------");
		console.log(
			"  • Press [Enter] or type 'all' to generate ALL illustrations",
		);
		console.log(
			"  • Or type an illustration name (e.g. 'Search' or 'EmptyBox')",
		);
		console.log("-----------------------------------------");
		const answer = (await rl.question("Choice: ")).trim();
		rl.close();

		if (!answer || answer.toLowerCase() === "all" || answer === "*") {
			targetFiles = svgFiles;
		} else {
			const matched = findMatchingSvg(answer, svgFiles);
			if (!matched) {
				console.error(`❌ SVG file not found for: "${answer}"`);
				const suggestions = svgFiles.filter((f) =>
					f.toLowerCase().includes(answer.toLowerCase()),
				);
				if (suggestions.length > 0) {
					console.log(
						`   Did you mean: ${suggestions.map((s) => path.basename(s, ".svg")).join(", ")}?`,
					);
				}
				process.exit(1);
			}
			targetFiles.push(matched);
		}
	} else {
		// Non-interactive fallback (CI / automated scripts)
		targetFiles = svgFiles;
	}

	// Remove stale components only when doing a full rebuild
	if (targetFiles.length === svgFiles.length && isAllFlag) {
		const targetVue = new Set(
			svgFiles.map((f) => `${path.basename(f, ".svg")}.vue`),
		);
		for (const existingFile of fs.readdirSync(OUTPUT_DIR)) {
			if (existingFile.endsWith(".vue") && !targetVue.has(existingFile)) {
				fs.unlinkSync(path.join(OUTPUT_DIR, existingFile));
				console.log(`🗑 Removed stale ${existingFile}`);
			}
		}
	}

	for (const file of targetFiles) {
		const componentName = path.basename(file, ".svg");
		const code = generateComponent(file, manifest);
		fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.vue`), code);
		console.log(`✓ Generated ${componentName}.vue`);
	}

	console.log(
		`\n🎉 Successfully generated ${targetFiles.length} Vue component(s)!`,
	);
	if (targetFiles.length < svgFiles.length) {
		console.log(
			"💡 Tip: If you added or renamed a component, run 'pnpm generate:index' to update index.ts",
		);
	}
}

run().catch((err) => {
	console.error("❌ Generator failed:", err);
	process.exit(1);
});
