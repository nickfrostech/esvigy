/** @format */

import { useState } from "react";
import {
	NotFound,
	EmptyCart,
	WomanLaptopSitting,
} from "@memy/react";

export function App() {
	const [animated, setAnimated] = useState(true);
	const [color, setColor] = useState("#00D4FF");
	const [secondaryColor, setSecondaryColor] = useState("#010524");

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				gap: "24px",
			}}
		>
			<h1>Memy Local Test Playground</h1>

			{/* Your Local Package Component */}
			<div
				style={{
					background: "#1e293b",
					padding: "24px",
					borderRadius: "16px",
					display: "flex",
					gap: "20px",
				}}
			>
				<NotFound
					animated={animated}
					color={color}
					secondaryColor={secondaryColor}
					style={{
						width: "100%",
						height: "100%",
						border: "1px solid red",
					}}
				/>
				<EmptyCart
					animated={animated}
					color={color}
					secondaryColor={secondaryColor}
					style={{
						width: "100%",
						height: "100%",
						border: "1px solid red",
					}}
				/>
				<WomanLaptopSitting
					animated={animated}
					color={color}
					secondaryColor={secondaryColor}
					style={{
						width: "100%",
						height: "100%",
						border: "1px solid red",
					}}
				/>
			</div>

			{/* Controls */}
			<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
				<label>
					<input
						type='checkbox'
						checked={animated}
						onChange={(e) => setAnimated(e.target.checked)}
					/>{" "}
					Animated
				</label>

				<label>
					Primary Color:{" "}
					<input
						type='color'
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</label>

				<label>
					Secondary Color:{" "}
					<input
						type='color'
						value={secondaryColor}
						onChange={(e) => setSecondaryColor(e.target.value)}
					/>
				</label>
			</div>
		</div>
	);
}
