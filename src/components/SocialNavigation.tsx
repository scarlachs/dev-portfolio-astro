import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/assets/icons/github.svg";
import { LinkedInIcon } from "@/assets/icons/linkedin.svg";
import { LINK_GITHUB, LINK_LINKEDIN } from "@/ts/constants";

type SocialNetwork = {
	name: string;
	url: string;
};

type SocialNetworks = SocialNetwork[];

const data: SocialNetworks = [
	{
		name: "GitHub",
		url: LINK_GITHUB,
	},
	{
		name: "LinkedIn",
		url: LINK_LINKEDIN,
	},
];

type SocialIcon = {
	name: string;
};

const className = "h-auto w-5";

const SocialIcon = ({ name }: SocialIcon) => {
	if (name === "GitHub") {
		return <GitHubIcon className={className} />;
	}

	if (name === "LinkedIn") {
		return <LinkedInIcon className={className} />;
	}
};

export const SocialNavigation = () => {
	return (
		<NavigationMenu
			aria-label="Social Navigation"
			className="max-md:mx-auto"
		>
			<NavigationMenuList>
				{data.map((item) => {
					return (
						<NavigationMenuItem key={item.name}>
							<Button
								variant="ghost"
								size="icon"
								rel="noopener"
								aria-label={item.name}
								asChild
							>
								<NavigationMenuLink href={item.url}>
									<SocialIcon name={item.name} />
								</NavigationMenuLink>
							</Button>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
