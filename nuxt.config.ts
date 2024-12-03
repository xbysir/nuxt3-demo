// https://nuxt.com/docs/api/configuration/nuxt-config
const address = require('address')
const localhost = address.ip() || 'localhost'
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/normailze.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  plugins: ['@/plugins/antd.js', '@/plugins/aos.client.js'],
  vite: {
    // 样式处理配置
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
          javascriptEnabled: true,
          additionalData: '@use "@/assets/styles/var.scss" as *;'
        }
      }
    }
  },
  devServer: {
    host: localhost,
    port: 8303
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://testapi.xuexiluxian.cn/api', // 后端的接口地址
        changeOrigin: true,
        prependPath: true
      }
    },
    routeRules: {
      '/api/**': {
        proxy: 'http://testapi.xuexiluxian.cn/api/**'
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
})
