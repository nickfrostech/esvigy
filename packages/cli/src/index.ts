/** @format */

import { Command } from "commander";
import { addCommand } from "./commands/add";
import { listCommand } from "./commands/list";

const program = new Command();

program
	.name("esvigy")
	.description(
		"Official CLI for Esvigy — add customizable, animated illustrations directly to your project",
	)
	.version("0.1.0");

program
	.command("add [illustrations...]")
	.description("Add one or more illustrations directly into your project")
	.option(
		"-f, --framework <framework>",
		"Framework target: react | svg | vue | svelte",
	)
	.option(
		"-d, --dir <path>",
		"Destination directory (defaults to auto-detected components/esvigy/)",
	)
	.option(
		"-y, --yes",
		"Skip interactive prompts and use default detected settings",
	)
	.option("--overwrite", "Overwrite existing component files")
	.action((illustrations, options) => {
		return addCommand(illustrations, options);
	});

program
	.command("list")
	.description("List all available illustrations in the Esvigy catalog")
	.option("-c, --category <category>", "Filter illustrations by category")
	.option("--json", "Output illustrations catalog in JSON format")
	.action((options) => {
		return listCommand(options);
	});

// If no arguments passed, launch interactive 'add' wizard directly
if (process.argv.length <= 2) {
	addCommand([], {});
} else {
	program.parse(process.argv);
}
