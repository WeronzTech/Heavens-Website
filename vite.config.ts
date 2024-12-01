import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3002, // optional: specify the port if you want a specific one
    
  },
  assetsInclude: ['**/*.apk'],
  publicDir: 'public',
})