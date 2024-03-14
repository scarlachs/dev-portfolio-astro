import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export const ButtonGroup = ({ children, className }: Props) => {
	return (
		<div
			className={`flex gap-5 flex-wrap${className ? " " + className : ""}`}
		>
			{children}
		</div>
	);
};
