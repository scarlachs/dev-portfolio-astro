import { LinkedInIcon } from "../assets/icons/linkedin.svg";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./ui/button";
import { EnvelopeIcon } from "../assets/icons/envelope.svg";
import { LINK_LINKEDIN, className } from "../ts/constants";

export type ContactData = {
	title: string;
	copy: string;
};

type Props = {
	data: ContactData;
};

export const Contact = ({ data }: Props) => {
	return (
		<section className="container mb-16 scroll-mt-20 md:mb-24" id="contact">
			<div className="mx-auto max-w-2xl md:text-center">
				<h2 className="text-2xl font-bold md:text-3xl">{data.title}</h2>
				<p className="mt-2.5">{data.copy}</p>
				<ButtonGroup className="mt-5 md:justify-center">
					<Button asChild rel="noopener" key="mail">
						<a href="mailto:contact@schaar.dev">
							E-Mail schreiben
							<EnvelopeIcon className={className.buttonIcon} />
						</a>
					</Button>
					<Button
						variant="secondary"
						asChild
						rel="noopener"
						key="linkedin"
					>
						<a href={LINK_LINKEDIN}>
							LinkedIn-Profil
							<LinkedInIcon className={className.buttonIcon} />
						</a>
					</Button>
				</ButtonGroup>
			</div>
		</section>
	);
};
