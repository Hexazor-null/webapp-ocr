import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Reconcile Tech',
        short_name: 'Reconcile',
        theme_color: '#0f172a',
        icons: [{ src: 'https://via.placeholder.com/192', sizes: '192x192', type: 'image/png' }]
      }
    })
  ]
})
