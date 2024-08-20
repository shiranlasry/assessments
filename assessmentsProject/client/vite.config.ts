import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // את יכולה לבחור כל פורט פנוי, כמו 3000
    proxy: {
      '/api': {
        target: 'http://localhost:8000', 
        changeOrigin: true,
      }
    },
  },
})
