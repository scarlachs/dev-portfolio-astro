const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	prefix: "",
	theme: {
		fontFamily: {
			sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
		},
		colors: ({ colors }) => ({
			primary: {
				50: "#fae3e0",
				100: "#f6d0ca",
				200: "#efa89f",
				300: "#e88274",
				400: "#e15a47",
				500: "#d23823",
				600: "#a62c1c",
				700: "#7b2114",
				800: "#4f150d",
				900: "#230906",
				950: "#0d0302",
			},
			secondary: {
				50: "#f5e7e6",
				100: "#edd7d4",
				200: "#deb5af",
				300: "#d0938b",
				400: "#c17267",
				500: "#ae5347",
				600: "#8a4238",
				700: "#653129",
				800: "#411f1b",
				900: "#1d0e0c",
				950: "#0b0504",
			},
			slate: colors.slate,
			white: colors.white,
		}),
		container: ({ theme }) => ({
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
			screens: {
				...theme("screens"),
				"2xl": "1400px",
			},
		}),
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.3s ease-out",
				"accordion-up": "accordion-up 0.3s ease-out",
			},
			aspectRatio: {
				"3/2": "3 / 2",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
