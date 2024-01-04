import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
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
        white: "#FFFFFF",
        footerText: "#ffffffcc",
      },
      fontSize: {
        "card-title": "28px",
      },
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
    },
    plugins: [],
  },
  plugins: [HeadlessTailwindPlugin({ prefix: "ui" })],
};
