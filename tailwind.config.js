/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#1A4031",
        "brand-cream": "#F9F7F2",
        "brand-red": "#9B2C2C",
      },
    },
  },
  plugins: [],
};
