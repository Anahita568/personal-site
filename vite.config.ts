import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2020",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
});
