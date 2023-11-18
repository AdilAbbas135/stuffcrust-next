/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cr-primary": "#b3cc4c",
        "txt-primary": "#18191a",
        "text-secondary": "#242526",
        "txt-secondary-2": "#3a3b3c",
      },
    },
  },
  plugins: [],
};
