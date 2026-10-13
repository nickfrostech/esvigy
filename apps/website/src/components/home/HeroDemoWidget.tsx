/** @format */

import { useState } from "react";
import * as EsvigyComponents from "@esvigy/react";

interface HeroDemoWidgetProps {
	selectedIllustrationName: string;
	onSelectIllustrationName: (name: string) => void;
}

const PRESET_PALETTES = [
	{ name: "Cyan Pop", primary: "#00D4FF", secondary: "#0B1528" },
	{ name: "Emerald", primary: "#10B981", secondary: "#064E3B" },
	{ name: "Purple Neon", primary: "#A855F7", secondary: "#1E1B4B" },
	{ name: "Sunset Flame", primary: "#F97316", secondary: "#431407" },
	{ name: "Monochrome", primary: "#F8FAFC", secondary: "#334155" },
];

export function HeroDemoWidget({
	selectedIllustrationName,
	onSelectIllustrationName,
}: HeroDemoWidgetProps) {
	const [heroPalette, setHeroPalette] = useState(PRESET_PALETTES[0]);
	const [heroAnimated, setHeroAnimated] = useState(true);
	const [copiedCode, setCopiedCode] = useState(false);

	const HeroComponent =
		(EsvigyComponents as any)[selectedIllustrationName] ||
		EsvigyComponents.NotFoundRobot;

	const handleCopyCode = () => {
		const code = `<${selectedIllustrationName} animated={${heroAnimated}} color="${heroPalette.primary}" secondaryColor="${heroPalette.secondary}" className="w-48 h-48" />`;
		navigator.clipboard.writeText(code);
		setCopiedCode(true);
		setTimeout(() => setCopiedCode(false), 2000);
	};

	return (
		<section
			style={{
				maxWidth: "1200px",
				margin: "0 auto 48px auto",
				padding: "0 24px",
				width: "100%",
			}}
		>
			<div
				style={{
					width: "100%",
					borderRadius: "20px",
					cornerShape: "squircle",
					backgroundColor: "var(--bg-surface)",
					border: "1px solid var(--border-subtle)",
					overflow: "hidden",
					textAlign: "left",
				}}
			>
				{/* Top Bar of Widget */}
				<div
					style={{
						padding: "14px 22px",
						borderBottom: "1px solid var(--border-subtle)",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "12px",
						backgroundColor: "var(--bg-surface)",
					}}
				>
					{/* Demo illustration selector pills */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							flexWrap: "wrap",
						}}
					>
						{[
							"NotFoundRobot",
							"EmptyMessage",
							"WomanLaptop",
							"StatusOffline",
						].map((name) => (
							<button
								key={name}
								onClick={() => onSelectIllustrationName(name)}
								style={{
									backgroundColor:
										selectedIllustrationName === name
											? "var(--bg-surface-hover)"
											: "transparent",
									color:
										selectedIllustrationName === name
											? "var(--cyan-primary)"
											: "var(--text-muted)",
									border:
										selectedIllustrationName === name
											? "1px solid var(--cyan-primary)"
											: "1px solid var(--border-subtle)",
									borderRadius: "8px",
									cornerShape: "squircle",
									padding: "4px 10px",
									fontSize: "12px",
									fontWeight: 500,
									cursor: "pointer",
									transition: "all 0.15s ease",
								}}
							>
								{name}
							</button>
						))}
					</div>

					{/* Animation Toggle */}
					<div
						style={{ display: "flex", alignItems: "center", gap: "10px" }}
					>
						<label
							style={{
								fontSize: "12px",
								color: "var(--text-muted)",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								cursor: "pointer",
							}}
						>
							<span>animated:</span>
							<input
								type='checkbox'
								checked={heroAnimated}
								onChange={(e) => setHeroAnimated(e.target.checked)}
								style={{
									cursor: "pointer",
									accentColor: "var(--cyan-primary)",
								}}
							/>
						</label>
					</div>
				</div>

				{/* Body of Widget (Preview Left + Code Right) */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						minHeight: "340px",
					}}
				>
					{/* Live Illustration Render */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "36px",
							backgroundColor: "var(--bg-dark)",
							borderRight: "1px solid var(--border-subtle)",
							position: "relative",
						}}
					>
						<div
							style={{
								width: "220px",
								height: "220px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<HeroComponent
								animated={heroAnimated}
								color={heroPalette.primary}
								secondaryColor={heroPalette.secondary}
								style={{ maxWidth: "100%", maxHeight: "100%" }}
							/>
						</div>

						{/* Palette selector pills */}
						<div
							style={{
								position: "absolute",
								bottom: "16px",
								left: "50%",
								transform: "translateX(-50%)",
								display: "flex",
								gap: "8px",
								padding: "4px 10px",
								borderRadius: "20px",
								cornerShape: "squircle",
								backgroundColor: "var(--bg-surface)",
								border: "1px solid var(--border-subtle)",
							}}
						>
							{PRESET_PALETTES.map((pal) => (
								<button
									key={pal.name}
									title={pal.name}
									onClick={() => setHeroPalette(pal)}
									style={{
										width: "18px",
										height: "18px",
										borderRadius: "50%",
										backgroundColor: pal.primary,
										border:
											heroPalette.name === pal.name
												? "2px solid var(--text-main)"
												: "1px solid var(--border-subtle)",
										cursor: "pointer",
										padding: 0,
										transition: "transform 0.15s",
										transform:
											heroPalette.name === pal.name
												? "scale(1.15)"
												: "scale(1)",
									}}
								/>
							))}
						</div>
					</div>

					{/* Code Snippet with Live updates */}
					<div
						style={{
							padding: "26px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div>
							<span
								style={{
									fontSize: "11px",
									fontWeight: 600,
									color: "var(--text-dim)",
									textTransform: "uppercase",
									letterSpacing: "1px",
								}}
							>
								JSX Code Component
							</span>
							<pre
								style={{
									margin: "12px 0 0 0",
									fontFamily: "var(--font-mono)",
									fontSize: "13px",
									lineHeight: 1.6,
									color: "var(--text-main)",
								}}
							>
								<span style={{ color: "#a855f7" }}>import</span> &#123;{" "}
								{selectedIllustrationName} &#125;{" "}
								<span style={{ color: "#a855f7" }}>from</span>{" "}
								<span style={{ color: "#10b981" }}>
									"@esvigy/react"
								</span>
								;{"\n\n"}
								<span style={{ color: "var(--cyan-primary)" }}>
									&lt;{selectedIllustrationName}
								</span>
								{"\n"}
								{"  "}
								<span style={{ color: "#f59e0b" }}>animated</span>
								{heroAnimated ? "" : "={false}"}
								{"\n"}
								{"  "}
								<span style={{ color: "#f59e0b" }}>color</span>=
								<span style={{ color: "#10b981" }}>
									"{heroPalette.primary}"
								</span>
								{"\n"}
								{"  "}
								<span style={{ color: "#f59e0b" }}>secondaryColor</span>
								=
								<span style={{ color: "#10b981" }}>
									"{heroPalette.secondary}"
								</span>
								{"\n"}
								{"  "}
								<span style={{ color: "#f59e0b" }}>className</span>=
								<span style={{ color: "#10b981" }}>"w-48 h-48"</span>
								{"\n"}
								<span style={{ color: "var(--cyan-primary)" }}>
									/&gt;
								</span>
							</pre>
						</div>

						<div
							style={{
								marginTop: "18px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<button
								onClick={handleCopyCode}
								className='btn-secondary'
								style={{ fontSize: "12px", padding: "6px 14px" }}
							>
								<span>{copiedCode ? "Copied" : "Copy Code"}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
