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
        whitegrey: "#F0F0F0",
      },
      spacing: {
        "20px": "20px",
        "1202px": "1202px",
        "899px": "899px",
        "360px": "360px",
        "387px": "387px",
        "32px": "32px",
        "410px": "410px",
        "35px": "35px",
        "148px": "148px",
        "246px": "246px",
        "40px": "40px",
        "222px": "222px",
        "52px": "52px",
      },
      // height: {
      //   "500px": "500px",
      //   "200px": "200px",
      //   "1202px": "1202px",
      //   "276px": "276px",
      //   "100px": "100px",
      //   "57px": "57px",
      //   "899px": "899px",
      //   "360px": "360px",
      //   "20px": "20px",
      // },
      // width: {
      //   "500px": "500px",
      //   "200px": "200px",
      //   "1202px": "1202px",
      //   "276px": "276px",
      //   "100px": "100px",
      //   "57px": "57px",
      //   "899px": "899px",
      //   "387px": "387px",
      // },
    },
    fontFamily: {
      text: ["Inter", "Helvetica", "Arial", "sans"],
      title: ["Esteban", "cursive"],
    },
  },
  plugins: [],
};
