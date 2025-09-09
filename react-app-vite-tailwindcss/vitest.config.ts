import path from 'path';
import { defineConfig } from 'vitest/config'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    reporters: [
      'default',
      'junit'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['cobertura'],
      exclude: [
        './dist/',
        '**.config.**',
        './src/components/Icon',
        './src/enumerations',
        './src/models',
        './src/router'
      ]
    },
    outputFile: {
      junit: './junit.xml',
    }
  },
})