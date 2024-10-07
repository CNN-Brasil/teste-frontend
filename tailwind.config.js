/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,tsx}"],
	theme: {
		colors: {
			primary: "#2ECC71",
			secondary: "#1ABC9C",
			tertiary: "#3498DB",
			background: "#F7F7F7",
			white: "#FFFFFF",
			black: "#000000",
		},
		fontFamily: {
			sans: ['"Inter", sans-serif'],
		},
	},
	plugins: [],
};
