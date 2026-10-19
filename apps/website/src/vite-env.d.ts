/// <reference types="vite/client" />

declare module "*.mdx" {
	import type { ComponentType } from "react";
	const Component: ComponentType<any>;
	export default Component;
}

declare module "*.md" {
	import type { ComponentType } from "react";
	const Component: ComponentType<any>;
	export default Component;
}
