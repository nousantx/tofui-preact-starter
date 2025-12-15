import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import preact from '@preact/preset-vite'
import tofui from '@tofui/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tofui()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
