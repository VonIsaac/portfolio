import { transform } from "framer-motion";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'}
        },
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
      },

    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}