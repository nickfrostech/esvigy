/** @format */

import fs from "node:fs/promises";
import path from "node:path";

export type Framework = "react" | "svg" | "vue" | "svelte";

/**
 * Checks if a file or directory exists.
 */
async function exists(targetPath: string): Promise<boolean> {
	try {
		await fs.access(targetPath);
		return true;
	} catch {
		return false;
	}
}

/**
 * Resolves a path alias (e.g. '@/components') based on tsconfig/jsconfig paths.
 */
async function resolvePathAlias(
	alias: string,
	cwd: string,
): Promise<string | null> {
	const configNames = ["tsconfig.json", "jsconfig.json"];
	for (const name of configNames) {
		const configPath = path.join(cwd, name);
		if (await exists(configPath)) {
			try {
				const raw = await fs.readFile(configPath, "utf-8");
				// Strip comments if present
				const cleaned = raw.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
				const parsed = JSON.parse(cleaned);
				const paths = parsed.compilerOptions?.paths || {};

				for (const [key, targets] of Object.entries(paths)) {
					const prefix = key.replace(/\*$/, "");
					if (
						alias.startsWith(prefix) &&
						Array.isArray(targets) &&
						targets.length > 0
					) {
						const targetPattern = (targets[0] as string).replace(
							/\*$/,
							"",
						);
						const remainder = alias.slice(prefix.length);
						const resolvedRel = targetPattern + remainder;
						const baseUrl = parsed.compilerOptions?.baseUrl || ".";
						return path.normalize(path.join(baseUrl, resolvedRel));
					}
				}
			} catch {
				// Fall back to heuristic
			}
		}
	}

	// Heuristic if tsconfig paths aren't found or parsed:
	// '@/' or '~/' pointing to src if src exists, or root
	if (alias.startsWith("@/") || alias.startsWith("~/")) {
		const stripped = alias.slice(2);
		const hasSrc = await exists(path.join(cwd, "src"));
		return hasSrc ? path.join("src", stripped) : stripped;
	}

	return alias;
}

/**
 * Detects the user's base components folder (e.g. from shadcn `components.json` or project structure)
 * and returns the path with `esvigy/` appended.
 */
export async function detectEsvigyDir(
	cwd: string = process.cwd(),
): Promise<string> {
	// 1. Check for shadcn's components.json
	const componentsJsonPath = path.join(cwd, "components.json");
	if (await exists(componentsJsonPath)) {
		try {
			const raw = await fs.readFile(componentsJsonPath, "utf-8");
			const parsed = JSON.parse(raw);
			const alias =
				parsed.aliases?.components || parsed.resolvedPaths?.components;

			if (alias) {
				const resolved = await resolvePathAlias(alias, cwd);
				if (resolved) {
					return path.join(resolved, "esvigy");
				}
			}
		} catch {
			// Continue to project structure detection
		}
	}

	// 2. Check filesystem heuristics
	if (await exists(path.join(cwd, "src", "lib", "components"))) {
		return path.join("src", "lib", "components", "esvigy");
	}

	if (await exists(path.join(cwd, "src", "components"))) {
		return path.join("src", "components", "esvigy");
	}

	if (await exists(path.join(cwd, "components"))) {
		return path.join("components", "esvigy");
	}

	if (await exists(path.join(cwd, "src"))) {
		return path.join("src", "components", "esvigy");
	}

	// 3. Fallback
	return path.join("components", "esvigy");
}

/**
 * Detects the project framework based on package.json dependencies.
 */
export async function detectFramework(
	cwd: string = process.cwd(),
): Promise<Framework> {
	const pkgPath = path.join(cwd, "package.json");
	if (await exists(pkgPath)) {
		try {
			const raw = await fs.readFile(pkgPath, "utf-8");
			const pkg = JSON.parse(raw);
			const allDeps = {
				...pkg.dependencies,
				...pkg.devDependencies,
			};

			if (allDeps["vue"] || allDeps["nuxt"]) {
				return "vue";
			}
			if (allDeps["svelte"] || allDeps["@sveltejs/kit"]) {
				return "svelte";
			}
			if (allDeps["react"] || allDeps["next"]) {
				return "react";
			}
		} catch {
			// Ignore parse errors
		}
	}

	return "react";
}
