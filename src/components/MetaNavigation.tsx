const metaNavigationData = ["Impressum", "Datenschutz"];

export const MetaNavigation = () => {
	return (
		<nav aria-label="Meta Navigation" className="md:pl-4">
			<ul className="flex flex-col items-center gap-2 md:flex-row md:gap-1">
				{metaNavigationData.map((item) => (
					<li key={item}>
						<a
							className="flex rounded-md p-2 text-sm text-slate-600 transition-colors hover:text-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:text-slate-400 dark:hover:text-slate-200 dark:focus-visible:ring-slate-300 max-md:w-full"
							href={`/${item.toLowerCase()}`}
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
