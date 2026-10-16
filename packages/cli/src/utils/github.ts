/** @format */

import type { Framework } from "./detect";

const GITHUB_RAW_BASE =
	"https://raw.githubusercontent.com/nickfrostech/esvigy/main";

export interface IllustrationMeta {
	author?: string;
	source?: string;
	category?: string;
	tags?: string[];
}

export const FALLBACK_CATALOG: Record<string, IllustrationMeta> = {
	ActionCreate: {
		category: "actions",
		tags: ["create", "add", "new", "plus", "document"],
	},
	ActionDownload: {
		category: "actions",
		tags: ["download", "file", "save", "arrow-down"],
	},
	ActionUpload: {
		category: "actions",
		tags: ["upload", "file", "cloud", "arrow-up"],
	},
	DocumentFolders: {
		category: "business",
		tags: ["documents", "folders", "files", "archive"],
	},
	EmptyBox: {
		category: "empty-states",
		tags: ["empty", "box", "package", "parcel"],
	},
	EmptyCart: {
		category: "empty-states",
		tags: ["empty", "cart", "shopping", "ecommerce"],
	},
	EmptyFolder: {
		category: "empty-states",
		tags: ["empty", "folder", "directory", "files"],
	},
	EmptyMessage: {
		category: "empty-states",
		tags: ["empty", "messages", "inbox", "chat"],
	},
	ErrorForbidden: {
		category: "errors",
		tags: ["403", "forbidden", "stop", "security"],
	},
	ErrorServer: {
		category: "errors",
		tags: ["500", "server", "error", "crash"],
	},
	GamePad: {
		category: "gaming",
		tags: ["gamepad", "controller", "gaming", "play"],
	},
	LogoEsvigy: { category: "brand", tags: ["logo", "esvigy", "brand", "icon"] },
	ManCarRepair: {
		category: "lifestyle",
		tags: ["car", "mechanic", "repair", "service"],
	},
	ManQuestion: {
		category: "lifestyle",
		tags: ["question", "help", "support", "doubt"],
	},
	NotFoundLaptop: {
		category: "errors",
		tags: ["404", "laptop", "missing", "not-found"],
	},
	NotFoundRobot: {
		category: "errors",
		tags: ["404", "robot", "error", "not-found"],
	},
	NotFoundShopping: {
		category: "errors",
		tags: ["404", "shopping", "cart", "store"],
	},
	NotFoundSmiley: {
		category: "errors",
		tags: ["404", "confused", "smiley", "not-found"],
	},
	Search: {
		category: "search",
		tags: ["search", "explore", "magnifier", "lookup"],
	},
	SearchLoading: {
		category: "search",
		tags: ["search", "loading", "spinner", "radar"],
	},
	SearchNotFound: {
		category: "search",
		tags: ["search", "zero-results", "empty", "cross"],
	},
	SearchSuccess: {
		category: "search",
		tags: ["search", "results", "found", "success"],
	},
	SecurityLock: {
		category: "security",
		tags: ["security", "lock", "key", "safe", "auth"],
	},
	StatusFail: {
		category: "status",
		tags: ["fail", "error", "cross", "badge"],
	},
	StatusOffline: {
		category: "status",
		tags: ["offline", "dino", "network", "disconnected"],
	},
	StatusProcessing: {
		category: "status",
		tags: ["processing", "sync", "spinner", "loading"],
	},
	StatusSuccess: {
		category: "status",
		tags: ["success", "completed", "checkmark", "done"],
	},
	Wallet: {
		category: "finance",
		tags: ["wallet", "finance", "payment", "money", "coins"],
	},
	WomanLaptop: {
		category: "lifestyle",
		tags: ["developer", "woman", "laptop", "code"],
	},
	WomanYoga: {
		category: "lifestyle",
		tags: ["yoga", "wellness", "meditation", "calm"],
	},
};

export const REACT_TYPES_FALLBACK = `/** @format */

import type { SVGProps } from "react";

export interface EsvigyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  secondaryColor?: string;
  animated?: boolean;
  className?: string;
}
`;

/**
 * Fetches the illustration manifest from GitHub, falling back to local catalog if offline.
 */
export async function fetchManifest(): Promise<
	Record<string, IllustrationMeta>
> {
	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 3500);

		const res = await fetch(`${GITHUB_RAW_BASE}/packages/svg/manifest.json`, {
			signal: controller.signal,
		});
		clearTimeout(timeout);

		if (res.ok) {
			const data = (await res.json()) as {
				illustrations?: Record<string, IllustrationMeta>;
			} & Record<string, IllustrationMeta>;
			return data.illustrations || data;
		}
	} catch {
		// Return embedded fallback on network/timeout error
	}
	return FALLBACK_CATALOG;
}

/**
 * Fetches the specific illustration source code from GitHub.
 */
export async function fetchIllustrationSource(
	name: string,
	framework: Framework,
): Promise<string> {
	let remotePath: string;

	switch (framework) {
		case "react":
			remotePath = `packages/react/src/illustrations/${name}.tsx`;
			break;
		case "svg":
			remotePath = `packages/svg/src/${name}.svg`;
			break;
		case "vue":
			remotePath = `packages/vue/src/illustrations/${name}.vue`;
			break;
		case "svelte":
			remotePath = `packages/svelte/src/illustrations/${name}.svelte`;
			break;
	}

	const url = `${GITHUB_RAW_BASE}/${remotePath}`;

	const res = await fetch(url);
	if (!res.ok) {
		if (res.status === 404) {
			if (framework === "vue" || framework === "svelte") {
				throw new Error(
					`Official @esvigy/${framework} adapter for "${name}" is coming soon in Milestone 5! In the meantime, you can add it as "--framework svg" or "--framework react".`,
				);
			}
			throw new Error(
				`Illustration "${name}" not found for framework "${framework}".`,
			);
		}
		throw new Error(`Failed to fetch ${url} (HTTP ${res.status}).`);
	}

	return res.text();
}

/**
 * Fetches React types.ts file from GitHub, or returns fallback.
 */
export async function fetchReactTypes(): Promise<string> {
	try {
		const res = await fetch(`${GITHUB_RAW_BASE}/packages/react/src/types.ts`);
		if (res.ok) {
			return res.text();
		}
	} catch {
		// fallback
	}
	return REACT_TYPES_FALLBACK;
}
