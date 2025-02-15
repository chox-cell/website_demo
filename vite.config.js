import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "childland",
      project: "javascript-react",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['react-icons'],
          'animations': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: true // Enable source maps for Sentry
  }
})