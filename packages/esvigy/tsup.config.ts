/** @format */

import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["../cli/src/index.ts"],
	format: ["esm"],
   clean: true,
   
	minify: true,
	shims: true,
	target: "node18",
	banner: {
		js: "#!/usr/bin/env node",
	},
});
