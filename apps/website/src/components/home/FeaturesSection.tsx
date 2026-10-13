/** @format */


export function FeaturesSection() {
	return (
		<section
			style={{
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "0 24px",
				width: "100%",
			}}
		>
			<div style={{ textAlign: "center", marginBottom: "40px" }}>
				<h2
					style={{
						fontSize: "28px",
						fontWeight: 600,
						letterSpacing: "-0.6px",
						margin: "0 0 10px 0",
						color: "var(--text-main)",
					}}
				>
					Engineered for Developer Joy
				</h2>
				<p
					style={{
						color: "var(--text-muted)",
						fontSize: "15px",
						maxWidth: "560px",
						margin: "0 auto",
						fontWeight: 400,
					}}
				>
					Say goodbye to downloading static SVGs and editing messy XML by
					hand.
				</p>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
					gap: "20px",
				}}
			>
				{/* Card 1 */}
				<div className='flat-panel' style={{ padding: "28px" }}>
					<h3
						style={{
							fontSize: "16px",
							fontWeight: 600,
							margin: "0 0 8px 0",
							color: "var(--text-main)",
						}}
					>
						Component-First Architecture
					</h3>
					<p
						style={{
							color: "var(--text-muted)",
							fontSize: "14px",
							lineHeight: 1.6,
							margin: 0,
							fontWeight: 400,
						}}
					>
						Import illustrations like standard components. Normalized
						viewBox coordinates and clean semantic DOM trees ready for
						production.
					</p>
				</div>

				{/* Card 2 */}
				<div className='flat-panel' style={{ padding: "28px" }}>
					<h3
						style={{
							fontSize: "16px",
							fontWeight: 600,
							margin: "0 0 8px 0",
							color: "var(--text-main)",
						}}
					>
						Two-Tone Color Engine
					</h3>
					<p
						style={{
							color: "var(--text-muted)",
							fontSize: "14px",
							lineHeight: 1.6,
							margin: 0,
							fontWeight: 400,
						}}
					>
						Control primary brand accents via <code>color</code> and
						background surfaces with <code>secondaryColor</code>. Seamless
						dark/light theme switching.
					</p>
				</div>

				{/* Card 3 */}
				<div className='flat-panel' style={{ padding: "28px" }}>
					<h3
						style={{
							fontSize: "16px",
							fontWeight: 600,
							margin: "0 0 8px 0",
							color: "var(--text-main)",
						}}
					>
						Zero-JS Micro-Animations
					</h3>
					<p
						style={{
							color: "var(--text-muted)",
							fontSize: "14px",
							lineHeight: 1.6,
							margin: 0,
							fontWeight: 400,
						}}
					>
						Animations are 100% pure vector CSS keyframes. Toggle motion
						with <code>animated</code> with zero JavaScript runtime
						performance cost.
					</p>
				</div>

				{/* Card 4 */}
				<div className='flat-panel' style={{ padding: "28px" }}>
					<h3
						style={{
							fontSize: "16px",
							fontWeight: 600,
							margin: "0 0 8px 0",
							color: "var(--text-main)",
						}}
					>
						Tree-Shakable & Modular
					</h3>
					<p
						style={{
							color: "var(--text-muted)",
							fontSize: "14px",
							lineHeight: 1.6,
							margin: 0,
							fontWeight: 400,
						}}
					>
						Strict <code>sideEffects: false</code> dead-code elimination.
						Your final client bundle only includes the exact illustrations
						you import.
					</p>
				</div>
			</div>
		</section>
	);
}
