/** @format */

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import "./prism-setup";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

interface PackageManagerTabsProps {
	/**
	 * CLI action (e.g., "add EmptyBox" or "init")
	 */
	cliCommand?: string;
	/**
	 * Package install argument (e.g., "@esvigy/react" or "@esvigy/vue")
	 */
	installPackage?: string;
	/**
	 * Custom override per package manager if needed
	 */
	customCommands?: Partial<Record<PackageManager, string>>;
}

export function PackageManagerTabs({
	cliCommand,
	installPackage,
	customCommands,
}: PackageManagerTabsProps) {
	const [activePm, setActivePm] = useState<PackageManager>(() => {
		return (
			(localStorage.getItem("esvigy_preferred_pm") as PackageManager) || "pnpm"
		);
	});
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const handleStorage = () => {
			const pm = localStorage.getItem(
				"esvigy_preferred_pm",
			) as PackageManager;
			if (pm && ["pnpm", "npm", "yarn", "bun"].includes(pm)) {
				setActivePm(pm);
			}
		};
		window.addEventListener("esvigy_pm_change", handleStorage);
		return () => window.removeEventListener("esvigy_pm_change", handleStorage);
	}, []);

	const setPm = (pm: PackageManager) => {
		setActivePm(pm);
		localStorage.setItem("esvigy_preferred_pm", pm);
		window.dispatchEvent(new Event("esvigy_pm_change"));
	};

	const getCommand = (pm: PackageManager): string => {
		if (customCommands && customCommands[pm]) {
			return customCommands[pm]!;
		}

		if (cliCommand) {
			const sub = cliCommand === "add" ? "add" : cliCommand;
			switch (pm) {
				case "pnpm":
					return `pnpm dlx @esvigy/cli ${sub}`;
				case "npm":
					return `npx @esvigy/cli ${sub}`;
				case "yarn":
					return `yarn dlx @esvigy/cli ${sub}`;
				case "bun":
					return `bunx @esvigy/cli ${sub}`;
			}
		}

		if (installPackage) {
			switch (pm) {
				case "pnpm":
					return `pnpm add ${installPackage}`;
				case "npm":
					return `npm install ${installPackage}`;
				case "yarn":
					return `yarn add ${installPackage}`;
				case "bun":
					return `bun add ${installPackage}`;
			}
		}

		switch (pm) {
			case "pnpm":
				return `pnpm dlx @esvigy/cli add`;
			case "npm":
				return `npx @esvigy/cli add`;
			case "yarn":
				return `yarn dlx @esvigy/cli add`;
			case "bun":
				return `bunx @esvigy/cli add`;
		}
	};

	const currentCommand = getCommand(activePm);

	const handleCopy = () => {
		navigator.clipboard.writeText(currentCommand);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const managers: { key: PackageManager; label: string }[] = [
		{ key: "pnpm", label: "pnpm" },
		{ key: "npm", label: "npm" },
		{ key: "yarn", label: "yarn" },
		{ key: "bun", label: "bun" },
	];

	return (
		<div
			style={{
				margin: "18px 0",
				borderRadius: "14px",
				border: "1px solid var(--border-subtle)",
				backgroundColor: "#070b14",
				overflow: "hidden",
				boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
			}}
		>
			{/* Tab Header */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "rgba(255,255,255,0.03)",
					borderBottom: "1px solid var(--border-subtle)",
					padding: "0 12px",
				}}
			>
				<div style={{ display: "flex", gap: "2px" }}>
					{managers.map((m) => {
						const isActive = activePm === m.key;
						return (
							<button
								key={m.key}
								onClick={() => setPm(m.key)}
								style={{
									padding: "10px 14px",
									fontSize: "12px",
									fontWeight: isActive ? 600 : 400,
									fontFamily: "var(--font-mono)",
									color: isActive
										? "var(--cyan-primary)"
										: "var(--text-dim)",
									background: "transparent",
									border: "none",
									borderBottom: isActive
										? "2px solid var(--cyan-primary)"
										: "2px solid transparent",
									cursor: "pointer",
									transition: "all 0.15s ease",
								}}
							>
								{m.label}
							</button>
						);
					})}
				</div>

				<button
					onClick={handleCopy}
					aria-label='Copy command'
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

			{/* Syntax Highlighted Terminal Command Display */}
			<div
				style={{
					padding: "14px 18px",
					fontFamily: "var(--font-mono)",
					fontSize: "13.5px",
					overflowX: "auto",
				}}
			>
				<Highlight
					theme={themes.vsDark}
					code={currentCommand}
					language='bash'
				>
					{({ tokens, getTokenProps }) => (
						<pre
							style={{
								margin: 0,
								padding: 0,
								backgroundColor: "transparent",
								fontFamily: "var(--font-mono)",
								fontSize: "13.5px",
								lineHeight: "1.5",
								whiteSpace: "pre",
							}}
						>
							{tokens.map((line, i) => (
								<div key={i}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token })} />
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</div>
		</div>
	);
}

