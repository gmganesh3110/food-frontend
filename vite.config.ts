import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig(); // Load .env file

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});