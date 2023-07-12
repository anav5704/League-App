import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ,
    VitePWA({ 
        registerType: 'autoUpdate',
            manifest: {
                name: "League of Losers HUB",
                short_name: "LOL HUB",
                start_url: ".",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "standalone",
                icons: [
                    {
                        src: "L192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "L512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
     })],
})
