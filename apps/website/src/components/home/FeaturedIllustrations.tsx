/** @format */

import { IllustrationItem } from "../IllustrationModal";

interface FeaturedIllustrationsProps {
	illustrations: IllustrationItem[];
	onSelectIllustration: (item: IllustrationItem) => void;
	onExploreCatalog: () => void;
	theme: "dark" | "light";
}

export function FeaturedIllustrations({
	illustrations,
	onSelectIllustration,
	onExploreCatalog,
}: FeaturedIllustrationsProps) {
	// One catchy illustration from each major canonical type
	const featuredNames = [
		"ActionUpload", // action
		"EmptyCart", // empty
		"ErrorServer", // error
		"SearchLoading", // search
		"NotFoundRobot", // notfound
		"StatusOffline", // status
		"WomanLaptop", // character
		"GamePad", // technology
	];

	const featuredItems = illustrations.filter((i) =>
		featuredNames.includes(i.name),
	);

	return (
		<section
			style={{
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "0 24px",
				width: "100%",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
					marginBottom: "28px",
					flexWrap: "wrap",
					gap: "16px",
				}}
			>
				<div>
					<h2
						style={{
							fontSize: "28px",
							fontWeight: 600,
							margin: "0 0 6px 0",
							color: "var(--text-main)",
						}}
					>
						Featured Illustrations
					</h2>
					<p
						style={{
							color: "var(--text-muted)",
							fontSize: "14px",
							margin: 0,
						}}
					>
						Catchy canonical illustrations spanning actions, empty states,
						errors, search, and characters.
					</p>
				</div>
				<button
					onClick={onExploreCatalog}
					className='btn-secondary'
					style={{ fontSize: "13px" }}
				>
					<span>View All Illustrations</span>
				</button>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
					gap: "20px",
				}}
			>
				{featuredItems.map((item) => (
					<div
						key={item.name}
						onClick={() => onSelectIllustration(item)}
						className='flat-panel'
						style={{
							padding: "24px",
							cursor: "pointer",
							transition: "border-color 0.2s ease, transform 0.2s ease",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
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
								height: "170px",
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: "14px",
							}}
						>
							<item.Component
								animated
								color='var(--cyan-primary)'
								secondaryColor='var(--illustration-secondary)'
								style={{ maxWidth: "100%", maxHeight: "100%" }}
							/>
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<span
								style={{
									fontWeight: 600,
									fontSize: "14px",
									color: "var(--text-main)",
								}}
							>
								{item.name}
							</span>
							<span
								style={{
									fontSize: "11px",
									padding: "2px 8px",
									borderRadius: "6px",
									backgroundColor: "var(--bg-surface-hover)",
									color: "var(--text-muted)",
									textTransform: "capitalize",
								}}
							>
								{item.category}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
