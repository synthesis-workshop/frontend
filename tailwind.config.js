/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3C46",
        accent: "#F6C825",
        green: "#4FA161",
        blue: "#575AA4",
        pink: "#94498C",
        yellow: "#B6A362",
      },
      backgroundImage: {
        'playvideoButton': "url('./src/assets/images/play_button_000.svg')"
      },
    },
    fontFamily: {
      text: ["Inter", "Helvetica", "Arial", "sans"],
      title: ["Esteban", "cursive"],
    },
  },
  plugins: [],
};
