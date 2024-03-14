import { ExternalLinkIcon } from "@/assets/icons/external-link.svg";
import { GitHubIcon } from "@/assets/icons/github.svg";
import { BootstrapIcon } from "@/assets/icons/techstack/bootstrap.svg";
import { ScssIcon } from "@/assets/icons/techstack/scss.svg";
import { TailwindcssIcon } from "@/assets/icons/techstack/tailwindcss.svg";
import { HtmlIcon } from "@/assets/icons/techstack/html.svg";
import { CssIcon } from "@/assets/icons/techstack/css.svg";
import { JavascriptIcon } from "@/assets/icons/techstack/javascript.svg";
import { TypescriptIcon } from "@/assets/icons/techstack/typescript.svg";
import { WebpackIcon } from "@/assets/icons/techstack/webpack.svg";
import { AstroIcon } from "@/assets/icons/techstack/astro.svg";
import { SvelteKitIcon } from "@/assets/icons/techstack/sveltekit.svg";
import { ReactIcon } from "@/assets/icons/techstack/react.svg";
import { Typo3Icon } from "@/assets/icons/techstack/typo3.svg";
import { StoryblokIcon } from "@/assets/icons/techstack/storyblok.svg";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";
import { className } from "@/ts/constants";

type stack =
	| "html"
	| "css"
	| "tailwindcss"
	| "bootstrap"
	| "scss"
	| "javascript"
	| "typescript"
	| "sveltekit"
	| "webpack"
	| "astro"
	| "react"
	| "typo3"
	| "storyblok";

type GitHub = {
	link: string | undefined;
};

type TechStack = {
	tech: stack[];
};

const StackIcons = ({ tech }: TechStack) => {
	const className = "size-7";

	const items: ReactNode[] = [];

	tech.forEach((item: stack) => {
		if (item === "scss") {
			items.push(<ScssIcon className={className} key={item} />);
		}
		if (item === "bootstrap") {
			items.push(<BootstrapIcon className={className} key={item} />);
		}
		if (item === "tailwindcss") {
			items.push(<TailwindcssIcon className={className} key={item} />);
		}
		if (item === "html") {
			items.push(<HtmlIcon className={className} key={item} />);
		}
		if (item === "css") {
			items.push(<CssIcon className={className} key={item} />);
		}
		if (item === "javascript") {
			items.push(<JavascriptIcon className={className} key={item} />);
		}
		if (item === "typescript") {
			items.push(<TypescriptIcon className={className} key={item} />);
		}
		if (item === "sveltekit") {
			items.push(<SvelteKitIcon className={className} key={item} />);
		}
		if (item === "webpack") {
			items.push(<WebpackIcon className={className} key={item} />);
		}
		if (item === "astro") {
			items.push(<AstroIcon className={className} key={item} />);
		}
		if (item === "react") {
			items.push(<ReactIcon className={className} key={item} />);
		}
		if (item === "typo3") {
			items.push(<Typo3Icon className={className} key={item} />);
		}
		if (item === "storyblok") {
			items.push(<StoryblokIcon className={className} key={item} />);
		}
	});

	return (
		<ul className="mb-2.5 flex gap-3">
			{items.map((item, i) => {
				return <li key={i}>{item}</li>;
			})}
		</ul>
	);
};

const GitHubButton = ({ link }: GitHub) => {
	if (link) {
		return (
			<Button variant="secondary" asChild rel="noopener">
				<a href={link}>
					Code ansehen
					<GitHubIcon className={className.buttonIcon} />
				</a>
			</Button>
		);
	}

	return false;
};

export type TextItem = {
	i?: number;
	title: string;
	copy: string;
	website: string;
	github?: string;
	usedStack: stack[];
};

type Props = {
	data: TextItem;
	index: number;
};

export const ProjectText = ({ data, index }: Props) => {
	return (
		<div
			className={
				index % 2 === 1 ? "order-2 md:pe-16" : "max-md:order-2 md:ps-16"
			}
		>
			<StackIcons tech={data.usedStack} />

			<h2 className="text-2xl font-bold md:text-3xl">{data.title}</h2>
			<p className="mt-2.5 text-balance">{data.copy}</p>

			<ButtonGroup className="mt-5">
				<Button asChild rel="noopener" key="website">
					<a href={data.website} target="_blank">
						Projekt ansehen
						<ExternalLinkIcon className={className.buttonIcon} />
					</a>
				</Button>
				<GitHubButton link={data.github} key="github" />
			</ButtonGroup>
		</div>
	);
};
