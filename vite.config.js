import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [
    preact(),
  ],
  preview: {
    open: true,
  },
  server: {
    host: true,
    open: true,
  },
  root: 'src',
  base:'/logposht_screen/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})