import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // KK-Task-Tracker, number for front-end, vite usually uses 5173
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // points request to backend server
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001', // points request to backend server
        changeOrigin: true,
        secure: false
      },
    },
  },
});
