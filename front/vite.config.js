import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:3001',
=======
        target: 'http://localhost:3000',
>>>>>>> f2a4246cbd3dfbd359879afa9563f22ff2abf72e
      },
    },
  },
});
