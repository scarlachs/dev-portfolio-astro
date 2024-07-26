import {
	Accordion as AccordionWrapper,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type React from "react";

type AccordionData = {
	trigger: string;
	content: React.ReactNode;
};

const wendwebProjects = [
	{ link: "https://www.netfox.de", label: "NETFOX AG" },
	{ link: "https://www.alerds-stiftung.de", label: "Alerds-Stiftung" },
	{ link: "https://www.tricor.de", label: "TRICOR Packaging & Logistics AG" },
	{ link: "https://www.wendweb.de", label: "wendweb GmbH" },
	{
		link: "https://www.steinberg-gaerten.de",
		label: "STEINBERG.GÄRTEN e.K.",
	},
	{
		link: "https://www.schwartau-professional.de/beratung-service/individuelle-etiketten-fuer-portionsglaeser-konfigurieren#c51",
		label: "SCHWARTAUER WERKE GmbH & Co. KG - Individuelle Etiketten konfigurieren",
	},
];

const languages = ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"];

const contentManagementSystems = ["TYPO3", "Storyblok", "Wordpress"];

const frameworks = [
	"TailwindCSS",
	"Bootstrap",
	"SvelteKit",
	"Astro",
	"Next.js",
	"React",
];

const className = "mb-2 list-inside list-disc";

const accordionData: AccordionData[] = [
	{
		trigger: "Wie fing alles an?",
		content: (
			<>
				<p>
					Bereits 2010 lernte ich im Schulunterricht HTML und CSS
					kennen. Das war der Anfang einer jahrelangen Leidenschaft.
					Vier Jahre später habe ich für mein Hobby, die Fotografie,
					eine eigene Website erstellt. Dadurch sammelte ich
					zusätzlich erste Erfahrungen mit JavaScript und Bootstrap.
				</p>
				<p>
					2020 habe ich für meinen Bruder, der als Fitness Coach
					selbstständig ist, eine Website entwickelt und konnte meine
					Erfahrungen in Bootstrap und TypeScript vertiefen.
				</p>
				<p>Seit August 2021 bin ich als Frontend-Entwickler tätig.</p>
			</>
		),
	},
	{
		trigger: "Wie verbringe ich meine Freizeit?",
		content: (
			<>
				<p>
					In meiner Freizeit bin ich gerne sportlich aktiv. Sei es auf
					dem Fahrrad, bei einem Spaziergang zum Sonnenaufgang oder
					einer Wanderung in der Natur, ob am Berg oder See. Im See
					schwimme ich im Sommer und bade im Winter.
				</p>
				<p>
					Nachts beobachte ich den Nachthimmel und verliere mich in
					dem Moment.
				</p>
			</>
		),
	},
	{
		trigger: "Gibt es noch weitere Projekte?",
		content: (
			<>
				<p>
					Als Frontend-Entwickler von 08/2021 bis 06/2024 sind bei der
					wendweb GmbH in Hannover unter anderem folgende Projekte
					entstanden:
				</p>
				<ul className={className}>
					{wendwebProjects.map((project) => {
						return (
							<li key={project.link}>
								<a
									className="underline hover:no-underline"
									href={project.link}
									rel="noopener"
									target="_blank"
								>
									{project.label}
								</a>
							</li>
						);
					})}
				</ul>
				<p>
					Jedes Projekt wurde mit TYPO3, Bootstrap, SCSS und
					TypeScript umgesetzt.
				</p>
			</>
		),
	},
	{
		trigger: "Gibt es noch weitere Erfahrungen?",
		content: (
			<>
				<p className="font-bold">Sprachen</p>
				<ul className={className}>
					{languages.map((language) => {
						return <li key={language}>{language}</li>;
					})}
				</ul>
				<p className="font-bold">Frameworks & Libraries</p>
				<ul className={className}>
					{frameworks.map((framework) => {
						return <li key={framework}>{framework}</li>;
					})}
				</ul>
				<p className="font-bold">CMS</p>
				<ul className={className}>
					{contentManagementSystems.map((system) => {
						return <li key={system}>{system}</li>;
					})}
				</ul>
			</>
		),
	},
];

export const Accordion = () => {
	return (
		<section className="container mb-16 scroll-mt-20 md:mb-24" id="about">
			<AccordionWrapper
				type="single"
				collapsible
				className="mx-auto w-full max-w-2xl"
			>
				{accordionData.map((item, i) => {
					return (
						<AccordionItem value={`item-${i}`} key={`item-${i}`}>
							<AccordionTrigger>{item.trigger}</AccordionTrigger>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</AccordionWrapper>
		</section>
	);
};
