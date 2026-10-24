/** @format */

import { useState } from "react";

type Framework = "react" | "vue" | "svelte" | "cli";
type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const INSTALL_COMMANDS: Record<Framework, Record<PackageManager, string>> = {
	react: {
		pnpm: "pnpm add @esvigy/react",
		npm: "npm install @esvigy/react",
		yarn: "yarn add @esvigy/react",
		bun: "bun add @esvigy/react",
	},
	vue: {
		pnpm: "pnpm add @esvigy/vue",
		npm: "npm install @esvigy/vue",
		yarn: "yarn add @esvigy/vue",
		bun: "bun add @esvigy/vue",
	},
	svelte: {
		pnpm: "pnpm add @esvigy/svelte",
		npm: "npm install @esvigy/svelte",
		yarn: "yarn add @esvigy/svelte",
		bun: "bun add @esvigy/svelte",
	},
	cli: {
		pnpm: "pnpm dlx @esvigy/cli add",
		npm: "npx @esvigy/cli add",
		yarn: "yarn dlx @esvigy/cli add",
		bun: "bunx @esvigy/cli add",
	},
};

export function QuickStartGuide() {
	const [framework, setFramework] = useState<Framework>("react");
	const [installTab, setInstallTab] = useState<PackageManager>("pnpm");
	const [copiedInstall, setCopiedInstall] = useState(false);

	const currentCommand = INSTALL_COMMANDS[framework][installTab];

	const copyInstall = () => {
		navigator.clipboard.writeText(currentCommand);
		setCopiedInstall(true);
		setTimeout(() => setCopiedInstall(false), 2000);
	};

	return (
		<section
			id='guide'
			style={{
				maxWidth: "1000px",
				margin: "0 auto",
				padding: "0 24px",
				width: "100%",
			}}
		>
			<div className='flat-panel' style={{ padding: "36px" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						flexWrap: "wrap",
						gap: "16px",
						marginBottom: "20px",
					}}
				>
					<div>
						<h2
							style={{
								fontSize: "26px",
								fontWeight: 600,
								margin: "0 0 8px 0",
								color: "var(--text-main)",
							}}
						>
							Quick Start
						</h2>
						<p
							style={{
								color: "var(--text-muted)",
								fontSize: "14px",
								margin: 0,
							}}
						>
							Install the official package or scaffolder for your favorite framework:
						</p>
					</div>

					{/* Framework Selector Pills */}
					<div
						style={{
							display: "flex",
							gap: "6px",
							backgroundColor: "var(--bg-dark)",
							padding: "4px",
							borderRadius: "10px",
							border: "1px solid var(--border-subtle)",
						}}
					>
						{[
							{ id: "react", label: "React" },
							{ id: "vue", label: "Vue 3" },
							{ id: "svelte", label: "Svelte" },
							{ id: "cli", label: "CLI Scaffolder" },
						].map((item) => (
							<button
								key={item.id}
								onClick={() => setFramework(item.id as Framework)}
								style={{
									padding: "6px 12px",
									borderRadius: "8px",
									fontSize: "12px",
									fontWeight: framework === item.id ? 600 : 500,
									border: "none",
									cursor: "pointer",
									backgroundColor:
										framework === item.id
											? "var(--bg-surface-hover)"
											: "transparent",
									color:
										framework === item.id
											? item.id === "vue"
												? "#42B883"
												: item.id === "svelte"
													? "#FF3E00"
													: "var(--cyan-primary)"
											: "var(--text-muted)",
									transition: "all 0.15s ease",
								}}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				{/* Package manager tabs */}
				<div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
					{(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
						<button
							key={pm}
							onClick={() => setInstallTab(pm)}
							style={{
								padding: "6px 14px",
								borderRadius: "8px",
								fontSize: "13px",
								fontWeight: 500,
								cursor: "pointer",
								border:
									installTab === pm
										? "1px solid var(--cyan-primary)"
										: "1px solid var(--border-subtle)",
								backgroundColor:
									installTab === pm
										? "var(--bg-surface-hover)"
										: "transparent",
								color:
									installTab === pm
										? "var(--cyan-primary)"
										: "var(--text-muted)",
							}}
						>
							{pm}
						</button>
					))}
				</div>

				{/* Command display box */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "var(--bg-dark)",
						border: "1px solid var(--border-subtle)",
						borderRadius: "12px",
						padding: "14px 20px",
					}}
				>
					<code
						style={{
							fontFamily: "var(--font-mono)",
							fontSize: "14px",
							color:
								framework === "vue"
									? "#42B883"
									: framework === "svelte"
										? "#FF3E00"
										: "var(--cyan-primary)",
						}}
					>
						{currentCommand}
					</code>
					<button
						onClick={copyInstall}
						className='btn-secondary'
						style={{ fontSize: "12px", padding: "6px 14px" }}
					>
						{copiedInstall ? "✓ Copied" : "Copy"}
					</button>
				</div>
			</div>
		</section>
	);
}
