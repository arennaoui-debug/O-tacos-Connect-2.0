// vite.config.js
// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ceci est la correction pour les problèmes de chargement des ressources (page blanche)
  base: '/', 
});
