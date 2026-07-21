import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  site: 'https://xmcl.app',
  integrations: [
    react(),
    sitemap(),
  ],
  output: 'static',
  outDir: './build',
  vite: {
    server: {
      port: 8080,
      host: true,
      hmr: {
        clientPort: 8080,
      },
    },
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'highlight.js/lib/core': path.resolve(__dirname, './node_modules/highlight.js/lib/core.js'),
      },
    },
    optimizeDeps: {
      include: [
        '@phosphor-icons/react',
        'react',
        'react-dom',
        'framer-motion',
        '@tanstack/react-query',
      ],
    },
  },
});
