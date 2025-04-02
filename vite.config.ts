import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Optional, only if needed

export default defineConfig({
  plugins: [
    react(), // React plugin
    svgr(), // Optional, for SVG handling
  ],
});