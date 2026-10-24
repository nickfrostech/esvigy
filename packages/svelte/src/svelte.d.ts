/** @format */

declare module "*.svelte" {
	import type { Component } from "svelte";
	import type { EsvigyProps } from "./types";

	const component: Component<EsvigyProps>;
	export default component;
}
