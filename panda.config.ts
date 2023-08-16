import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	conditions: {},

	jsxFramework: "react",

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					light: { value: "#F0F0F0", description: "Light mode primary color." },
					myDark: {
						value: "rgb(41,45,50)",
						description: "Dark mode primary color.",
					},
				},
				shadows: {
					outLight: { value: "5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff" },
				},
			},
		},
	},

	globalCss: {
		body: {
			width: { md: "breakpoint-md", lg: "breakpoint-xl" },
			background: "light",
			minHeight: { base: "100vh" },
			margin: "auto",
			// border: "2px solid",
			// borderColor: {base: "black",sm: "red",md: "blue", lg: "green"}
		},
		header: {
			background: "light",
			height: { base: "6rem" },
			position: "fixed",
			top: "0",
			zIndex: "100",
		},
		main: {
			marginTop: {md: "6rem"},
		}
	},

	// The output directory for your css system
	outdir: "./src/styled-system",
});
