/** @format */

import { useState } from "react";
import { Highlight, themes, Prism } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { initPrismLanguages } from "./prism-setup";

interface CodeBlockProps {
	code: string;
	language?: string;
	filename?: string;
}

export function CodeBlock({
	code,
	language = "tsx",
	filename,
}: CodeBlockProps) {
	initPrismLanguages();
	const [copied, setCopied] = useState(false);
	const cleanCode = code.trim();

	const resolvedLanguage =
		Prism.languages && Prism.languages[language]
			? language
			: language === "svelte" || language === "vue" || language === "astro"
				? "markup"
				: language;


	const handleCopy = () => {
		navigator.clipboard.writeText(cleanCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div
			style={{
				margin: "18px 0",
				borderRadius: "14px",
				border: "1px solid var(--border-subtle)",
				backgroundColor: "#070b14",
				overflow: "hidden",
				boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
			}}
		>
			{/* Top bar with filename or language tag and Copy action */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "8px 16px",
					backgroundColor: "rgba(255,255,255,0.03)",
					borderBottom: "1px solid var(--border-subtle)",
					fontSize: "12px",
					fontFamily: "var(--font-mono)",
					color: "var(--text-dim)",
				}}
			>
				<span style={{ fontWeight: 500, color: "var(--text-muted)" }}>
					{filename || language.toUpperCase()}
				</span>
				<button
					onClick={handleCopy}
					aria-label='Copy code'
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: "6px",
						padding: "4px 8px",
						fontSize: "11px",
						color: copied ? "var(--cyan-primary)" : "var(--text-muted)",
						backgroundColor: copied
							? "rgba(0, 212, 255, 0.12)"
							: "rgba(255,255,255,0.05)",
						border: copied
							? "1px solid var(--cyan-primary)"
							: "1px solid rgba(255,255,255,0.1)",
						borderRadius: "6px",
						cursor: "pointer",
						transition: "all 0.15s ease",
					}}
				>
					{copied ? (
						<>
							<Check size={13} />
							<span>Copied!</span>
						</>
					) : (
						<>
							<Copy size={13} />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>

			{/* Syntax Highlighted Body */}
			<Highlight
				theme={themes.vsDark}
				code={cleanCode}
				language={resolvedLanguage as any}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre
						className={className}
						style={{
							...style,
							backgroundColor: "transparent",
							margin: 0,
							padding: "16px",
							overflowX: "auto",
							fontSize: "13.5px",
							lineHeight: "1.65",
							fontFamily: "var(--font-mono)",
						}}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								{tokens.length > 3 && (
									<span
										style={{
											display: "inline-block",
											width: "2em",
											color: "rgba(255,255,255,0.2)",
											userSelect: "none",
											fontSize: "12px",
										}}
									>
										{i + 1}
									</span>
								)}
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
}
