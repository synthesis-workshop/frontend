import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
    },
    extend: {
      colors: {
        primary: "#3A3C46",
        accent: "#F6C825",
        green: "#4FA161",
        blue: "#575AA4",
        pink: "#94498C",
        yellow: "#B6A362",
        white: "#FFFFFF",
        red: "#ff0000",
        formBackground: "#4d4f58",
        formBorder: "#83848a",
      },
      fontSize: {
        "card-title": "28px",
      },
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
      maxWidth: {
        xlPageContent: "1200px",
        lgPageContent: "944px",
        mdPageContent: "728px",
        smPageContent: "343px",
      },
    },
  },
  plugins: [HeadlessTailwindPlugin({ prefix: "ui" })],
};
