import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
  return defineConfig({
    base: '/main-app/',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 注册自定义组件micro-app 防止控制台警告
            isCustomElement: tag => /^micro-app/.test(tag)
          }
        }
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@a': path.resolve(__dirname, 'src/assets'),
        '@c': path.resolve(__dirname, 'src/components')
      }
    },
    server: {
      port: 3300,
      host: '0.0.0.0',
      proxy: { 
        '/api': {
         target: "http://192.168.174.114:7001/",
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  })
}
