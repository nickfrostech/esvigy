/** @format */

import fs from "node:fs/promises";
import path from "node:path";
import * as p from "@clack/prompts";
import pc from "picocolors";
import {
	detectEsvigyDir,
	detectFramework,
	type Framework,
} from "../utils/detect";
import {
	fetchIllustrationSource,
	fetchManifest,
	fetchReactTypes,
} from "../utils/github";

export interface AddOptions {
	framework?: Framework;
	dir?: string;
	yes?: boolean;
	overwrite?: boolean;
}

export async function addCommand(
	requestedIllustrations: string[],
	options: AddOptions,
) {
	const cwd = process.cwd();

	// 1. Resolve Framework
	let framework = options.framework;
	const detectedFramework = await detectFramework(cwd);

	// 2. Fetch illustration manifest catalog
	const manifest = await fetchManifest();
	const allNames = Object.keys(manifest).sort();

	// 3. Resolve Illustrations to install
	let selectedNames: string[] = [];

	if (requestedIllustrations && requestedIllustrations.length > 0) {
		// Validate requested illustrations against manifest (case-insensitive fallback)
		for (const req of requestedIllustrations) {
			const match = allNames.find(
				(n) => n.toLowerCase() === req.toLowerCase(),
			);
			if (!match) {
				console.error(
					pc.red(
						`✖ Error: Illustration "${req}" was not found in Esvigy catalog.`,
					),
				);
				console.log(
					pc.dim(
						`Run 'esvigy list' to view all ${allNames.length} available illustrations.`,
					),
				);
				process.exit(1);
			}
			selectedNames.push(match);
		}
	} else {
		// Interactive prompt mode
		p.intro(
			`${pc.bgCyan(pc.black(" esvigy "))} ${pc.cyan("Add illustrations directly to your project")}`,
		);

		const pickIllustrations = await p.multiselect({
			message: "Which illustration(s) would you like to add?",
			options: allNames.map((name) => {
				const meta = manifest[name] || {};
				const cat = meta.category ? `[${meta.category}]` : "";
				const tags = meta.tags ? meta.tags.slice(0, 3).join(", ") : "";
				return {
					value: name,
					label: `${pc.bold(name)} ${pc.dim(cat)}`,
					hint: tags ? pc.dim(tags) : undefined,
				};
			}),
			required: true,
		});

		if (p.isCancel(pickIllustrations)) {
			p.cancel("Operation cancelled.");
			process.exit(0);
		}

		selectedNames = pickIllustrations as string[];
	}

	// 4. Resolve Framework interactively if missing
	if (!framework) {
		if (options.yes) {
			framework = detectedFramework;
		} else {
			const pickFramework = await p.select({
				message: "Which framework are you using?",
				options: [
					{
						value: "react",
						label: "React (.tsx)",
						hint:
							detectedFramework === "react"
								? "detected in project"
								: undefined,
					},
					{
						value: "svg",
						label: "Raw SVG (.svg)",
						hint: "vanilla HTML / static assets",
					},
					{
						value: "vue",
						label: "Vue (.vue)",
						hint:
							detectedFramework === "vue"
								? "detected in project"
								: "SFC",
					},
					{
						value: "svelte",
						label: "Svelte (.svelte)",
						hint:
							detectedFramework === "svelte"
								? "detected in project"
								: undefined,
					},
				],
				initialValue: detectedFramework,
			});

			if (p.isCancel(pickFramework)) {
				p.cancel("Operation cancelled.");
				process.exit(0);
			}

			framework = pickFramework as Framework;
		}
	}

	// 5. Resolve Destination Directory (shadcn / project auto-detection)
	const defaultDir = await detectEsvigyDir(cwd);
	let targetDir = options.dir || defaultDir;

	if (!options.dir && !options.yes) {
		const pickDir = await p.text({
			message: "Where should we install the illustrations?",
			defaultValue: defaultDir,
			placeholder: defaultDir,
		});

		if (p.isCancel(pickDir)) {
			p.cancel("Operation cancelled.");
			process.exit(0);
		}

		targetDir = (pickDir as string).trim() || defaultDir;
	}

	const resolvedDir = path.resolve(cwd, targetDir);
	await fs.mkdir(resolvedDir, { recursive: true });

	const ext =
		framework === "react"
			? "tsx"
			: framework === "vue"
				? "vue"
				: framework === "svelte"
					? "svelte"
					: "svg";

	// 6. Download files with progress indicator
	const spinner = p.spinner();
	spinner.start(
		`Downloading ${selectedNames.length} illustration(s) for ${pc.cyan(framework)}...`,
	);

	const downloadedFiles: string[] = [];

	try {
		// If React, handle types.ts dependency
		if (framework === "react") {
			const typesFilePath = path.join(resolvedDir, "types.ts");
			let typesExist = false;
			try {
				await fs.access(typesFilePath);
				typesExist = true;
			} catch {
				typesExist = false;
			}

			if (!typesExist || options.overwrite) {
				const typesContent = await fetchReactTypes();
				await fs.writeFile(typesFilePath, typesContent, "utf-8");
			}
		}

		// Download each illustration
		for (const name of selectedNames) {
			spinner.message(`Fetching ${name}...`);
			let content = await fetchIllustrationSource(name, framework);

			// React self-contained adjustment
			if (framework === "react") {
				content = content.replace(
					/from\s+["']\.\.\/types["']/g,
					'from "./types"',
				);
			}

			const filePath = path.join(resolvedDir, `${name}.${ext}`);
			await fs.writeFile(filePath, content, "utf-8");
			downloadedFiles.push(`${name}.${ext}`);
		}

		spinner.stop(
			`${pc.green("✔")} Successfully added ${downloadedFiles.length} illustration(s)!`,
		);

		// 7. Success output and instructions
		console.log();
		for (const file of downloadedFiles) {
			console.log(
				`  ${pc.green("●")} ${pc.bold(path.join(targetDir, file))}`,
			);
		}
		if (framework === "react") {
			console.log(
				`  ${pc.blue("●")} ${pc.bold(path.join(targetDir, "types.ts"))} ${pc.dim("(types)")}`,
			);
		}
		console.log();

		const sampleName = selectedNames[0];
		if (framework === "react") {
			const importPath = `./${path.relative(cwd, path.join(resolvedDir, sampleName)).replace(/\\/g, "/")}`;
			console.log(pc.cyan("Quick Start Example:"));
			console.log(
				pc.dim(
					`  import { ${sampleName} } from "${importPath}";\n\n  export default function App() {\n    return <${sampleName} animated color="#06b6d4" className="w-64 h-64" />;\n  }`,
				),
			);
		} else if (framework === "vue") {
			const importPath = `./${path.relative(cwd, path.join(resolvedDir, `${sampleName}.vue`)).replace(/\\/g, "/")}`;
			console.log(pc.cyan("Quick Start Example:"));
			console.log(
				pc.dim(
					`  <script setup>\n  import ${sampleName} from "${importPath}";\n  </script>\n\n  <template>\n    <${sampleName} animated color="#06b6d4" class="w-64 h-64" />\n  </template>`,
				),
			);
		} else if (framework === "svelte") {
			const importPath = `./${path.relative(cwd, path.join(resolvedDir, `${sampleName}.svelte`)).replace(/\\/g, "/")}`;
			console.log(pc.cyan("Quick Start Example:"));
			console.log(
				pc.dim(
					`  <script>\n  import ${sampleName} from "${importPath}";\n  </script>\n\n  <${sampleName} animated color="#06b6d4" class="w-64 h-64" />`,
				),
			);
		}
		console.log();
	} catch (err: any) {
		spinner.stop(pc.red("✖ Failed to add illustrations."));
		console.error(pc.red(`\n${err?.message || err}`));
		process.exit(1);
	}
}
