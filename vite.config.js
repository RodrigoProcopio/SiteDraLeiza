// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // <-- ISSO AQUI é o necessário para domínio próprio!
  plugins: [react()],
});

