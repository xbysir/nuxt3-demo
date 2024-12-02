import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(nuxtApp => {
  // 确保在客户端环境下执行
  if (process.client) {
    // 在 app mounted 后初始化 AOS
    nuxtApp.hook('app:mounted', () => {
      setTimeout(() => {
        AOS.init({
          // 是否禁用 AOS (可接受值: 'phone', 'tablet', 'mobile', boolean, expression, function)
          disable: false,
          // AOS 初始化事件
          startEvent: 'DOMContentLoaded',
          // 初始化后添加的类名
          initClassName: 'aos-init',
          // 动画过程中添加的类名
          animatedClassName: 'aos-animate',
          // 是否将 `data-aos` 属性值作为类名添加
          useClassNames: true,
          // 是否禁用 MutationObserver (高级)
          disableMutationObserver: false,
          // 窗口大小调整时的去抖延迟 (高级)
          debounceDelay: 50,
          // 页面滚动时的节流延迟 (高级)
          throttleDelay: 99,
          // 动画持续时间 (毫秒)
          duration: 1000,
          // 动画缓动函数
          easing: 'ease-out-quart',
          // 触发动画的偏移量 (px)
          offset: 50,
          // 动画延迟 (毫秒)
          delay: 0,
          // 动画是否只播放一次
          once: true,
          // 元素滚动出视窗时是否反向播放动画
          mirror: false,
          // 动画触发点位置
          anchorPlacement: 'top-bottom'
        })
      }, 100)
    })

    // 监听路由变化
    nuxtApp.$router.afterEach(() => {
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    })
  }
  return {
    provide: {
      aos: AOS
    }
  }
})
