/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3A3C46",
      secondary: "#FFFFFF",
      accent: "#F6C825",
    },
    fontFamily: {
      text: ["Inter", "Helvetica", "Arial", "sans"],
      title: ["Esteban", "cursive"],
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
    },
    plugins: [],
  },
};
