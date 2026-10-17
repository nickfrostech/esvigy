<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";
import {
	ActionCreate,
	ActionDownload,
	ActionUpload,
	EmptyCart,
	GamePad,
	Search,
	SecurityLock,
	StatusSuccess,
	StatusFail,
	Wallet,
} from "../src";

const animated = ref(true);
const color = ref("#06b6d4");
const secondaryColor = ref("#1e293b");
const isDark = ref(true);

const presets = [
	{ name: "Cyan Pop", primary: "#06b6d4", secondary: "#1e293b" },
	{ name: "Emerald", primary: "#10b981", secondary: "#064e3b" },
	{ name: "Purple Neon", primary: "#a855f7", secondary: "#3b0764" },
	{ name: "Sunset", primary: "#f97316", secondary: "#431407" },
	{ name: "Rose", primary: "#f43f5e", secondary: "#4c0519" },
];

function applyPreset(preset: (typeof presets)[0]) {
	color.value = preset.primary;
	secondaryColor.value = preset.secondary;
}

const illustrations = [
	{ name: "Search", component: Search },
	{ name: "ActionCreate", component: ActionCreate },
	{ name: "ActionDownload", component: ActionDownload },
	{ name: "ActionUpload", component: ActionUpload },
	{ name: "StatusSuccess", component: StatusSuccess },
	{ name: "StatusFail", component: StatusFail },
	{ name: "EmptyCart", component: EmptyCart },
	{ name: "SecurityLock", component: SecurityLock },
	{ name: "GamePad", component: GamePad },
	{ name: "Wallet", component: Wallet },
];
</script>

<template>
	<div class="playground" :class="{ light: !isDark }">
		<header class="header">
			<div class="header-inner">
				<div>
					<h1>@esvigy/vue <span class="badge">Playground</span></h1>
					<p class="subtitle">
						Manual verification sandbox — test two-tone theming, props &
						micro-animations live.
					</p>
				</div>
				<button class="mode-toggle" @click="isDark = !isDark">
					{{ isDark ? "☀️ Light Mode" : "🌙 Dark Mode" }}
				</button>
			</div>

			<!-- Controls Panel -->
			<div class="controls-panel">
				<div class="control-group">
					<label class="toggle-label">
						<input type="checkbox" v-model="animated" />
						<span class="toggle-text"
							>Micro-Animations (<code>:animated="{{ animated }}"</code
							>)</span
						>
					</label>
				</div>

				<div class="control-group">
					<label>Primary (<code>color</code>):</label>
					<input type="color" v-model="color" class="color-picker" />
					<span class="hex-tag">{{ color }}</span>
				</div>

				<div class="control-group">
					<label>Secondary (<code>secondaryColor</code>):</label>
					<input
						type="color"
						v-model="secondaryColor"
						class="color-picker"
					/>
					<span class="hex-tag">{{ secondaryColor }}</span>
				</div>

				<div class="control-group presets">
					<label>Palettes:</label>
					<button
						v-for="p in presets"
						:key="p.name"
						class="preset-btn"
						@click="applyPreset(p)"
					>
						<span class="dot" :style="{ background: p.primary }"></span>
						{{ p.name }}
					</button>
				</div>
			</div>
		</header>

		<main class="grid-container">
			<div v-for="item in illustrations" :key="item.name" class="card">
				<div class="card-preview">
					<component
						:is="item.component"
						:animated="animated"
						:color="color"
						:secondary-color="secondaryColor"
						class="illustration-svg"
					/>
				</div>
				<div class="card-footer">
					<span class="component-name">&lt;{{ item.name }} /&gt;</span>
				</div>
			</div>
		</main>
	</div>
</template>

<style scoped>
.playground {
	min-height: 100vh;
	padding: 2rem;
	background: #090d16;
	color: #f1f5f9;
	box-sizing: border-box;
}

.playground.light {
	background: #f8fafc;
	color: #0f172a;
}

.header {
	max-width: 1200px;
	margin: 0 auto 2.5rem;
}

.header-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
}

h1 {
	font-size: 1.85rem;
	margin: 0 0 0.4rem;
	font-weight: 800;
	letter-spacing: -0.02em;
}

.badge {
	font-size: 0.8rem;
	font-weight: 700;
	text-transform: uppercase;
	background: #06b6d4;
	color: #000;
	padding: 0.2rem 0.55rem;
	border-radius: 9999px;
	vertical-align: middle;
	margin-left: 0.5rem;
}

.subtitle {
	margin: 0;
	color: #94a3b8;
	font-size: 0.95rem;
}

.playground.light .subtitle {
	color: #64748b;
}

.mode-toggle {
	background: #1e293b;
	color: #f1f5f9;
	border: 1px solid #334155;
	padding: 0.5rem 0.9rem;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.85rem;
	transition: all 0.2s;
}

.playground.light .mode-toggle {
	background: #e2e8f0;
	color: #0f172a;
	border-color: #cbd5e1;
}

.controls-panel {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	align-items: center;
	background: #111827;
	border: 1px solid #1f2937;
	padding: 1rem 1.25rem;
	border-radius: 12px;
}

.playground.light .controls-panel {
	background: #ffffff;
	border-color: #e2e8f0;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.control-group {
	display: flex;
	align-items: center;
	gap: 0.6rem;
	font-size: 0.88rem;
}

.toggle-label {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	user-select: none;
	font-weight: 600;
}

.color-picker {
	width: 32px;
	height: 32px;
	border-radius: 6px;
	border: none;
	cursor: pointer;
	background: transparent;
}

.hex-tag {
	font-family: monospace;
	font-size: 0.8rem;
	color: #94a3b8;
}

.presets {
	margin-left: auto;
}

.preset-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	background: #1e293b;
	border: 1px solid #334155;
	color: #e2e8f0;
	font-size: 0.78rem;
	padding: 0.3rem 0.6rem;
	border-radius: 6px;
	cursor: pointer;
	margin-left: 0.3rem;
	transition: background 0.15s;
}

.playground.light .preset-btn {
	background: #f1f5f9;
	border-color: #cbd5e1;
	color: #1e293b;
}

.preset-btn:hover {
	background: #334155;
}

.dot {
	width: 9px;
	height: 9px;
	border-radius: 50%;
}

.grid-container {
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 1.5rem;
}

.card {
	background: #111827;
	border: 1px solid #1f2937;
	border-radius: 14px;
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition:
		transform 0.2s,
		border-color 0.2s;
}

.playground.light .card {
	background: #ffffff;
	border-color: #e2e8f0;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.card:hover {
	transform: translateY(-3px);
	border-color: #38bdf8;
}

.card-preview {
	width: 100%;
	aspect-ratio: 4 / 3;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 0.75rem;
}

.illustration-svg {
	width: 100%;
	max-height: 180px;
}

.card-footer {
	width: 100%;
	border-top: 1px solid #1f2937;
	padding-top: 0.75rem;
	text-align: center;
}

.playground.light .card-footer {
	border-color: #f1f5f9;
}

.component-name {
	font-family: monospace;
	font-size: 0.85rem;
	font-weight: 600;
	color: #38bdf8;
}
</style>
