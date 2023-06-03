import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@/components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@/data', replacement: fileURLToPath(new URL('./src/data', import.meta.url)) },
      { find: '@/styles', replacement: fileURLToPath(new URL('./styles', import.meta.url)) },
      { find: '@/lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
      { find: '@/config', replacement: fileURLToPath(new URL('./src/config', import.meta.url)) },
      { find: '@/types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
    ],
  }
})
