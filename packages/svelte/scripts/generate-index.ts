/** @format */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "../src/illustrations");
const INDEX_FILE = path.resolve(__dirname, "../src/index.ts");

export function generateIndex(): string[] {
	if (!fs.existsSync(OUTPUT_DIR)) {
		console.warn("⚠ Warning: Illustrations directory does not exist yet.");
		return [];
	}

	const componentFiles = (fs.readdirSync(OUTPUT_DIR) as string[])
		.filter((f) => f.endsWith(".svelte") && !f.startsWith("_"))
		.sort((a, b) => a.localeCompare(b));

	const components = componentFiles.map((f) => path.basename(f, ".svelte"));

	const indexContent = `/**
 * Generated automatically by @esvigy/svelte generator.
 */

export * from "./types";
${components.map((c) => `export { default as ${c} } from "./illustrations/${c}.svelte";`).join("\n")}
`;

	fs.writeFileSync(INDEX_FILE, indexContent);
	console.log(`✓ Generated index.ts with ${components.length} Svelte components`);
	return components;
}

// Run immediately when invoked directly via CLI
generateIndex();
