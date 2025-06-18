/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bai Jamjuree",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: ["Anybody", "serif"],
      },
      colors: {
        background: "#242424",
        accent: "#ddb993",
      },
    },
  },
  plugins: [],
};
