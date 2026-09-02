import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // Relative base so the static build works on root deployments (Replit)
  // and sub-path deployments (GitHub Pages) without reconfiguration.
  base: './',
  plugins: [react(), tailwindcss()],
})
