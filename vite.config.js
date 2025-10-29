import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js and related 3D libraries
          'three-js': ['three', 'three-stdlib', '@react-three/fiber', '@react-three/drei'],
          // Canvas components (3D scenes)
          'canvas': [
            './src/components/canvas/Computers',
            './src/components/canvas/Earth',
            './src/components/canvas/Ball',
            './src/components/canvas/Stars'
          ],
          // React Router
          'router': ['react-router-dom'],
          // Framer Motion
          'motion': ['framer-motion'],
          // Other utilities
          'utils': ['react-tilt', 'react-vertical-timeline-component']
        }
      }
    },
    // Increase chunk size warning limit temporarily
    chunkSizeWarningLimit: 1000
  }
})
