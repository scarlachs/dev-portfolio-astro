import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

type MainNavigationItem = {
	title: string;
	key: string;
};

type MainNavigationItems = MainNavigationItem[];

const mainNavigationData: MainNavigationItems = [
	{
		title: "Projekte",
		key: "projects",
	},
	{
		title: "Über mich",
		key: "about",
	},
	{
		title: "Kontakt",
		key: "contact",
	},
];

export const MainNavigation = () => {
	return (
		<NavigationMenu aria-label="Main Navigation" className="max-sm:hidden">
			<NavigationMenuList>
				{mainNavigationData.map((item) => {
					return (
						<NavigationMenuItem key={item.key}>
							<Button variant="ghost" asChild>
								<NavigationMenuLink href={`/#${item.key}`}>
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
