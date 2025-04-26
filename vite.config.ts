import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path-browserify' ;
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react() ,
    tailwindcss() ,
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: path.resolve("./" , 'index.html'),
        newtab: path.resolve("./" , 'widgets.html'),
      } ,
      output: {
        entryFileNames: '[name].js',
      }
    }
  }
})
