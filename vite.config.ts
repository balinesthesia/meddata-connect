
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: false, // Disable CORS in development to prevent cross-origin requests
    headers: {
      // Set security headers
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'self'",
    },
    hmr: {
      // Secure HMR WebSocket connections
      clientPort: 8080,
      host: 'localhost',
    },
  },
  base: "/", // Changed from "./" to "/" for custom domain support
  plugins: [
    react({
      // Using React plugin with latest features
      tsDecorators: true,
      // Configure SWC to handle RegExp issues better
      swcOptions: {
        jsc: {
          transform: {
            optimizer: {
              simplify: true,
            },
          },
        },
      },
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize build for modern browsers
  build: {
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        // Help mitigate RegExp issues
        sequences: false,
      },
    },
  },
}));
