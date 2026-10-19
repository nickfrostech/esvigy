/** @format */

import { useState } from "react";
import { Link } from "wouter";
import * as EsvigyComponents from "@esvigy/react";

interface HeroSectionProps {
	onExploreCatalog: () => void;
	onSearch: (query: string) => void;
	onSelectIllustrationName: (name: string) => void;
	theme: "dark" | "light";
}

export function HeroSection({
	onExploreCatalog,
	onSearch,
	onSelectIllustrationName,
}: HeroSectionProps) {
	const [heroSearchInput, setHeroSearchInput] = useState("");

	const handleHeroSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (heroSearchInput.trim()) {
			onSearch(heroSearchInput.trim());
		} else {
			onExploreCatalog();
		}
	};

	const secondaryColor = "var(--illustration-secondary)";

	return (
		<section
			style={{
				position: "relative",
				minHeight: "calc(100vh - 70px)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				maxWidth: "1140px",
				margin: "0 auto",
				width: "100%",
				padding: "50px 24px 60px 24px",
			}}
		>
			{/* Flying SVGs around the main texts - Transparent, Larger, Positioned close to headline & content */}
			{/* Top-Left: ActionUpload (action category) */}
			<div
				className='hero-floating-svg animate-float-hero-1'
				onClick={() => onSelectIllustrationName("ActionUpload")}
				title='ActionUpload'
				style={{
					position: "absolute",
					top: "8%",
					left: "4%",
					width: "150px",
					height: "150px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.ActionUpload
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Mid-Left: WomanLaptop (character category) */}
			<div
				className='hero-floating-svg animate-float-hero-2'
				onClick={() => onSelectIllustrationName("WomanLaptop")}
				title='WomanLaptop'
				style={{
					position: "absolute",
					top: "42%",
					left: "2%",
					width: "165px",
					height: "165px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.WomanLaptop
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Bottom-Left: StatusOffline (status category) */}
			<div
				className='hero-floating-svg animate-float-hero-3'
				onClick={() => onSelectIllustrationName("StatusOffline")}
				title='StatusOffline'
				style={{
					position: "absolute",
					bottom: "10%",
					left: "6%",
					width: "145px",
					height: "145px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.StatusOffline
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Top-Right: NotFoundRobot (error / notfound category) */}
			<div
				className='hero-floating-svg animate-float-hero-2'
				onClick={() => onSelectIllustrationName("NotFoundRobot")}
				title='NotFoundRobot'
				style={{
					position: "absolute",
					top: "6%",
					right: "4%",
					width: "155px",
					height: "155px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.NotFoundRobot
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Mid-Right: EmptyCart (empty category) */}
			<div
				className='hero-floating-svg animate-float-hero-1'
				onClick={() => onSelectIllustrationName("EmptyCart")}
				title='EmptyCart'
				style={{
					position: "absolute",
					top: "40%",
					right: "2%",
					width: "145px",
					height: "145px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.EmptyCart
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Bottom-Right: SearchLoading (search category) */}
			<div
				className='hero-floating-svg animate-float-hero-3'
				onClick={() => onSelectIllustrationName("SearchLoading")}
				title='SearchLoading'
				style={{
					position: "absolute",
					bottom: "10%",
					right: "6%",
					width: "145px",
					height: "145px",
					zIndex: 1,
				}}
			>
				<EsvigyComponents.SearchLoading
					animated
					color='var(--cyan-primary)'
					secondaryColor={secondaryColor}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>

			{/* Central Hero Content Container */}
			<div style={{ maxWidth: "800px", zIndex: 2 }}>
				{/* Hero Title */}
				<h1
					style={{
						fontSize: "clamp(36px, 5.5vw, 58px)",
						fontWeight: 600,
						letterSpacing: "-1.2px",
						lineHeight: 1.15,
						margin: "0 0 20px 0",
						color: "var(--text-main)",
					}}
				>
					UI illustrations as simple and lightweight as{" "}
					<span style={{ color: "var(--cyan-primary)" }}>icons.</span>
				</h1>

				{/* Hero Subtitle */}
				<p
					style={{
						fontSize: "clamp(16px, 1.8vw, 19px)",
						color: "var(--text-muted)",
						fontWeight: 400,
						lineHeight: 1.6,
						maxWidth: "640px",
						margin: "0 auto 36px auto",
					}}
				>
					The open-source, framework-agnostic illustration collection.
					Treat UI empty states and error screens as lightweight, typed
					components with dynamic two-tone colors and zero-JS CSS
					animations.
				</p>

				{/* Hero CTAs: View all illustrations, Get started, GitHub */}
				<div
					style={{
						display: "flex",
						gap: "14px",
						flexWrap: "wrap",
						justifyContent: "center",
						marginBottom: "28px",
					}}
				>
					<button
						onClick={onExploreCatalog}
						className='btn-primary'
						style={{ fontSize: "14px", padding: "12px 24px" }}
					>
						<span>View All Illustrations</span>
					</button>
					<Link
						href='/docs'
						className='btn-secondary'
						style={{
							fontSize: "14px",
							padding: "12px 22px",
							textDecoration: "none",
						}}
					>
						<span>Get Started</span>
					</Link>
					<a
						href='https://github.com/nickfrostech/esvigy'
						target='_blank'
						rel='noreferrer'
						className='btn-secondary'
						style={{ fontSize: "14px", padding: "12px 20px" }}
					>
						<span>GitHub</span>
					</a>
				</div>

				{/* Search Bar directly below CTAs */}
				<form
					onSubmit={handleHeroSearchSubmit}
					style={{
						width: "100%",
						maxWidth: "480px",
						margin: "0 auto",
						display: "flex",
						alignItems: "center",
						backgroundColor: "var(--bg-surface)",
						border: "1px solid var(--border-subtle)",
						borderRadius: "16px",
						cornerShape: "squircle",
						padding: "6px 8px 6px 16px",
						transition: "border-color 0.2s ease",
					}}
				>
					<svg
						width='17'
						height='17'
						viewBox='0 0 24 24'
						fill='none'
						stroke='var(--text-muted)'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						style={{ marginRight: "10px", flexShrink: 0 }}
					>
						<circle cx='11' cy='11' r='8' />
						<line x1='21' y1='21' x2='16.65' y2='16.65' />
					</svg>
					<input
						type='text'
						placeholder='Search illustrations (e.g. 404, upload, empty, user...)'
						value={heroSearchInput}
						onChange={(e) => setHeroSearchInput(e.target.value)}
						style={{
							flex: 1,
							background: "transparent",
							border: "none",
							outline: "none",
							color: "var(--text-main)",
							fontSize: "14px",
							fontWeight: 400,
						}}
					/>
					<button
						type='submit'
						style={{
							background: "var(--bg-surface-hover)",
							border: "1px solid var(--border-subtle)",
							color: "var(--text-main)",
							borderRadius: "10px",
							cornerShape: "squircle",
							padding: "7px 14px",
							fontSize: "13px",
							fontWeight: 500,
							cursor: "pointer",
							transition: "all 0.15s ease",
						}}
					>
						Search
					</button>
				</form>
			</div>
		</section>
	);
}
