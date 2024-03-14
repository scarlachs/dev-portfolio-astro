export type Image = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	lazy?: true;
};

export type Meta = {
	title: string;
	description: string;
};
