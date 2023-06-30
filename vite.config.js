import { defineConfig } from 'vite'
import StimulusHMR from 'vite-plugin-stimulus-hmr'

export default defineConfig({
  plugins: [
    StimulusHMR(),
  ],
  preview: {
    open: true,
  },
  server: {
    host: true,
    open: true,
  },
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})