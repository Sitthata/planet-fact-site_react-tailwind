import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/planet-fact-site_react-tailwind/',
  plugins: [react()],
})
