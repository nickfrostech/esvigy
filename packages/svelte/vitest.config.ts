/** @format */

import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [
		svelte({
			onwarn(warning, handler) {
				if (warning.code === "export_let_unused") return;
				handler(warning);
			},
		}),
	],
	test: {
		globals: true,
		environment: "node",
		include: ["test/**/*.{test,spec}.{ts,tsx}"],
		testTimeout: 15000,
	},
});
