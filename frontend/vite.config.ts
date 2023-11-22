import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:5005',
=======
        target: 'http://localhost:5000',
>>>>>>> 62b8090 (Added frontend)
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})