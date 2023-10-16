import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
    passWithNoTests: true,
  },
});
