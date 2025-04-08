<template>
  <div class="error-page">
    <h1>404-页面不存在</h1>
    <p>很抱歉，您要访问的页面不存在。</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
definePageMeta({
  layout: 'error'
})

const router = useRouter()
router.replace({ path: '/404' })
</script>

<style lang="scss" scoped></style>
