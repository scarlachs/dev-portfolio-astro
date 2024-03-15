type Props = {
	className: string;
};

export function LockIcon({ className }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="448"
			height="512"
			viewBox="0 0 448 512"
			fill="currentColor"
			className={className}
			aria-hidden="true"
		>
			{/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
		</svg>
	);
}