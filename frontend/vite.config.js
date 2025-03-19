import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv('development', process.cwd(), '');
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['storybook-addon'],
  },
  define: {
    'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
  },
  resolve: {
    alias: {
      src: '/src',
      common: '/src/common',
      features: '/src/features',
    },
  },
});
