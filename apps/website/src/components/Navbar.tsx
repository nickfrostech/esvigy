/** @format */

import { useState, useEffect } from "react";
import { LogoEsvigy } from "@esvigy/react";

interface NavbarProps {
	activeTab: "home" | "catalog";
	setActiveTab: (tab: "home" | "catalog") => void;
	count: number;
	theme: "dark" | "light";
	setTheme: (theme: "dark" | "light") => void;
	onNavigateSection?: (sectionId: "guide" | "packages") => void;
}

export function Navbar({
	activeTab,
	setActiveTab,
	theme,
	setTheme,
	onNavigateSection,
}: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Lock body scroll when mobile menu drawer is open
	useEffect(() => {
		if (mobileMenuOpen) {
			const prevOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prevOverflow;
			};
		}
	}, [mobileMenuOpen]);

	const handleNavClick = (sectionId: "guide" | "packages") => {
		setMobileMenuOpen(false);
		if (activeTab !== "home") {
			setActiveTab("home");
			setTimeout(() => {
				onNavigateSection?.(sectionId);
			}, 50);
		} else {
			onNavigateSection?.(sectionId);
		}
	};

	return (
		<>
			<header
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					width: "100%",
					zIndex: 100,
					backgroundColor: "var(--bg-dark)",
					borderBottom: "1px solid var(--border-subtle)",
					padding: "12px 20px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "12px",
				}}
			>
				{/* Left: Logo, Name & In Progress badge */}
				<div
					onClick={() => {
						setActiveTab("home");
						setMobileMenuOpen(false);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						cursor: "pointer",
						userSelect: "none",
					}}
				>
					<div
						style={{
							width: "32px",
							height: "32px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<LogoEsvigy
							animated
							color={theme === "dark" ? "#00D4FF" : "#0284c7"}
							secondaryColor={theme === "dark" ? "#101726" : "#e2e8f0"}
							style={{ width: "32px", height: "32px" }}
						/>
					</div>
					<span
						style={{
							fontSize: "20px",
							fontWeight: 700,
							color: "var(--text-main)",
						}}
					>
						Esvigy
					</span>
					<span
						style={{
							fontSize: "11px",
							fontWeight: 500,
							padding: "2px 8px",
							borderRadius: "8px",
							cornerShape: "squircle",
							backgroundColor: "var(--bg-surface-hover)",
							color: "var(--cyan-primary)",
							border: "1px solid var(--border-subtle)",
							marginLeft: "2px",
						}}
					>
						In Progress
					</span>
				</div>

				{/* Desktop Right Navigation */}
				<div className='nav-desktop'>
					<button
						onClick={() => {
							setActiveTab("catalog");
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						style={{
							padding: "8px 14px",
							borderRadius: "10px",
							fontSize: "14px",
							fontWeight: 500,
							cursor: "pointer",
							border: "1px solid transparent",
							backgroundColor:
								activeTab === "catalog"
									? "var(--bg-surface-hover)"
									: "transparent",
							color:
								activeTab === "catalog"
									? "var(--cyan-primary)"
									: "var(--text-muted)",
							transition: "all 0.15s ease",
						}}
					>
						Illustrations
					</button>

					<button
						onClick={() => handleNavClick("guide")}
						style={{
							padding: "8px 14px",
							borderRadius: "10px",
							fontSize: "14px",
							fontWeight: 500,
							cursor: "pointer",
							border: "1px solid transparent",
							backgroundColor: "transparent",
							color: "var(--text-muted)",
							transition: "all 0.15s ease",
						}}
					>
						Guide
					</button>

					<button
						onClick={() => handleNavClick("packages")}
						style={{
							padding: "8px 14px",
							borderRadius: "10px",
							fontSize: "14px",
							fontWeight: 500,
							cursor: "pointer",
							border: "1px solid transparent",
							backgroundColor: "transparent",
							color: "var(--text-muted)",
							transition: "all 0.15s ease",
						}}
					>
						Packages
					</button>

					{/* Subtle Vertical Divider */}
					<div
						style={{
							width: "1px",
							height: "18px",
							backgroundColor: "var(--border-subtle)",
							margin: "0 6px",
						}}
					/>

					{/* Theme Switch - Just Icon */}
					<button
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className='btn-icon'
						title={
							theme === "dark"
								? "Switch to light mode"
								: "Switch to dark mode"
						}
						aria-label='Toggle color theme'
					>
						{theme === "dark" ? (
							<svg
								width='19'
								height='19'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle cx='12' cy='12' r='5' />
								<line x1='12' y1='1' x2='12' y2='3' />
								<line x1='12' y1='21' x2='12' y2='23' />
								<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
								<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
								<line x1='1' y1='12' x2='3' y2='12' />
								<line x1='21' y1='12' x2='23' y2='12' />
								<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
								<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
							</svg>
						) : (
							<svg
								width='19'
								height='19'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
							</svg>
						)}
					</button>

					{/* GitHub - Just Icon */}
					<a
						href='https://github.com/nickfrostech/esvigy'
						target='_blank'
						rel='noreferrer'
						className='btn-icon'
						title='GitHub Repository'
						aria-label='GitHub Repository'
					>
						<svg
							width='19'
							height='19'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
						</svg>
					</a>

					{/* npm - Just Icon */}
					<a
						href='https://www.npmjs.com/package/@esvigy/react'
						target='_blank'
						rel='noreferrer'
						className='btn-icon'
						title='npm package'
						aria-label='npm package'
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm2.96 4.723h14.554v14.554h-3.639v-10.915h-3.638v10.915H4.723V4.723z' />
						</svg>
					</a>
				</div>

				{/* Mobile Hamburger Button */}
				<button
					onClick={() => setMobileMenuOpen(true)}
					className='nav-mobile-toggle btn-icon'
					aria-label='Open navigation menu'
				>
					<svg
						width='22'
						height='22'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line x1='3' y1='6' x2='21' y2='6' />
						<line x1='3' y1='12' x2='21' y2='12' />
						<line x1='3' y1='18' x2='21' y2='18' />
					</svg>
				</button>
			</header>

			{/* Mobile Drawer Backdrop */}
			{mobileMenuOpen && (
				<div
					onClick={() => setMobileMenuOpen(false)}
					onWheel={(e) => e.stopPropagation()}
					onTouchMove={(e) => e.stopPropagation()}
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						backdropFilter: "blur(4px)",
						WebkitBackdropFilter: "blur(4px)",
						zIndex: 140,
						overscrollBehavior: "contain",
					}}
				/>
			)}

			{/* Mobile Right Sidebar Drawer */}
			<div
				style={{
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					width: "280px",
					maxWidth: "85vw",
					backgroundColor: "var(--bg-surface)",
					borderLeft: "1px solid var(--border-subtle)",
					zIndex: 150,
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "12px",
					transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
					transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
					overflowY: "auto",
					overscrollBehavior: "contain",
				}}
			>
				{/* Sidebar Header */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "8px",
						paddingBottom: "12px",
						borderBottom: "1px solid var(--border-subtle)",
					}}
				>
					<span
						style={{
							fontSize: "16px",
							fontWeight: 600,
							color: "var(--text-main)",
						}}
					>
						Menu
					</span>
					<button
						onClick={() => setMobileMenuOpen(false)}
						className='btn-icon'
						style={{ width: "32px", height: "32px" }}
						aria-label='Close menu'
					>
						✕
					</button>
				</div>

				{/* Navigation Links */}
				<button
					onClick={() => {
						setActiveTab("catalog");
						setMobileMenuOpen(false);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					style={{
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						fontSize: "14px",
						fontWeight: 500,
						textAlign: "left",
						cursor: "pointer",
						border: "1px solid var(--border-subtle)",
						backgroundColor:
							activeTab === "catalog"
								? "var(--bg-surface-hover)"
								: "transparent",
						color:
							activeTab === "catalog"
								? "var(--cyan-primary)"
								: "var(--text-main)",
					}}
				>
					Illustrations
				</button>

				<button
					onClick={() => handleNavClick("guide")}
					style={{
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						fontSize: "14px",
						fontWeight: 500,
						textAlign: "left",
						cursor: "pointer",
						border: "1px solid var(--border-subtle)",
						backgroundColor: "transparent",
						color: "var(--text-main)",
					}}
				>
					Guide
				</button>

				<button
					onClick={() => handleNavClick("packages")}
					style={{
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						fontSize: "14px",
						fontWeight: 500,
						textAlign: "left",
						cursor: "pointer",
						border: "1px solid var(--border-subtle)",
						backgroundColor: "transparent",
						color: "var(--text-main)",
					}}
				>
					Packages
				</button>

				<div
					style={{
						height: "1px",
						backgroundColor: "var(--border-subtle)",
						margin: "8px 0",
					}}
				/>

				{/* Theme Switch Row */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						backgroundColor: "var(--bg-dark)",
						border: "1px solid var(--border-subtle)",
					}}
				>
					<span
						style={{
							fontSize: "13px",
							color: "var(--text-main)",
							fontWeight: 500,
						}}
					>
						Theme ({theme === "dark" ? "Dark" : "Light"})
					</span>
					<button
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className='btn-icon'
						style={{ width: "32px", height: "32px" }}
						title={
							theme === "dark"
								? "Switch to light mode"
								: "Switch to dark mode"
						}
						aria-label='Toggle color theme'
					>
						{theme === "dark" ? (
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle cx='12' cy='12' r='5' />
								<line x1='12' y1='1' x2='12' y2='3' />
								<line x1='12' y1='21' x2='12' y2='23' />
								<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
								<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
								<line x1='1' y1='12' x2='3' y2='12' />
								<line x1='21' y1='12' x2='23' y2='12' />
								<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
								<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
							</svg>
						) : (
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
							</svg>
						)}
					</button>
				</div>

				{/* GitHub Link */}
				<a
					href='https://github.com/nickfrostech/esvigy'
					target='_blank'
					rel='noreferrer'
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						fontSize: "13px",
						fontWeight: 500,
						color: "var(--text-main)",
						textDecoration: "none",
						border: "1px solid var(--border-subtle)",
						backgroundColor: "var(--bg-dark)",
					}}
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
					</svg>
					<span>GitHub</span>
				</a>

				{/* npm Link */}
				<a
					href='https://www.npmjs.com/package/@esvigy/react'
					target='_blank'
					rel='noreferrer'
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px 14px",
						borderRadius: "10px",
						cornerShape: "squircle",
						fontSize: "13px",
						fontWeight: 500,
						color: "var(--text-main)",
						textDecoration: "none",
						border: "1px solid var(--border-subtle)",
						backgroundColor: "var(--bg-dark)",
					}}
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm2.96 4.723h14.554v14.554h-3.639v-10.915h-3.638v10.915H4.723V4.723z' />
					</svg>
					<span>npm Package</span>
				</a>
			</div>
		</>
	);
}
