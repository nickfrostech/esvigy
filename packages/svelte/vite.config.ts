/** @format */

import path from "node:path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		svelte({
			onwarn(warning, handler) {
				if (warning.code === "export_let_unused") return;
				handler(warning);
			},
		}),
		dts({
			tsconfigPath: "./tsconfig.json",
			include: ["src"],
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "EsvigySvelte",
			formats: ["es", "cjs"],
			fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
		},
		rollupOptions: {
			external: [
				"svelte",
				"svelte/internal",
				"svelte/internal/client",
				"svelte/internal/server",
				/^svelte\/.*/,
			],
			output: {
				globals: {
					svelte: "Svelte",
				},
				exports: "named",
			},
		},
		sourcemap: true,
		minify: false,
		emptyOutDir: true,
	},
});
