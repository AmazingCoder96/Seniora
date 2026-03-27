import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the built app works on both
  // user/org pages (https://<user>.github.io/) and
  // project pages (https://<user>.github.io/<repo>/).
  base: './',
})
