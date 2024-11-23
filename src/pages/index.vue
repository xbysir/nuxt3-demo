<template>
  <div>
    <div>pos: {{ x }}, {{ y }}</div>
    <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
    <!-- Before -->
    <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
const { x, y } = useMouse()
const userInfo = useUserStore().userInfo
</script>
<style lang="scss" scoped>
div {
  background-color: $bgColor;
  color: $theme;
}
</style>
