import { ButtonGroup } from "../components/ButtonGroup";
import { Button } from "../components/ui/button";
import type { ReactNode } from "react";

export type IntroData = {
	title: string;
	copy: string;
	buttons: Array<{
		label: string;
		link: string;
		variant?: "default" | "outline" | "secondary" | "ghost" | "link";
	}>;
};

type Image = {
	children: ReactNode;
};

type Text = {
	data: IntroData;
};

type Props = Image & Text;

const Text = ({ data }: Text) => {
	return (
		<div>
			<h1 className="mb-5 text-4xl font-bold max-md:pe-24 lg:text-5xl">
				{data.title}
			</h1>
			<p className="mb-10 text-lg leading-7 sm:max-lg:w-10/12 xl:w-11/12">
				{data.copy}
			</p>

			<ButtonGroup>
				{data.buttons.map((item) => {
					return (
						<Button
							asChild
							variant={item.variant ? item.variant : undefined}
						>
							<a href={item.link}>{item.label}</a>
						</Button>
					);
				})}
			</ButtonGroup>
		</div>
	);
};

const Image = ({ children }: Image) => {
	return (
		<div className="overflow-hidden max-md:absolute max-md:right-0 max-md:top-0 max-md:size-20 max-md:rounded-full min-[520px]:max-md:-translate-y-1/2 md:ps-20">
			{children}
		</div>
	);
};

export const Intro = ({ data, children }: Props) => {
	return (
		<section className="container mb-20 pt-16 md:mb-24">
			<div className="relative md:grid md:grid-cols-2 md:items-center md:gap-10">
				<Text data={data} />
				<Image>{children}</Image>
			</div>
		</section>
	);
};
