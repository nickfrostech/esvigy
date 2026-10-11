/** @format */

import type { SVGProps } from "react";

export interface MemyProps extends SVGProps<SVGSVGElement> {
	color?: string;
	secondaryColor?: string;
	animated?: boolean;
	className?: string;
}
