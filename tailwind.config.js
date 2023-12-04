import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3C46",
        accent: "#F6C825",
        greyBg: "#F0F0F0",
        green: "#4FA161",
        blue: "#575AA4",
        pink: "#94498C",
        yellow: "#B6A362",
      },
      fontSize: {
        "card-title": "28px",
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
        "1400px": "1400px",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [HeadlessTailwindPlugin({ prefix: "ui" })],
};
