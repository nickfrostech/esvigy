import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { h } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";

const require = createRequire(import.meta.url);

const illustrationsDir = path.resolve(__dirname, "../src/illustrations");

// Dynamically discover all illustration components from src/illustrations
const EXPECTED_ILLUSTRATIONS = fs
	.readdirSync(illustrationsDir)
	.filter((f) => f.endsWith(".vue") && !f.startsWith("_"))
	.map((f) => path.basename(f, ".vue"))
	.sort((a, b) => a.localeCompare(b));

describe("@esvigy/vue Production Bundle Verification", () => {
	const distDir = path.resolve(__dirname, "../dist");

	it("verifies dist artifacts exist and are populated", () => {
		expect(fs.existsSync(path.join(distDir, "index.js"))).toBe(true);
		expect(fs.existsSync(path.join(distDir, "index.cjs"))).toBe(true);
		expect(fs.existsSync(path.join(distDir, "index.d.ts"))).toBe(true);

		const dtsContent = fs.readFileSync(
			path.join(distDir, "index.d.ts"),
			"utf-8",
		);
		for (const name of EXPECTED_ILLUSTRATIONS) {
			expect(dtsContent).toContain(name);
		}
	});

	it("verifies ESM distribution (dist/index.js) can be dynamically loaded and renders", async () => {
		const esmModule = await import("../dist/index.js");

		for (const name of EXPECTED_ILLUSTRATIONS) {
			const Component = (esmModule as Record<string, any>)[name];
			expect(Component).toBeDefined();

			const html = await renderToString(h(Component));
			expect(html).toContain("<svg");
			expect(html).toContain(`aria-label="${name} illustration"`);
		}
	});

	it("verifies CJS distribution (dist/index.cjs) can be required and renders", async () => {
		const cjsModule = require("../dist/index.cjs");

		for (const name of EXPECTED_ILLUSTRATIONS) {
			const Component = cjsModule[name];
			expect(Component).toBeDefined();

			const html = await renderToString(h(Component));
			expect(html).toContain("<svg");
			expect(html).toContain(`aria-label="${name} illustration"`);
		}
	});
});
