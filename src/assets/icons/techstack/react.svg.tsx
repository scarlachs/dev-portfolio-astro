import type React from "react";
import { cn } from "@/ts/utils";

export function ReactIcon({ className }: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="-10.5 -9.45 21 18.9"
			fill="none"
			className={cn(className, "text-[#087EA4] dark:text-[#149ECA]")}
			aria-labelledby="title"
		>
			<title id="title">React</title>
			<circle cx={0} cy={0} r={2} fill="currentColor"></circle>
			<g stroke="currentColor" strokeWidth="1" fill="none">
				<ellipse rx={10} ry={4.5}></ellipse>
				<ellipse rx={10} ry={4.5} transform="rotate(60)"></ellipse>
				<ellipse rx={10} ry={4.5} transform="rotate(120)"></ellipse>
			</g>
		</svg>
	);
}
