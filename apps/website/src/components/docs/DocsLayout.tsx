/** @format */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { DocsSidebar, DOCS_NAVIGATION } from "./DocsSidebar";
import { TableOfContents, TocItem } from "./TableOfContents";
import { ChevronRight, ArrowLeft, ArrowRight, Menu, X, Edit3, ExternalLink } from "lucide-react";

interface DocsLayoutProps {
	children: React.ReactNode;
	title: string;
	description?: string;
	docFile?: string;
	toc?: TocItem[];
}

export function DocsLayout({
	children,
	title,
	description,
	docFile = "introduction.mdx",
	toc = [],
}: DocsLayoutProps) {
	const [location] = useLocation();
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	const currentSlug = location.startsWith("/docs/")
		? location.replace("/docs/", "")
		: "introduction";

	// Lock body scroll when mobile docs drawer is open
	useEffect(() => {
		if (mobileSidebarOpen) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prev;
			};
		}
	}, [mobileSidebarOpen]);

	// Close mobile menu on route change
	useEffect(() => {
		setMobileSidebarOpen(false);
	}, [location]);

	// Flatten all items to compute Prev/Next navigation
	const allItems = DOCS_NAVIGATION.flatMap((cat) => cat.items);
	const currentIndex = allItems.findIndex((item) => item.slug === currentSlug);
	const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
	const nextItem =
		currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

	return (
		<div
			style={{
				maxWidth: "1400px",
				margin: "0 auto",
				padding: "0 24px",
				width: "100%",
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					position: "relative",
					minHeight: "calc(100vh - 60px)",
				}}
			>
				{/* Desktop Sticky Left Sidebar with distinct boundary */}
				<div
					className='docs-desktop-sidebar'
					style={{
						position: "sticky",
						top: "60px",
						height: "calc(100vh - 60px)",
						overflowY: "auto",
						alignSelf: "flex-start",
						borderRight: "1px solid var(--border-subtle)",
						backgroundColor: "var(--bg-dark)",
						marginRight: "40px",
						flexShrink: 0,
					}}
				>
					<DocsSidebar />
				</div>

				{/* Mobile Drawer Backdrop */}
				{mobileSidebarOpen && (
					<div
						onClick={() => setMobileSidebarOpen(false)}
						style={{
							position: "fixed",
							inset: 0,
							zIndex: 200,
							backgroundColor: "rgba(0, 0, 0, 0.6)",
							backdropFilter: "blur(4px)",
							WebkitBackdropFilter: "blur(4px)",
						}}
					/>
				)}

				{/* Mobile Drawer (Slide out from left matching catalog) */}
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						bottom: 0,
						width: "300px",
						maxWidth: "85vw",
						backgroundColor: "var(--bg-surface)",
						borderRight: "1px solid var(--border-subtle)",
						zIndex: 210,
						padding: "20px",
						display: "flex",
						flexDirection: "column",
						transform: mobileSidebarOpen
							? "translateX(0)"
							: "translateX(-100%)",
						transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
						overflowY: "auto",
						overscrollBehavior: "contain",
						visibility: mobileSidebarOpen ? "visible" : "hidden",
						pointerEvents: mobileSidebarOpen ? "auto" : "none",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "16px",
							paddingBottom: "12px",
							borderBottom: "1px solid var(--border-subtle)",
						}}
					>
						<span
							style={{
								fontSize: "15px",
								fontWeight: 650,
								color: "var(--text-main)",
							}}
						>
							Documentation
						</span>
						<button
							onClick={() => setMobileSidebarOpen(false)}
							className='btn-icon'
							style={{ width: "32px", height: "32px" }}
							aria-label='Close menu'
						>
							<X size={18} />
						</button>
					</div>
					<DocsSidebar onCloseMobile={() => setMobileSidebarOpen(false)} />
				</div>

				{/* Main Article Content */}
				<article
					className='docs-article'
					style={{
						flex: 1,
						minWidth: 0,
						paddingTop: "24px",
						paddingBottom: "80px",
					}}
				>
					{/* Sticky Mobile Sub-Menu (Sticky after main header, above breadcrumbs) */}
					<div className='docs-mobile-subnav'>
						<button
							id='docs-mobile-menu-trigger'
							onClick={() => setMobileSidebarOpen(true)}
							className='btn-secondary'
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "6px",
								padding: "5px 12px",
								borderRadius: "8px",
								cornerShape: "squircle",
								fontSize: "12px",
								fontWeight: 550,
								color: "var(--text-main)",
								cursor: "pointer",
							}}
						>
							<Menu size={14} />
							<span>Menu</span>
						</button>

						<span
							style={{
								fontSize: "12.5px",
								color: "var(--text-muted)",
								fontWeight: 500,
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								maxWidth: "200px",
							}}
						>
							{title}
						</span>
					</div>

					{/* Breadcrumbs Row */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "6px",
							fontSize: "13px",
							color: "var(--text-dim)",
							marginBottom: "16px",
						}}
					>
						<Link
							href='/docs'
							style={{ color: "var(--text-muted)", textDecoration: "none" }}
						>
							Docs
						</Link>
						<ChevronRight size={14} />
						<span style={{ color: "var(--cyan-primary)", fontWeight: 500 }}>
							{title}
						</span>
					</div>

					{/* Single Canonical Page Header */}
					<header style={{ marginBottom: "28px" }}>
						<h1
							style={{
								fontSize: "28px",
								fontWeight: 650,
								letterSpacing: "-0.025em",
								color: "var(--text-main)",
								margin: "0 0 8px 0",
								lineHeight: "1.25",
							}}
						>
							{title}
						</h1>
						{description && (
							<p
								style={{
									fontSize: "16px",
									lineHeight: "1.65",
									color: "var(--text-muted)",
									margin: 0,
								}}
							>
								{description}
							</p>
						)}
					</header>

					{/* Documentation Body (Markdown Content) */}
					<div className='docs-body'>{children}</div>

					{/* Edit on GitHub link */}
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							marginTop: "48px",
							paddingTop: "20px",
							borderTop: "1px solid var(--border-subtle)",
						}}
					>
						<a
							href={`https://github.com/nickfrostech/esvigy/edit/main/apps/website/src/docs/${docFile}`}
							target='_blank'
							rel='noreferrer'
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "7px",
								fontSize: "13px",
								color: "var(--text-dim)",
								textDecoration: "none",
								transition: "color 0.15s ease",
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.color = "var(--cyan-primary)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.color = "var(--text-dim)")
							}
						>
							<Edit3 size={14} />
							<span>Edit this page on GitHub</span>
							<ExternalLink size={12} style={{ opacity: 0.7 }} />
						</a>
					</div>

					{/* Prev / Next Pagination Footer */}
					<footer
						style={{
							display: "flex",
							justifyContent: "space-between",
							gap: "16px",
							marginTop: "24px",
							flexWrap: "wrap",
						}}
					>
						{prevItem ? (
							<Link
								href={`/docs/${prevItem.slug}`}
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "4px",
									padding: "14px 18px",
									borderRadius: "12px",
									backgroundColor: "var(--bg-surface)",
									border: "1px solid var(--border-subtle)",
									textDecoration: "none",
									flex: 1,
									minWidth: "160px",
									transition: "border-color 0.15s ease",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "6px",
										fontSize: "12px",
										color: "var(--text-dim)",
									}}
								>
									<ArrowLeft size={13} />
									<span>Previous</span>
								</div>
								<span
									style={{
										fontSize: "14px",
										fontWeight: 600,
										color: "var(--cyan-primary)",
									}}
								>
									{prevItem.title}
								</span>
							</Link>
						) : (
							<div style={{ flex: 1 }} />
						)}

						{nextItem && (
							<Link
								href={`/docs/${nextItem.slug}`}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-end",
									gap: "4px",
									padding: "14px 18px",
									borderRadius: "12px",
									backgroundColor: "var(--bg-surface)",
									border: "1px solid var(--border-subtle)",
									textDecoration: "none",
									flex: 1,
									minWidth: "160px",
									transition: "border-color 0.15s ease",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "6px",
										fontSize: "12px",
										color: "var(--text-dim)",
									}}
								>
									<span>Next</span>
									<ArrowRight size={13} />
								</div>
								<span
									style={{
										fontSize: "14px",
										fontWeight: 600,
										color: "var(--cyan-primary)",
									}}
								>
									{nextItem.title}
								</span>
							</Link>
						)}
					</footer>
				</article>

				{/* Right Side Table of Contents (Desktop only - fully sticky) */}
				{toc && toc.length > 0 && (
					<div
						className='docs-desktop-toc'
						style={{
							position: "sticky",
							top: "84px",
							alignSelf: "flex-start",
							maxHeight: "calc(100vh - 100px)",
							marginLeft: "36px",
							paddingTop: "24px",
							flexShrink: 0,
						}}
					>
						<TableOfContents items={toc} />
					</div>
				)}
			</div>
		</div>
	);
}
