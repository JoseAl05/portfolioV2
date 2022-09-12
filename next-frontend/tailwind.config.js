/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thunderLight: ["THUNDER-LIGHT", "sans-serif"],
        thunderMedium: ["THUNDER-MEDIUM", "sans-serif"],
        thunderBold: ["THUNDER-BOLD", "sans-serif"],
        PlayfairRegular: ["Playfair-Regular", "sans-serif"]
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
    },
    },
  },
  plugins: [],
}