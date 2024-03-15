import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

type MainNavigationItem = {
	title: string;
	href: string;
};

type MainNavigationItems = MainNavigationItem[];

const mainNavigationData: MainNavigationItems = [
	{
		title: "Projekte",
		href: "#projects",
	},
	{
		title: "Über mich",
		href: "#about",
	},
	{
		title: "Kontakt",
		href: "#contact",
	},
];

export const MainNavigation = () => {
	return (
		<NavigationMenu aria-label="Main Navigation" className="max-sm:hidden">
			<NavigationMenuList>
				{mainNavigationData.map((item, i) => {
					return (
						<NavigationMenuItem key={i}>
							<Button variant="ghost" asChild>
								<NavigationMenuLink href={item.href}>
									{item.title}
								</NavigationMenuLink>
							</Button>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
