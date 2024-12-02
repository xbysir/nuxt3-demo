<template>
  <div
    class="progress-bar"
    :style="{
      width: progress.scrollProgress + '%',
      backgroundColor: progress.scrollProgress > 50 ? '#28a745' : '#007bff'
    }"
  ></div>
</template>

<script setup>
import { useProgressStore } from '@/stores/progress.js'
const progress = useProgressStore()

const updateScrollProgress = () => {
  progress.updateScrollProgress()
}
onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  progress.resetProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  padding-bottom: 2px;
  transition: width 0.2s ease;
  z-index: 9999;
}
</style>
