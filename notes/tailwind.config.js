/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	safelist: [
		{
			pattern:
				/bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(300)/, // You can display all the colors that you need
			variants: ["lg", "hover", "focus", "lg:hover"], // Optional
		},
	],
	plugins: [],
};
