/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5733",
          hover: "#E04826",
          dark: "#121212",
          card: "#1C1C1E",
          cardLight: "#2C2C2E",
          border: "#2C2C2E",
          textMuted: "#A1A1AA"
        }
      }
    },
  },
  plugins: [],
}
