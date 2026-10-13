/** @format */

import { useState, useEffect, type ComponentType } from "react";

export interface IllustrationItem {
	name: string;
	Component: ComponentType<any>;
	author: string;
	source: string;
	category: string;
	tags: string[];
}

interface IllustrationModalProps {
	item: IllustrationItem | null;
	onClose: () => void;
	primaryColor: string;
	secondaryColor: string;
	animated: boolean;
}

export function IllustrationModal({
	item,
	onClose,
	primaryColor,
	secondaryColor,
	animated,
}: IllustrationModalProps) {
	const [activeTab, setActiveTab] = useState<"react" | "cli" | "svg">("react");
	const [copied, setCopied] = useState(false);

	// Prevent background page from scrolling when modal popup is open
	useEffect(() => {
		if (item) {
			const prevOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prevOverflow;
			};
		}
	}, [item]);

	if (!item) return null;

	const reactSnippet = `import { ${item.name} } from "@esvigy/react";

<${item.name}
  animated={${animated}}
  color="${primaryColor}"
  secondaryColor="${secondaryColor}"
  className="w-48 h-48"
/>`;

	const cliSnippet = `# Add as self-contained component to components/esvigy/
pnpm dlx esvigy add ${item.name.toLowerCase()} --framework react`;

	const codeToShow =
		activeTab === "react"
			? reactSnippet
			: activeTab === "cli"
				? cliSnippet
				: reactSnippet;

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleDownloadSvg = () => {
		const svgElem = document
			.getElementById(`modal-preview-${item.name}`)
			?.querySelector("svg");
		if (svgElem) {
			const svgXml = new XMLSerializer().serializeToString(svgElem);
			const blob = new Blob([svgXml], {
				type: "image/svg+xml;charset=utf-8",
			});
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = `${item.name}.svg`;
			link.click();
			URL.revokeObjectURL(url);
		}
	};

	return (
		<div
			onClick={onClose}
			onWheel={(e) => e.stopPropagation()}
			onTouchMove={(e) => e.stopPropagation()}
			style={{
				position: "fixed",
				inset: 0,
				backgroundColor: "rgba(0, 0, 0, 0.6)",
				zIndex: 100,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "24px",
				overscrollBehavior: "contain",
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					backgroundColor: "var(--bg-surface)",
					border: "1px solid var(--border-subtle)",
					borderRadius: "20px",
					cornerShape: "squircle",
					maxWidth: "740px",
					width: "100%",
					padding: "28px",
					boxShadow: "none",
					position: "relative",
					maxHeight: "90vh",
					overflowY: "auto",
					overscrollBehavior: "contain",
				}}
			>
				{/* Header */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						marginBottom: "20px",
					}}
				>
					<div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<h2
								style={{
									margin: 0,
									fontSize: "22px",
									fontWeight: 600,
									color: "var(--text-main)",
								}}
							>
								{item.name}
							</h2>
							<span
								style={{
									fontSize: "11px",
									padding: "2px 8px",
									borderRadius: "8px",
									cornerShape: "squircle",
									backgroundColor: "var(--bg-surface-hover)",
									color: "var(--cyan-primary)",
									fontWeight: 500,
									textTransform: "capitalize",
								}}
							>
								{item.category}
							</span>
						</div>
						<p
							style={{
								margin: "4px 0 0",
								fontSize: "13px",
								color: "var(--text-muted)",
							}}
						>
							Artist / Author:{" "}
							<strong
								style={{ color: "var(--text-main)", fontWeight: 500 }}
							>
								{item.author}
							</strong>{" "}
							• Source:{" "}
							<a
								href={item.source}
								target='_blank'
								rel='noreferrer'
								style={{
									color: "var(--cyan-primary)",
									textDecoration: "none",
								}}
							>
								{item.source}
							</a>
						</p>
					</div>
					<button
						onClick={onClose}
						className='btn-icon'
						style={{ width: "32px", height: "32px" }}
						aria-label='Close dialog'
					>
						✕
					</button>
				</div>

				{/* Live Preview Display (Flat container, no shadows) */}
				<div
					style={{
						height: "320px",
						backgroundColor: "var(--bg-dark)",
						borderRadius: "16px",
						cornerShape: "squircle",
						border: "1px solid var(--border-subtle)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "32px",
						marginBottom: "20px",
					}}
				>
					<div
						id={`modal-preview-${item.name}`}
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<item.Component
							animated={animated}
							color={primaryColor}
							secondaryColor={secondaryColor}
							style={{ maxWidth: "100%", maxHeight: "100%" }}
						/>
					</div>
				</div>

				{/* Snippet format tabs */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "12px",
						borderBottom: "1px solid var(--border-subtle)",
						paddingBottom: "8px",
						flexWrap: "wrap",
						gap: "10px",
					}}
				>
					<div style={{ display: "flex", gap: "6px" }}>
						<button
							onClick={() => setActiveTab("react")}
							style={{
								background:
									activeTab === "react"
										? "var(--bg-surface-hover)"
										: "transparent",
								color:
									activeTab === "react"
										? "var(--cyan-primary)"
										: "var(--text-muted)",
								border:
									activeTab === "react"
										? "1px solid var(--cyan-primary)"
										: "1px solid transparent",
								borderRadius: "8px",
								cornerShape: "squircle",
								padding: "5px 12px",
								fontSize: "12px",
								fontWeight: 500,
								cursor: "pointer",
							}}
						>
							React Component
						</button>
						<button
							onClick={() => setActiveTab("cli")}
							style={{
								background:
									activeTab === "cli"
										? "var(--bg-surface-hover)"
										: "transparent",
								color:
									activeTab === "cli"
										? "var(--cyan-primary)"
										: "var(--text-muted)",
								border:
									activeTab === "cli"
										? "1px solid var(--cyan-primary)"
										: "1px solid transparent",
								borderRadius: "8px",
								cornerShape: "squircle",
								padding: "5px 12px",
								fontSize: "12px",
								fontWeight: 500,
								cursor: "pointer",
							}}
						>
							CLI Scaffolder
						</button>
					</div>

					<div style={{ display: "flex", gap: "8px" }}>
						<button
							onClick={handleDownloadSvg}
							className='btn-secondary'
							style={{ fontSize: "12px", padding: "6px 12px" }}
						>
							<span>Download .SVG</span>
						</button>
						<button
							onClick={() => handleCopy(codeToShow)}
							className='btn-primary'
							style={{ fontSize: "12px", padding: "6px 14px" }}
						>
							<span>{copied ? "Copied" : "Copy Snippet"}</span>
						</button>
					</div>
				</div>

				{/* Code block */}
				<pre
					style={{
						margin: 0,
						backgroundColor: "var(--bg-dark)",
						border: "1px solid var(--border-subtle)",
						borderRadius: "12px",
						cornerShape: "squircle",
						padding: "14px",
						color: "var(--cyan-primary)",
						fontFamily: "var(--font-mono)",
						fontSize: "13px",
						overflowX: "auto",
						lineHeight: 1.5,
					}}
				>
					{codeToShow}
				</pre>

				{/* Tags footer */}
				{item.tags && item.tags.length > 0 && (
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "6px",
							marginTop: "16px",
						}}
					>
						{item.tags.map((tag) => (
							<span
								key={tag}
								style={{
									fontSize: "11px",
									padding: "2px 8px",
									borderRadius: "6px",
									backgroundColor: "var(--bg-surface-hover)",
									color: "var(--text-muted)",
									border: "1px solid var(--border-subtle)",
								}}
							>
								#{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
