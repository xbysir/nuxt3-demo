<template>
  <div>
    <div>pos: {{ x }}, {{ y }}</div>
    <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
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
