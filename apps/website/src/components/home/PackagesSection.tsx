/** @format */

interface PackageItem {
	name: string;
	description: string;
	status: string;
}

const TARGET_PACKAGES: PackageItem[] = [
	{
		name: "@esvigy/react",
		description:
			"React 18 & 19 components with full TypeScript declarations, two-tone color props, and zero-JS CSS animations.",
		status: "Coming Soon",
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
	{
		name: "@esvigy/cli",
		description:
			"Interactive CLI scaffolder (npx esvigy add <name>) to directly drop illustrations into your codebase.",
		status: "Coming Soon",
	},
];

export function PackagesSection() {
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
					Targeted packages across the web ecosystem. All packages are
					currently in development.
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
										color: "var(--text-main)",
									}}
								>
									{pkg.name}
								</span>
								<span
									style={{
										fontSize: "11px",
										padding: "2px 8px",
										borderRadius: "6px",
										backgroundColor: "var(--bg-surface-hover)",
										color: "var(--cyan-primary)",
										fontWeight: 500,
										border: "1px solid var(--border-subtle)",
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

						<div
							style={{
								padding: "8px 12px",
								borderRadius: "10px",
								cornerShape: "squircle",
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
					</div>
				))}
			</div>
		</section>
	);
}
