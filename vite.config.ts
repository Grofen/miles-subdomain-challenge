/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.tsx"],
    setupFiles: "./vitest-setup.ts",
  },
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      config: "/src/config",
      images: "/src/images",
      pages: "/src/pages",
      routes: "/src/routes",
      "test-utils": "/src/test-utils",
    },
  },
});
