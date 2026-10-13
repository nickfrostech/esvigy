/** @format */

interface Contributor {
	name: string;
	role: string;
	handle?: string;
	link: string;
	description: string;
	avatar?: string;
}

const CONTRIBUTORS: Contributor[] = [
	{
		name: "Nick Frost",
		role: "Creator & Maintainer",
		handle: "@nickfrostech",
		link: "https://github.com/nickfrostech",
		avatar: "https://github.com/nickfrostech.png",
		description:
			"Project creator, core motion systems, React components, and canonical illustrations (NotFoundRobot, WomanLaptop, StatusOffline, EmptyMessage, etc.).",
	},
	{
		name: "Flowbite",
		role: "Illustration Designs",
		handle: "flowbite.com",
		link: "https://flowbite.com",
		description:
			"Open-source vector illustrations integrated, normalized, and powered with dynamic two-tone palette bindings.",
	},
	{
		name: "Community",
		role: "Open Source Contributors",
		handle: "github.com/nickfrostech/esvigy",
		link: "https://github.com/nickfrostech/esvigy",
		description:
			"Contributors submitting new canonical illustrations, reporting bug fixes, and testing framework bindings.",
	},
];

export function ContributorsSection() {
	return (
		<section
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
					Contributors
				</h2>
				<p
					style={{
						color: "var(--text-muted)",
						fontSize: "14px",
						margin: 0,
					}}
				>
					The creators, designers, and open-source projects powering the
					Esvigy illustration ecosystem.
				</p>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: "20px",
				}}
			>
				{CONTRIBUTORS.map((c) => (
					<a
						key={c.name}
						href={c.link}
						target='_blank'
						rel='noreferrer'
						className='flat-panel'
						style={{
							padding: "24px",
							display: "flex",
							flexDirection: "column",
							textDecoration: "none",
							color: "inherit",
							transition: "border-color 0.2s ease, transform 0.2s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "var(--cyan-primary)";
							e.currentTarget.style.transform = "translateY(-2px)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "var(--border-subtle)";
							e.currentTarget.style.transform = "translateY(0)";
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "12px",
								marginBottom: "12px",
							}}
						>
							{c.avatar ? (
								<img
									src={c.avatar}
									alt={c.name}
									style={{
										width: "40px",
										height: "40px",
										borderRadius: "10px",
										cornerShape: "squircle",
										objectFit: "cover",
										border: "1px solid var(--border-subtle)",
									}}
								/>
							) : (
								<div
									style={{
										width: "40px",
										height: "40px",
										borderRadius: "10px",
										cornerShape: "squircle",
										backgroundColor: "var(--bg-surface-hover)",
										border: "1px solid var(--border-subtle)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "18px",
										color: "var(--cyan-primary)",
									}}
								>
									*
								</div>
							)}

							<div>
								<div
									style={{
										fontWeight: 600,
										fontSize: "15px",
										color: "var(--text-main)",
									}}
								>
									{c.name}
								</div>
								<div
									style={{
										fontSize: "12px",
										color: "var(--cyan-primary)",
										fontWeight: 500,
									}}
								>
									{c.role}
								</div>
							</div>
						</div>

						<p
							style={{
								fontSize: "13px",
								color: "var(--text-muted)",
								lineHeight: 1.6,
								margin: "0 0 16px 0",
								flex: 1,
							}}
						>
							{c.description}
						</p>

						<div
							style={{
								fontSize: "12px",
								color: "var(--text-muted)",
								fontWeight: 500,
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<span>{c.handle}</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
