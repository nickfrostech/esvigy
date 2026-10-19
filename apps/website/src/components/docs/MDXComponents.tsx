/** @format */

import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import { PackageManagerTabs } from "./PackageManagerTabs";
import "./prism-setup";

function createSlug(text: string): string {
	return String(text)
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export const mdxComponents = {
	h1: ({ children, ...props }: any) => (
		<h1
			style={{
				fontSize: "30px",
				fontWeight: 650,
				letterSpacing: "-0.025em",
				color: "var(--text-main)",
				marginTop: "0",
				marginBottom: "14px",
				lineHeight: "1.3",
			}}
			{...props}
		>
			{children}
		</h1>
	),
	h2: ({ children, ...props }: any) => {
		const text = typeof children === "string" ? children : "";
		const id = props.id || createSlug(text);
		return (
			<h2
				id={id}
				style={{
					fontSize: "21px",
					fontWeight: 600,
					letterSpacing: "-0.02em",
					color: "var(--text-main)",
					marginTop: "36px",
					marginBottom: "12px",
					display: "flex",
					alignItems: "center",
					gap: "8px",
				}}
				{...props}
			>
				<a
					href={`#${id}`}
					style={{
						color: "inherit",
						textDecoration: "none",
					}}
				>
					{children}
				</a>
			</h2>
		);
	},
	h3: ({ children, ...props }: any) => {
		const text = typeof children === "string" ? children : "";
		const id = props.id || createSlug(text);
		return (
			<h3
				id={id}
				style={{
					fontSize: "17px",
					fontWeight: 550,
					color: "var(--text-main)",
					marginTop: "24px",
					marginBottom: "10px",
				}}
				{...props}
			>
				<a
					href={`#${id}`}
					style={{
						color: "inherit",
						textDecoration: "none",
					}}
				>
					{children}
				</a>
			</h3>
		);
	},
	p: ({ children, ...props }: any) => (
		<p
			style={{
				fontSize: "16px",
				lineHeight: "1.75",
				color: "var(--text-main)",
				opacity: 0.92,
				margin: "14px 0",
			}}
			{...props}
		>
			{children}
		</p>
	),
	ul: ({ children, ...props }: any) => (
		<ul
			style={{
				margin: "12px 0 18px 20px",
				paddingLeft: "8px",
				fontSize: "15.5px",
				lineHeight: "1.75",
				color: "var(--text-main)",
				opacity: 0.92,
			}}
			{...props}
		>
			{children}
		</ul>
	),
	ol: ({ children, ...props }: any) => (
		<ol
			style={{
				margin: "12px 0 18px 20px",
				paddingLeft: "8px",
				fontSize: "15.5px",
				lineHeight: "1.75",
				color: "var(--text-main)",
				opacity: 0.92,
			}}
			{...props}
		>
			{children}
		</ol>
	),
	li: ({ children, ...props }: any) => (
		<li style={{ marginBottom: "8px" }} {...props}>
			{children}
		</li>
	),
	hr: () => (
		<hr
			style={{
				margin: "36px 0",
				border: "none",
				borderTop: "1px solid var(--border-subtle)",
			}}
		/>
	),
	blockquote: ({ children }: any) => (
		<blockquote
			style={{
				margin: "24px 0",
				padding: "14px 20px",
				backgroundColor: "rgba(255, 255, 255, 0.03)",
				borderLeft: "3px solid var(--cyan-primary)",
				borderRadius: "0 10px 10px 0",
				color: "var(--text-main)",
				fontSize: "15px",
				lineHeight: "1.65",
				fontStyle: "italic",
			}}
		>
			{children}
		</blockquote>
	),
	table: ({ children, ...props }: any) => (
		<div
			style={{
				overflowX: "auto",
				margin: "28px 0",
				borderRadius: "14px",
				border: "1px solid var(--border-subtle)",
				backgroundColor: "var(--bg-surface)",
				boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
			}}
		>
			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					fontSize: "14.5px",
					textAlign: "left",
				}}
				{...props}
			>
				{children}
			</table>
		</div>
	),
	th: ({ children, ...props }: any) => (
		<th
			style={{
				padding: "16px 20px",
				backgroundColor: "rgba(255, 255, 255, 0.04)",
				borderBottom: "1px solid var(--border-subtle)",
				fontWeight: 600,
				color: "var(--text-main)",
				letterSpacing: "0.01em",
			}}
			{...props}
		>
			{children}
		</th>
	),
	td: ({ children, ...props }: any) => (
		<td
			style={{
				padding: "16px 20px",
				borderBottom: "1px solid var(--border-subtle)",
				color: "var(--text-main)",
				opacity: 0.9,
				lineHeight: "1.6",
			}}
			{...props}
		>
			{children}
		</td>
	),
	a: ({ href, children, ...props }: any) => (
		<a
			href={href}
			style={{
				color: "var(--cyan-primary)",
				textDecoration: "underline",
				textUnderlineOffset: "3px",
			}}
			{...props}
		>
			{children}
		</a>
	),
	strong: ({ children, ...props }: any) => (
		<strong style={{ fontWeight: 600, color: "var(--text-main)" }} {...props}>
			{children}
		</strong>
	),
	code: ({ className, children, ...props }: any) => {
		const isInline = !className;
		if (isInline) {
			return (
				<code
					style={{
						fontFamily: "var(--font-mono)",
						fontSize: "13px",
						padding: "2px 7px",
						borderRadius: "6px",
						backgroundColor: "rgba(255, 255, 255, 0.08)",
						color: "var(--cyan-primary)",
						border: "1px solid rgba(255, 255, 255, 0.1)",
					}}
					{...props}
				>
					{children}
				</code>
			);
		}

		const match = /language-(\w+)/.exec(className || "");
		const language = match ? match[1] : "bash";
		const codeText = String(children).replace(/\n$/, "");

		return <CodeBlock code={codeText} language={language} />;
	},
	pre: ({ children }: any) => {
		return <>{children}</>;
	},
	Callout,
	PackageManagerTabs,
	CodeBlock,
};
