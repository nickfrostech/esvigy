/** @format */

import { useState } from "react";

const INSTALL_COMMANDS = {
	pnpm: "pnpm add @esvigy/react",
	npm: "npm install @esvigy/react",
	yarn: "yarn add @esvigy/react",
	bun: "bun add @esvigy/react",
};

export function QuickStartGuide() {
	const [installTab, setInstallTab] = useState<
		"pnpm" | "npm" | "yarn" | "bun"
	>("pnpm");
	const [copiedInstall, setCopiedInstall] = useState(false);

	const copyInstall = () => {
		navigator.clipboard.writeText(INSTALL_COMMANDS[installTab]);
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
						margin: "0 0 20px 0",
					}}
				>
					Install the official package for your favorite JavaScript package
					manager:
				</p>

				{/* Package manager tabs */}
				<div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
					{(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
						<button
							key={pm}
							onClick={() => setInstallTab(pm)}
							style={{
								padding: "6px 14px",
								borderRadius: "8px",
								cornerShape: "squircle",
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

				{/* Command display box (Clean copy button without checkmark emoji) */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "var(--bg-dark)",
						border: "1px solid var(--border-subtle)",
						borderRadius: "12px",
						cornerShape: "squircle",
						padding: "14px 20px",
					}}
				>
					<code
						style={{
							fontFamily: "var(--font-mono)",
							fontSize: "14px",
							color: "var(--cyan-primary)",
						}}
					>
						{INSTALL_COMMANDS[installTab]}
					</code>
					<button
						onClick={copyInstall}
						className='btn-secondary'
						style={{ fontSize: "12px", padding: "6px 14px" }}
					>
						{copiedInstall ? "Copied" : "Copy"}
					</button>
				</div>
			</div>
		</section>
	);
}
