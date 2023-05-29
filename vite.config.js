import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    base: "/tasker/",
    plugins: [react(), viteSvgr()],
  };
});
