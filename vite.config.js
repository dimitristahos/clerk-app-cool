import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext", // Ensures modern JavaScript features, including top-level await
  },
  esbuild: {
    target: "esnext", // Ensures that esbuild respects modern JavaScript features
  },
});
