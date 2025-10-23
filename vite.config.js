// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajoutez cette ligne pour le chemin de base Vercel/GitHub Pages
  base: '/', 
});
