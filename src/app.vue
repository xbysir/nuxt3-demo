<template>
  <div class="h-screen w-full">
    <FullLoading v-if="isFullLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp()

// 是否首次加载
const isFullLoading = ref(true)

nuxtApp.hook('page:start', () => {
  isFullLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isFullLoading.value = false
})
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
