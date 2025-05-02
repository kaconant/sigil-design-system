import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SigilWC",
      fileName: (format) => `sigil-wc.${format}.js`,
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "lit",
        },
      },
    },
  },
});
