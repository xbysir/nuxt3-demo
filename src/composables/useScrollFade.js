import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollFade(elementClass, direction = 'bottom', onhandleEnter = () => {}, onhandleLeave = () => {}) {
  const fadeElements = ref([])
  const directionList = {
    bottom: { opacity: 0, y: 150 },
    top: { opacity: 0, y: -150 },
    right: { opacity: 0, x: 150 },
    left: { opacity: 0, x: -150 }
  }
  const initialStatus = directionList[direction]
  const animateElements = () => {
    fadeElements.value.forEach(element => {
      gsap.fromTo(
        element,
        // 初始状态
        initialStatus,
        {
          // 最终状态
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          // 每个元素之间的延迟
          stagger: 0.3,
          scrollTrigger: {
            trigger: element,
            // 当元素顶部到达底部开始动画
            start: 'top bottom',
            //把动画速度和滚动条速度同步
            // scrub: 1,
            // 刷新时重置动画
            invalidateOnRefresh: true,
            // 动画播放和反转的行为
            toggleActions: 'play none none reverse',
            onEnter: onhandleEnter,
            onLeave: onhandleLeave
          }
        }
      )
    })
  }

  onMounted(() => {
    fadeElements.value = document.querySelectorAll(elementClass)
    animateElements()
  })

  // return { fadeElements }
}
