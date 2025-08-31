import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/PortFolio/',
  plugins: [react(),tailwindcss(),],
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    cssCodeSplit: true,
    assetsInlineLimit: 0, 
    manifest: true, 
  },
})
