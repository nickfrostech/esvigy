/** @format */

import { Prism } from "prism-react-renderer";

/**
 * Register bash, shell, vue, and astro grammars for Prism syntax highlighting
 */
export function initPrismLanguages() {
	if (!Prism) return;

	// 1. Bash / Shell grammar
	if (!Prism.languages.bash) {
		const bashGrammar = {
			comment: {
				pattern: /(^|[\s;])#.*/,
				lookbehind: true,
				greedy: true,
			},
			string: [
				{
					pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
					greedy: true,
				},
			],
			environment: {
				pattern: /\$[A-Z_0-9]+/,
				alias: "constant",
			},
			variable: [
				{
					pattern: /\$\([^)]+\)|\$\{[^}]+\}|\$[a-zA-Z_0-9]+/,
					greedy: true,
				},
			],
			package: {
				pattern: /@[\w.-]+\/[\w.-]+/,
				alias: "class-name",
			},
			flag: {
				pattern: /(?:^|\s)-{1,2}[a-zA-Z0-9_-]+(?:\b|=)?/,
				lookbehind: true,
				alias: "operator",
			},
			keyword: [
				{
					pattern:
						/\b(?:pnpm|npm|npx|yarn|bun|bunx|git|node|cd|mkdir|rm|cp|mv|curl|wget|cat|echo|source|export|sudo|docker)\b/,
				},
				{
					pattern:
						/\b(?:if|then|else|elif|fi|for|while|in|do|done|case|esac|function|return|exit)\b/,
				},
			],
			function: {
				pattern:
					/\b(?:add|install|i|dlx|run|init|list|create|build|dev|start|test|exec|commit|push|pull|clone|checkout)\b/,
			},
			component: {
				pattern: /\b[A-Z][a-zA-Z0-9_]+\b/,
				alias: "class-name",
			},
			boolean: /\b(?:true|false)\b/,
			number: /\b\d+(?:\.\d+)?\b/,
			operator: /&&|\|\||\||>|<|&|;/,
			punctuation: /[()[\]{}.,;:]/,
		};

		Prism.languages.bash = bashGrammar;
		Prism.languages.sh = bashGrammar;
		Prism.languages.shell = bashGrammar;
		Prism.languages.zsh = bashGrammar;
	}

	// 2. Vue & Astro aliases
	if (!Prism.languages.vue && Prism.languages.markup) {
		Prism.languages.vue = Prism.languages.markup;
	}
	if (!Prism.languages.astro && Prism.languages.markup) {
		Prism.languages.astro = Prism.languages.markup;
	}
}

// Auto-run initialization on module load
initPrismLanguages();
