import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    scrollProgress: 0
  }),
  actions: {
    updateScrollProgress() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      const clientHeight = document.documentElement.clientHeight || window.innerHeight
      this.scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100
    },
    resetProgress() {
      this.scrollProgress = 0
      window?.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
