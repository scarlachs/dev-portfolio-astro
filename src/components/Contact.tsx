import { LinkedInIcon } from "@/assets/icons/linkedin.svg";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./ui/button";
import { EnvelopeIcon } from "@/assets/icons/envelope.svg";
import { LINK_LINKEDIN, className } from "@/ts/constants";
import type { MouseEvent } from "react";

export type ContactData = {
	title: string;
	copy: string;
};

type Props = {
	data: ContactData;
};

const decryptCharcode = (
	charCode: number,
	start: number,
	end: number,
	offset: number,
): string => {
	charCode = charCode + offset;

	if (offset > 0 && charCode > end) {
		charCode = start + (charCode - end - 1);
	} else if (offset < 0 && charCode < start) {
		charCode = end - (start - charCode - 1);
	}

	return String.fromCharCode(charCode);
};

const decryptString = (value: string, offset: number): string => {
	let result = "";

	for (let i = 0; i < value.length; i++) {
		const charCode = value.charCodeAt(i);

		if (charCode >= 0x2b && charCode <= 0x3a) {
			result += decryptCharcode(
				charCode,
				0x2b,
				0x3a,
				offset,
			); /* 0-9 . , - + / : */
		} else if (charCode >= 0x40 && charCode <= 0x5a) {
			result += decryptCharcode(charCode, 0x40, 0x5a, offset); /* A-Z @ */
		} else if (charCode >= 0x61 && charCode <= 0x7a) {
			result += decryptCharcode(charCode, 0x61, 0x7a, offset); /* a-z */
		} else {
			result += value.charAt(i);
		}
	}

	return result;
};

const handleClick = (event: MouseEvent): void => {
	const currentTarget = event.currentTarget as HTMLElement;
	const dataset = currentTarget.dataset;
	const value = dataset.mailtoToken;
	const vector = dataset.mailtoVector;

	if (!value || !vector) return;

	const offset = parseInt(vector, 10) * -1;

	document.location.href = decryptString(value, offset);
};

export const Contact = ({ data }: Props) => {
	return (
		<section className="container mb-16 scroll-mt-20 md:mb-24" id="contact">
			<div className="mx-auto max-w-2xl md:text-center">
				<h2 className="text-2xl font-bold md:text-3xl">{data.title}</h2>
				<p className="mt-2.5">{data.copy}</p>
				<ButtonGroup className="mt-5 md:justify-center">
					<Button
						rel="noopener"
						key="mail"
						data-mailto-token="hvdgoj5xjiovxoVnxcvvm9yzq"
						data-mailto-vector="-5"
						onClick={handleClick}
						type="button"
					>
						E-Mail schreiben
						<EnvelopeIcon className={className.buttonIcon} />
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
