/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3C46",
        secondary: "#FFFFFF",
        accent: "#F6C825",
        greyBg: "#F0F0F0",
      },
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
      spacing: {
        "500px": "500px",
        "200px": "200px",
        "1200px": "1200px",
        "276px": "276px",
        "100px": "100px",
        "57px": "57px",
      },
    },
  },
  plugins: [],
};
