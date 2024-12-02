// 全局状态管理
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    count: 0
  }),
  actions: {
    nuxtServerInit() {
      console.log('nuxtServerInit')
    }
  }
})
