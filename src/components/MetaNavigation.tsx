const metaNavigationData = ["Impressum", "Datenschutz"];

export const MetaNavigation = () => {
	return (
		<nav
			aria-label="Meta Navigation"
			className="md:border-l md:border-slate-400 md:pl-5 md:dark:border-slate-600"
		>
			<ul className="flex flex-col items-center gap-5 md:flex-row">
				{metaNavigationData.map((item) => (
					<li key={item}>
						<a
							className="flex py-2 text-sm text-slate-600 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 max-md:w-full"
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
