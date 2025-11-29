import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React (largest chunk)
          'react-vendor': ['react', 'react-dom'],
          // Animation library (framer-motion can be heavy)
          'animation-vendor': ['framer-motion'],
          // PDF generation (very heavy library)
          'pdf-vendor': ['@react-pdf/renderer'],
          // Routing
          'router-vendor': ['react-router-dom'],
          // Icons (lucide-react + react-icons can be large)
          'icons-vendor': ['lucide-react', 'react-icons'],
          // Utilities
          'utils-vendor': ['react-intersection-observer']
        }
      }
    }
  }
})