import { useIntersectionObserver } from '@vueuse/core'

export default defineNuxtPlugin(nuxtApp => {
  // 不再是 import Vue from 'vue'的写法了
  nuxtApp.vueApp.directive('Mlazy', {
    // 不用mounted，在mounted时用户权限集还是空的
    mounted(el, { arg, value }) {
      if (typeof value != 'string') {
        return
      } else if (arg == 'show') {
        el.style.background = `url(${value}) no-repeat   center`
        el.style.backgroundSize = `cover`
        return
      } else if (arg == 'imgShow') {
        el.src = value
        return
      }

      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          if (arg == 'img') {
            el.src = value
          } else if (!arg) {
            el.style.background = `url(${value}) no-repeat   center`
            el.style.backgroundSize = `cover`
          }
          // 当组件卸载时，停止监听
          stop()
        }
      })
    }
  })
})
