import {
	Accordion as AccordionWrapper,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export type AccordionData = {
	title: string;
	text: string;
};

type Props = {
	data: AccordionData[];
};

export const Accordion = ({ data }: Props) => {
	return (
		<section className="container mb-16 scroll-mt-20 md:mb-24" id="about">
			<AccordionWrapper
				type="single"
				collapsible
				className="mx-auto w-full max-w-2xl"
			>
				{data.map((item, i) => {
					return (
						<AccordionItem value={`item-${i}`} key={`item-${i}`}>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent>
								<p
									dangerouslySetInnerHTML={{
										__html: item.text,
									}}
								/>
							</AccordionContent>
						</AccordionItem>
					);
				})}
			</AccordionWrapper>
		</section>
	);
};
