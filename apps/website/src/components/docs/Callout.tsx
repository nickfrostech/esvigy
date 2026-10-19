/** @format */

import React from "react";
import { Info, Lightbulb, AlertTriangle, AlertCircle } from "lucide-react";

type CalloutType = "note" | "tip" | "warning" | "important";

interface CalloutProps {
	type?: CalloutType;
	title?: string;
	children: React.ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
	const config: Record<
		CalloutType,
		{ icon: React.ReactNode; color: string; bg: string; border: string; defaultTitle: string }
	> = {
		note: {
			icon: <Info size={18} />,
			color: "var(--cyan-primary)",
			bg: "rgba(0, 212, 255, 0.06)",
			border: "rgba(0, 212, 255, 0.25)",
			defaultTitle: "Note",
		},
		tip: {
			icon: <Lightbulb size={18} />,
			color: "#10b981",
			bg: "rgba(16, 185, 129, 0.06)",
			border: "rgba(16, 185, 129, 0.25)",
			defaultTitle: "Tip",
		},
		important: {
			icon: <AlertCircle size={18} />,
			color: "#a855f7",
			bg: "rgba(168, 85, 247, 0.06)",
			border: "rgba(168, 85, 247, 0.25)",
			defaultTitle: "Important",
		},
		warning: {
			icon: <AlertTriangle size={18} />,
			color: "#f59e0b",
			bg: "rgba(245, 158, 11, 0.06)",
			border: "rgba(245, 158, 11, 0.25)",
			defaultTitle: "Warning",
		},
	};

	const current = config[type];

	return (
		<div
			style={{
				margin: "20px 0",
				padding: "16px 18px",
				borderRadius: "14px",
				backgroundColor: current.bg,
				borderLeft: `4px solid ${current.color}`,
				borderTop: `1px solid ${current.border}`,
				borderRight: `1px solid ${current.border}`,
				borderBottom: `1px solid ${current.border}`,
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					color: current.color,
					fontWeight: 600,
					fontSize: "14px",
					marginBottom: "6px",
				}}
			>
				{current.icon}
				<span>{title || current.defaultTitle}</span>
			</div>
			<div
				style={{
					fontSize: "14px",
					lineHeight: "1.6",
					color: "var(--text-muted)",
				}}
			>
				{children}
			</div>
		</div>
	);
}
