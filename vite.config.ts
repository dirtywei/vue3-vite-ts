import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugins'

import { getRootPath, getSrcPath } from './build/utils'
const srcPath = getSrcPath()
const rootPath = getRootPath()

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': rootPath,
      '@': srcPath
    }
  },
  plugins: setupVitePlugins(),
  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      }
    },
    chunkSizeWarningLimit: 1024 // chunk 大小警告的限制（以 kbs 为单位）
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
    open: false
  }
})
