import { cn } from "@/ts/utils";

export function ShadcnIcon({ className }: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={256}
			height={256}
			viewBox="0 0 256 256"
			fill="none"
			className={cn(className, "text-zinc-950 dark:text-zinc-50")}
			aria-labelledby="title"
		>
			<title id="title">shadcn/ui</title>
			<line
				x1={208}
				y1={128}
				x2={128}
				y2={208}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={16}
			></line>
			<line
				x1={192}
				y1={40}
				x2={40}
				y2={192}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={16}
			></line>
		</svg>
	);
}
