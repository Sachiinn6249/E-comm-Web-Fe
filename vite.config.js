
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve( "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js', // Example entry file name
        chunkFileNames: 'assets/[name].js', // Example chunk file name
        assetFileNames: 'assets/[name].[ext]' // Example asset file name
      }
    }
  }
})
