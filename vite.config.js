import { defineConfig } from "vite";
import createHtmlPlugin from "vite-plugin-html-inject";
import { resolve } from "path"; // 💡 引入路徑解析工具

export default defineConfig({
  base: "./",
  plugins: [createHtmlPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
});
