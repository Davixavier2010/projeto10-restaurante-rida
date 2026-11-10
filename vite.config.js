import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  cacheDir: './.vite_cache',
  resolve: {
    dedupe: ['react', 'react-dom'],
    preserveSymlinks: true
  },
  server: {
    port: 5177,
    host: true
  }
});
