/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2d6a4f",
        sand: "#d4a373",
        leaf: "#52b788",
        cream: "#F7F4EE",
        beige: "#F7F4EE",
        darkforest: "#1b4332",
        lightaccent: "#b7e4c7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
