import { defineStore } from 'pinia'
import { setLocalToken, getLocalToken } from '@/utils/local-token.js'

export const useUserStore = defineStore('userInfo', {
  state: () => ({
    userInfo: {},
    token: getLocalToken() || ''
  }),
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    setToken(token) {
      this.token = token
      setLocalToken(token)
    }
  }
})
