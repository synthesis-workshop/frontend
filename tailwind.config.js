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
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
      height: {
        "72px": "72px",
        "348px": "348px",
        buttonHeight: "52px",
      },
      width: {
        "387px": "387px",
        buttonWidth: "347px",
      },
      fontSize: {
        main: "28px",
      },
      inset: {
        "25px": "25px",
        "166px": "166px",
        "165px": "165px",
      },
    },
  },
  plugins: [],
};
