import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7149',
        changeOrigin: true,
        secure: false, // Set to false if using self-signed certificates
      },
    },
  },
});
