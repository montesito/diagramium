import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/diagramium/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/mermaid') || id.includes('node_modules/dagre')) return 'mermaid';
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['@terrastruct/d2'],
  },
});
