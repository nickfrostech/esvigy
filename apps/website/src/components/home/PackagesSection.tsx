/** @format */

import { useState } from "react";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

interface PackageItem {
	name: string;
	description: string;
	status: string;
	isLive?: boolean;
	npmUrl?: string;
	commands?: Record<PackageManager, string>;
}

const TARGET_PACKAGES: PackageItem[] = [
	{
		name: "@esvigy/react",
		description:
			"React 18 & 19 components with full TypeScript declarations, two-tone color props, and zero-JS CSS animations.",
		status: "Available Now",
		isLive: true,
		npmUrl: "https://www.npmjs.com/package/@esvigy/react",
		commands: {
			pnpm: "pnpm add @esvigy/react",
			npm: "npm install @esvigy/react",
			yarn: "yarn add @esvigy/react",
			bun: "bun add @esvigy/react",
		},
	},
	{
		name: "@esvigy/cli",
		description:
			"Interactive shadcn-style scaffolder. Directly injects self-contained illustration components into your project with zero dependencies.",
		status: "Available Now",
		isLive: true,
		npmUrl: "https://www.npmjs.com/package/@esvigy/cli",
		commands: {
			pnpm: "pnpm dlx @esvigy/cli add",
			npm: "npx @esvigy/cli add",
			yarn: "yarn dlx @esvigy/cli add",
			bun: "bunx @esvigy/cli add",
		},
	},
	{
		name: "@esvigy/svg",
		description:
			"Normalized, canonical SVG files and metadata manifest for framework-agnostic usage across the web.",
		status: "Coming Soon",
	},
	{
		name: "@esvigy/vue",
		description:
			"Native Vue 3 components with reactive props for primary & secondary colors and animation toggling.",
		status: "Coming Soon",
	},
	{
		name: "@esvigy/svelte",
		description:
			"Lightweight Svelte 4 & 5 components with instant reactivity and compiled vector markup.",
		status: "Coming Soon",
	},
];

export function PackagesSection() {
	const [selectedPm, setSelectedPm] = useState<PackageManager>("pnpm");
	const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

	const handleCopy = (cmd: string, pkgName: string) => {
		navigator.clipboard.writeText(cmd);
		setCopiedPkg(pkgName);
		setTimeout(() => setCopiedPkg(null), 2000);
	};

	return (
		<section
			id='packages'
			style={{
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "0 24px",
				width: "100%",
			}}
		>
			<div style={{ textAlign: "center", marginBottom: "36px" }}>
				<h2
					style={{
						fontSize: "28px",
						fontWeight: 600,
						margin: "0 0 6px 0",
						color: "var(--text-main)",
					}}
				>
					Ecosystem Packages
				</h2>
				<p
					style={{
						color: "var(--text-muted)",
						fontSize: "14px",
						margin: 0,
					}}
				>
					Modular packages across the web ecosystem.{" "}
					<strong style={{ color: "var(--cyan-primary)" }}>@esvigy/react</strong>{" "}
					and{" "}
					<strong style={{ color: "var(--cyan-primary)" }}>@esvigy/cli</strong>{" "}
					are available on npm!
				</p>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
					gap: "20px",
				}}
			>
				{TARGET_PACKAGES.map((pkg) => (
					<div
						key={pkg.name}
						className='flat-panel'
						style={{
							padding: "24px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							border: pkg.isLive
								? "1px solid rgba(0, 212, 255, 0.35)"
								: undefined,
							boxShadow: pkg.isLive
								? "0 4px 20px -4px rgba(0, 212, 255, 0.1)"
								: undefined,
						}}
					>
						<div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px",
								}}
							>
								<span
									style={{
										fontSize: "15px",
										fontWeight: 600,
										color: pkg.isLive
											? "var(--cyan-primary)"
											: "var(--text-main)",
									}}
								>
									{pkg.name}
								</span>
								<span
									style={{
										fontSize: "11px",
										padding: "2px 8px",
										borderRadius: "6px",
										backgroundColor: pkg.isLive
											? "rgba(16, 185, 129, 0.15)"
											: "var(--bg-surface-hover)",
										color: pkg.isLive ? "#10B981" : "var(--text-muted)",
										fontWeight: 600,
										border: pkg.isLive
											? "1px solid rgba(16, 185, 129, 0.3)"
											: "1px solid var(--border-subtle)",
									}}
								>
									{pkg.status}
								</span>
							</div>

							<p
								style={{
									color: "var(--text-muted)",
									fontSize: "13px",
									lineHeight: 1.6,
									margin: "0 0 20px 0",
								}}
							>
								{pkg.description}
							</p>
						</div>

						{pkg.isLive ? (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
								}}
							>
								{/* Package Manager Tabs */}
								<div
									style={{
										display: "flex",
										gap: "4px",
										backgroundColor: "var(--bg-dark)",
										padding: "3px",
										borderRadius: "8px",
										border: "1px solid var(--border-subtle)",
									}}
								>
									{(["pnpm", "npm", "yarn", "bun"] as const).map(
										(installer) => (
											<button
												key={installer}
												type='button'
												onClick={() => setSelectedPm(installer)}
												style={{
													flex: 1,
													padding: "4px 6px",
													borderRadius: "6px",
													fontSize: "11px",
													fontWeight:
														selectedPm === installer ? 600 : 500,
													border: "none",
													cursor: "pointer",
													backgroundColor:
														selectedPm === installer
															? "var(--bg-surface-hover)"
															: "transparent",
													color:
														selectedPm === installer
															? "var(--cyan-primary)"
															: "var(--text-muted)",
													transition: "all 0.15s ease",
												}}
											>
												{installer}
											</button>
										)
									)}
								</div>

								{/* Clickable Code Snippet */}
								{pkg.commands && (
									<button
										type='button'
										onClick={() =>
											handleCopy(pkg.commands![selectedPm], pkg.name)
										}
										style={{
											padding: "10px 12px",
											borderRadius: "8px",
											backgroundColor: "var(--bg-dark)",
											border: "1px solid rgba(0, 212, 255, 0.25)",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											fontSize: "12px",
											fontFamily: "monospace",
											color: "var(--cyan-primary)",
											cursor: "pointer",
											width: "100%",
											transition: "all 0.2s ease",
											textAlign: "left",
										}}
										title='Click to copy install command'
									>
										<span
											style={{
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap",
											}}
										>
											{pkg.commands[selectedPm]}
										</span>
										<span
											style={{
												fontSize: "11px",
												color:
													copiedPkg === pkg.name
														? "#10B981"
														: "var(--text-muted)",
												marginLeft: "8px",
												fontWeight: 600,
												flexShrink: 0,
											}}
										>
											{copiedPkg === pkg.name ? "✓ Copied" : "Copy"}
										</span>
									</button>
								)}

								{pkg.npmUrl && (
									<a
										href={pkg.npmUrl}
										target='_blank'
										rel='noopener noreferrer'
										style={{
											fontSize: "11px",
											color: "var(--text-muted)",
											textAlign: "center",
											textDecoration: "none",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "4px",
											paddingTop: "2px",
											transition: "color 0.2s ease",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "var(--cyan-primary)")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "var(--text-muted)")
										}
									>
										View package on npmjs.com ↗
									</a>
								)}
							</div>
						) : (
							<div
								style={{
									padding: "8px 12px",
									borderRadius: "10px",
									backgroundColor: "var(--bg-dark)",
									border: "1px dashed var(--border-subtle)",
									textAlign: "center",
									fontSize: "12px",
									color: "var(--text-muted)",
									fontWeight: 500,
								}}
							>
								Coming Soon
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
