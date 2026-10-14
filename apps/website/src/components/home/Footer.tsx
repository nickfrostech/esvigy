/** @format */

export function Footer() {
	return (
		<footer
			style={{
				borderTop: "1px solid var(--border-subtle)",
				paddingTop: "36px",
				textAlign: "center",
				color: "var(--text-dim)",
				fontSize: "13px",
			}}
		>
			<p style={{ margin: "0 0 8px 0" }}>
				Released under the{" "}
				<strong style={{ color: "var(--text-main)", fontWeight: 500 }}>
					MIT License
				</strong>
				. Free for personal and commercial projects.
			</p>
			<p style={{ margin: "0 0 8px 0" }}>
				Designed and maintained by{" "}
				<a
					href='https://github.com/nickfrostech'
					target='_blank'
					rel='noreferrer'
					style={{ color: "var(--cyan-primary)", textDecoration: "none" }}
				>
					Nick Frost
				</a>
			</p>
			<p style={{ margin: 0, fontSize: "12px" }}>
				<a
					href='https://github.com/nickfrostech/esvigy/blob/main/CONTRIBUTING.md'
					target='_blank'
					rel='noreferrer'
					style={{ color: "var(--text-muted)", textDecoration: "none" }}
				>
					Contributing Guide
				</a>
				{" • "}
				<a
					href='https://github.com/nickfrostech/esvigy/blob/main/COPYRIGHT.md'
					target='_blank'
					rel='noreferrer'
					style={{ color: "var(--text-muted)", textDecoration: "none" }}
				>
					Copyright &amp; Takedown
				</a>
				{" • "}
				<a
					href='https://github.com/nickfrostech/esvigy'
					target='_blank'
					rel='noreferrer'
					style={{ color: "var(--text-muted)", textDecoration: "none" }}
				>
					GitHub Repository
				</a>
			</p>
		</footer>
	);
}
