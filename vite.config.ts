/* node modules */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      "@components": path.resolve(__dirname, "./src/components"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@hooks": path.resolve(__dirname, "./src/hooks")
    }
  },
  server: {
    port: 3000
  }
});
