import type React from "react";

export const ButtonGroup = ({
	children,
	className,
}: React.HTMLAttributes<HTMLElement>) => {
	return (
		<div
			className={`flex gap-5 flex-wrap${className ? " " + className : ""}`}
		>
			{children}
		</div>
	);
};
