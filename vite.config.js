import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sawit/', // Penting untuk GitHub Pages
  plugins: [react()],
})
