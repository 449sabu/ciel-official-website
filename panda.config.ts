import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    pinkTheme: '[data-theme=pink] &',
    blueTheme: '[data-theme=blue] &'
  },

	// Useful for theme customization
	theme: {
    semanticTokens: {
      colors: {
        text: {
          value: {
            _pinkTheme: { base: '{colors.pink.500}', _dark: '{colors.pink.300}' },
            _blueTheme: { base: '{colors.blue.500}', _dark: '{colors.blue.300}' }
          }
        }
      }
    },
		tokens: {
			colors: {
				myLight: { value: "#F0F0F0", description: "Light mode primary color." },
				myDark: {
					value: "rgb(41,45,50)",
					description: "Dark mode primary color.",
				},
			},
		},
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
