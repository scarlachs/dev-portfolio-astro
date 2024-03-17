import * as React from "react";

import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/ts/utils";

type Themes = "light" | "dark" | "system";

const themes: React.SetStateAction<Themes>[] = ["light", "dark", "system"];

export const DarkModeToggle = () => {
	const [theme, setThemeState] = React.useState<Themes>("light");

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setThemeState(isDarkMode ? "dark" : "light");
	}, []);

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	let [visible, setVisible] = React.useState(false);

	const handleClickOutside = () => {
		setVisible(false);
	};
	const handleHeaderClick = (event: any) => {
		// do something

		event.stopPropagation();
	};

	const ref = useOutsideClick(handleClickOutside);

	return (
		<div className="relative" ref={ref}>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setVisible((visible) => !visible)}
			>
				<svg
					className="size-5 scale-100 motion-safe:transition-all dark:scale-0"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fillRule="evenodd"
						d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
						clipRule="evenodd"
					/>
				</svg>

				<svg
					className="absolute size-5 scale-0 motion-safe:transition-all dark:scale-100"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fillRule="evenodd"
						d="M11.7 2a10 10 0 1 0 9.8 13.3 1 1 0 0 0-1-1.3H20a8 8 0 0 1-7.6-10.6l.1-.4a1 1 0 0 0-.8-1Z"
						clipRule="evenodd"
					/>
				</svg>

				<span className="sr-only">Farbmodus umschalten</span>
			</Button>
			{visible && (
				<ul
					className={
						"absolute right-0 top-[calc(100%_+_4px)] z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-900/10 bg-slate-50 p-1 shadow-md shadow-slate-800/5 dark:border-slate-50/10 dark:bg-slate-950"
					}
				>
					{themes.map((theme) => {
						return (
							<li key={theme.toString()}>
								<button
									className="w-full rounded px-2 py-1.5 text-start text-sm capitalize hover:bg-slate-200 focus:bg-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 motion-safe:transition-colors dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:focus-visible:ring-slate-300"
									onClick={() => {
										setThemeState(theme);
										setVisible(false);
									}}
									type="button"
								>
									{theme.toString()}
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
