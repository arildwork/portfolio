import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const baseURL = env.VITE_BASE_URL;

  return {
    root: __dirname,
    plugins: [react()],
    base: baseURL,
    build: {
      outDir: "dist",
      emptyOutDir: true,
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 5050,
      strictPort: true,
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    preview: {
      port: 5050,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
