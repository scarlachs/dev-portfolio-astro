import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

// hook from https://www.robinwieruch.de/react-hook-detect-click-outside-component/
export const useOutsideClick = (callback: () => void) => {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (!target) return;

			if (ref.current && !ref.current.contains(target)) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [ref]);

	return ref;
};
