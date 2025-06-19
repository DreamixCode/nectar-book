import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tailwindcss()],
  base: "/nectar-book",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
