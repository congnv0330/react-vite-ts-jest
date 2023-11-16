import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';
import { defineConfig, loadEnv, PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const _env = loadEnv(mode, process.cwd());

  const plugins: PluginOption[] = [react()];

  if (process.env?.ANALYZE === 'true') {
    plugins.push(
      bundleAnalyzer({
        analyzerMode: 'server',
      }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': _env.VITE_API_URL,
      },
    },
    build: {
      assetsDir: 'static',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/[hash].chunk.js',
          assetFileNames: 'static/[hash].chunk.[ext]',
        },
      },
    },
  };
});
