import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Alternative config for deployment issues
export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths - works everywhere
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})