/** @format */

import { useState } from "react";
import { Link } from "wouter";
import { Copy, Check, ArrowRight } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import "../docs/prism-setup";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

interface PackageItem {
	name: string;
	description: string;
	status: string;
	isLive?: boolean;
	docUrl?: string;
	commands?: Record<PackageManager, string>;
}

const TARGET_PACKAGES: PackageItem[] = [
	{
		name: "@esvigy/react",
		description:
			"React 18 & 19 components with full TypeScript declarations, two-tone color props, and zero-JS CSS animations.",
		status: "Available Now",
		isLive: true,
		docUrl: "/docs/frameworks/react",
		commands: {
			pnpm: "pnpm add @esvigy/react",
			npm: "npm install @esvigy/react",
			yarn: "yarn add @esvigy/react",
			bun: "bun add @esvigy/react",
		},
	},
	{
		name: "@esvigy/vue",
		description:
			"Native Vue 3 Single-File Components with reactive two-tone props, full TypeScript types, and zero-JS CSS micro-animations.",
		status: "Available Now",
		isLive: true,
		docUrl: "/docs/frameworks/vue",
		commands: {
			pnpm: "pnpm add @esvigy/vue",
			npm: "npm install @esvigy/vue",
			yarn: "yarn add @esvigy/vue",
			bun: "bun add @esvigy/vue",
		},
	},
	{
		name: "@esvigy/cli",
		description:
			"Interactive shadcn-style scaffolder. Directly injects self-contained illustration components (React, Vue, SVG) into your project.",
		status: "Available Now",
		isLive: true,
		docUrl: "/docs/cli",
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
		status: "Available Now",
		isLive: true,
		docUrl: "/docs/frameworks/svg",
		commands: {
			pnpm: "pnpm dlx @esvigy/cli add --framework svg",
			npm: "npx @esvigy/cli add --framework svg",
			yarn: "yarn dlx @esvigy/cli add --framework svg",
			bun: "bunx @esvigy/cli add --framework svg",
		},
	},
	{
		name: "@esvigy/svelte",
		description:
			"Lightweight Svelte 4 & 5 components with reactive two-tone props, full TypeScript types, and zero-JS CSS micro-animations.",
		status: "Available Now",
		isLive: true,
		docUrl: "/docs/frameworks/svelte",
		commands: {
			pnpm: "pnpm add @esvigy/svelte",
			npm: "npm install @esvigy/svelte",
			yarn: "yarn add @esvigy/svelte",
			bun: "bun add @esvigy/svelte",
		},
	},
	{
		name: "@esvigy/react-native",
		description:
			"Native mobile vector illustrations using react-native-svg primitives (Svg, Path, G).",
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
					<strong style={{ color: "var(--cyan-primary)" }}>
						@esvigy/react
					</strong>
					,{" "}
					<strong style={{ color: "#42B883" }}>
						@esvigy/vue
					</strong>
					,{" "}
					<strong style={{ color: "#FF3E00" }}>
						@esvigy/svelte
					</strong>
					, and{" "}
					<strong style={{ color: "var(--cyan-primary)" }}>
						@esvigy/cli
					</strong>{" "}
					are available on npm!
				</p>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
										color: pkg.isLive
											? "#10B981"
											: "var(--text-muted)",
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
										),
									)}
								</div>

								{/* Clickable Code Snippet with Syntax Highlighting and Copy Icon */}
								{pkg.commands && (
									<div
										style={{
											padding: "8px 10px 8px 12px",
											borderRadius: "8px",
											backgroundColor: "var(--bg-dark)",
											border: "1px solid var(--border-subtle)",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											gap: "8px",
											width: "100%",
											boxSizing: "border-box",
										}}
									>
										<div
											style={{
												overflowX: "auto",
												flex: 1,
												fontSize: "12px",
												fontFamily: "var(--font-mono)",
											}}
										>
											<Highlight
												theme={themes.vsDark}
												code={pkg.commands[selectedPm]}
												language='bash'
											>
												{({ tokens, getTokenProps }) => (
													<pre
														style={{
															margin: 0,
															padding: 0,
															backgroundColor: "transparent",
															fontFamily: "var(--font-mono)",
															fontSize: "12px",
															lineHeight: "1.4",
															whiteSpace: "pre",
														}}
													>
														{tokens.map((line, i) => (
															<div key={i}>
																{line.map((token, key) => (
																	<span key={key} {...getTokenProps({ token })} />
																))}
															</div>
														))}
													</pre>
												)}
											</Highlight>
										</div>

										<button
											type='button'
											onClick={() =>
												handleCopy(pkg.commands![selectedPm], pkg.name)
											}
											style={{
												display: "inline-flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "5px",
												borderRadius: "6px",
												backgroundColor: "rgba(255, 255, 255, 0.05)",
												border: "1px solid var(--border-subtle)",
												color:
													copiedPkg === pkg.name
														? "var(--cyan-primary)"
														: "var(--text-muted)",
												cursor: "pointer",
												flexShrink: 0,
												transition: "all 0.15s ease",
											}}
											title={
												copiedPkg === pkg.name
													? "Copied!"
													: "Copy command to clipboard"
											}
											aria-label='Copy command'
										>
											{copiedPkg === pkg.name ? (
												<Check size={13} />
											) : (
												<Copy size={13} />
											)}
										</button>
									</div>
								)}

								{pkg.docUrl && (
									<Link
										href={pkg.docUrl}
										style={{
											fontSize: "12px",
											color: "var(--cyan-primary)",
											textAlign: "center",
											textDecoration: "none",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "6px",
											paddingTop: "4px",
											fontWeight: 500,
											transition: "opacity 0.2s ease",
										}}
										onMouseEnter={(e) =>
											(e.currentTarget.style.opacity = "0.75")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.opacity = "1")
										}
									>
										<span>View Documentation</span>
										<ArrowRight size={13} />
									</Link>
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
