import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Ensure assets are referenced relative to the root
  base: "/",
  server: {
    port: 3002, // Change this to your desired port
  },
  plugins: [
    tanstackStart(),
    tailwindcss(),
    nitro({
      preset: "vercel",
      // This ensures Nitro handles the public assets correctly for Vercel
      output: {
        publicDir: path.resolve(__dirname, ".vercel/output/static"),
      },
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
