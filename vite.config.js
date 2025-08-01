// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Add this to make sure the service worker is included
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Mirin Mano M',
        short_name: 'Profile',
        description: 'Mirinmano Portfolio',
        theme_color: '#ffffff',
        icons: [
          {
            src: '1000078290.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '1000078290.jpg',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '1000078290.jpg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})