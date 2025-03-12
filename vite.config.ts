
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Try to import componentTagger, but don't fail if it's not compatible
let componentTagger;
try {
  componentTagger = require("lovable-tagger").componentTagger;
} catch (error) {
  console.warn("Warning: lovable-tagger could not be loaded, continuing without it");
  componentTagger = () => null;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: true,
    headers: {
      "X-Content-Type-Options": "nosniff",
      ...(mode === 'development' ? {} : { "X-Frame-Options": "SAMEORIGIN" }),
      "Content-Security-Policy": mode === 'development'
        ? "default-src 'self' * data: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' *;"
        : "default-src 'self'",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    hmr: {
      clientPort: mode === 'development' ? undefined : 8080,
      host: 'localhost',
      protocol: 'ws',
      overlay: true,
    },
  },
  base: "/", // Changed from "./" to "/" for custom domain support
  plugins: [
    react({
      // Using React plugin with latest features
      tsDecorators: true,
    }),
    // Only use componentTagger in development mode if it's available
    mode === 'development' && componentTagger ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize build for modern browsers
  build: {
    target: "es2015",
    minify: "esbuild", // Using esbuild for minification
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    // Apply SWC optimizations here instead
    esbuildOptions: {
      target: 'es2020',
      supported: {
        // These settings help with RegExp complexity issues
        'top-level-await': true,
      },
      // Simplify transforms to reduce RegExp complexity
      treeShaking: true,
    }
  },
}));
