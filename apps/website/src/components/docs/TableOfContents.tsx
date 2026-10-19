/** @format */

import { useEffect, useState } from "react";

export interface TocItem {
	id: string;
	text: string;
	level: 2 | 3;
}

interface TableOfContentsProps {
	items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		if (items.length === 0) return;

		// Set default active to first item if at the top
		if (!activeId && items[0]) {
			setActiveId(items[0].id);
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((e) => e.isIntersecting);
				if (visible) {
					setActiveId(visible.target.id);
				}
			},
			{ rootMargin: "-80px 0px -55% 0px", threshold: [0, 0.5, 1] },
		);

		items.forEach((item) => {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [items]);

	if (items.length === 0) return null;

	return (
		<nav
			aria-label='Table of contents'
			style={{
				width: "210px",
				paddingLeft: "16px",
				borderLeft: "1px solid var(--border-subtle)",
				boxSizing: "border-box",
			}}
		>

			<div
				style={{
					fontSize: "11.5px",
					fontWeight: 600,
					textTransform: "uppercase",
					letterSpacing: "0.06em",
					color: "var(--text-dim)",
					marginBottom: "14px",
				}}
			>
				On this page
			</div>

			<nav
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					position: "relative",
				}}
			>
				{items.map((item) => {
					const isActive = activeId === item.id;
					return (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={(e) => {
								e.preventDefault();
								const el = document.getElementById(item.id);
								if (el) {
									el.scrollIntoView({ behavior: "smooth" });
									window.history.pushState(null, "", `#${item.id}`);
									setActiveId(item.id);
								}
							}}
							style={{
								fontSize: item.level === 3 ? "12.5px" : "13.5px",
								paddingLeft: item.level === 3 ? "12px" : "0",
								color: isActive
									? "var(--cyan-primary)"
									: "var(--text-muted)",
								fontWeight: isActive ? 600 : 450,
								textDecoration: "none",
								transition: "all 0.15s ease",
								lineHeight: "1.4",
								position: "relative",
							}}
						>
							{/* Active Indicator Pip on the left line */}
							{isActive && (
								<span
									style={{
										position: "absolute",
										left: item.level === 3 ? "-20px" : "-19px",
										top: "4px",
										width: "4px",
										height: "12px",
										borderRadius: "2px",
										backgroundColor: "var(--cyan-primary)",
										boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)",
									}}
								/>
							)}
							{item.text}
						</a>
					);
				})}
			</nav>
		</nav>
	);
}

