/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        primary: "#3A3C46",
        accent: "#F6C825",
        green: "#4FA161",
        blue: "#575AA4",
        pink: "#94498C",
        yellow: "#B6A362",
        whitegrey: "#F0F0F0",
      },
      // TODO: These spacing values should all go away, please remove
      spacing: {
        "1202px": "1202px",
        "899px": "899px",
        "343px": "343px",
        "358px": "358px",
        "301px": "301px",
        "20px": "20px",
        "360px": "360px",
        "728px": "728px",
        "387px": "387px",
        "282px": "282px",
        "944px": "944px",
        "32px": "32px",
        "410px": "410px",
        "35px": "35px",
        "148px": "148px",
        "246px": "246px",
        "40px": "40px",
        "222px": "222px",
        "52px": "52px",
      },
      fontSize: {
        "card-title": "28px",
      },
    },
    fontFamily: {
      text: ["Inter", "Helvetica", "Arial", "sans"],
      title: ["Esteban", "cursive"],
    },
  },
  plugins: [],
};
