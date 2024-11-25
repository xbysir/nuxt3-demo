<template>
  <div>
    <div class="text-title">pos: {{ x }}, {{ y }}</div>
    <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
    <!-- Before -->
    <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
    <div>
      这张图是 img
      <img v-Mlazy:img="'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
const { x, y } = useMouse()
const userInfo = useUserStore().userInfo
const num = Math.random()
useSeoMeta({
  title: '首页',
  ogTitle: '我的神奇网站',
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>
<style lang="scss" scoped>
.text-title {
  color: $textColor;
}
</style>
