import tailwindcss from '@tailwindcss/vite'
const address = require('address')
const localhost = address.ip() || 'localhost'
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_DEV: 'http://testapi.xuexiluxian.cn/api',
      API_BASE_PROD: 'http://testapi.xuexiluxian.cn/api'
    },
    motion: {
      directives: {
        'pop-bottom': {
          initial: {
            scale: 0,
            opacity: 0,
            y: 100
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0
          }
        }
      }
    }
  },
  srcDir: 'src/',
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/normailze.css', '~/assets/styles/tailwind.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/stylelint-module', '@vueuse/motion/nuxt'],
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
    },
    plugins: [tailwindcss()]
  },
  devServer: {
    host: localhost,
    port: 3000
  },
  nitro: {
    devProxy: {
      '/api': {
        // 后端的接口地址
        target: 'http://testapi.xuexiluxian.cn/api',
        changeOrigin: true,
        prependPath: true
      }
    },
    routeRules: {
      '/api/**': {
        proxy: 'http://testapi.xuexiluxian.cn/api/**'
      }
    }
  }
})
