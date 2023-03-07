import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'api': path.resolve(__dirname, 'src/api'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'directives': path.resolve(__dirname, 'src/directives'),
      'layout': path.resolve(__dirname, 'src/layout'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'style': path.resolve(__dirname, 'src/style'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'view': path.resolve(__dirname, 'src/view'),
    },
    // 自动补全后缀
    extensions: ['.vue', '.ts', '.js']
  }
})