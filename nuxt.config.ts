// https://nuxt.com/docs/api/configuration/nuxt-config
const address = require('address')
const localhost = address.ip() || 'localhost'
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/normailze.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
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
  }
})
