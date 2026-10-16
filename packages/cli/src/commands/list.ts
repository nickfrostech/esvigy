/** @format */

import pc from "picocolors";
import { fetchManifest } from "../utils/github";

export interface ListOptions {
	category?: string;
	json?: boolean;
}

export async function listCommand(options: ListOptions) {
	const manifest = await fetchManifest();
	const allEntries = Object.entries(manifest).map(([name, meta]) => ({
		name,
		category: meta.category || "general",
		tags: meta.tags || [],
		author: meta.author || "nick",
	}));

	let filtered = allEntries;
	if (options.category) {
		const catLower = options.category.toLowerCase();
		filtered = allEntries.filter(
			(e) => e.category.toLowerCase() === catLower,
		);
	}

	if (options.json) {
		console.log(JSON.stringify(filtered, null, 2));
		return;
	}

	console.log();
	console.log(
		`${pc.bgCyan(pc.black(" esvigy "))} ${pc.bold("Available Illustrations")} ${pc.dim(
			`(${filtered.length} of ${allEntries.length})`,
		)}`,
	);
	console.log(pc.dim("─".repeat(60)));

	// Group by category
	const categories = Array.from(
		new Set(filtered.map((e) => e.category)),
	).sort();

	for (const cat of categories) {
		console.log(`\n${pc.cyan(pc.bold(cat.toUpperCase()))}`);
		const items = filtered.filter((e) => e.category === cat);
		for (const item of items) {
			const tagStr =
				item.tags.length > 0
					? pc.dim(`(${item.tags.slice(0, 4).join(", ")})`)
					: "";
			console.log(`  ${pc.bold(item.name.padEnd(20))} ${tagStr}`);
		}
	}

	console.log();
	console.log(pc.dim("─".repeat(60)));
	console.log(
		pc.dim(
			`To add an illustration to your project, run:\n  ${pc.cyan("pnpm dlx esvigy add <Name>")}\n`,
		),
	);
}
