<template>
  <div class="scroll-fade-page">
    <div class="fade-element" v-for="i in 10" :key="i">
      <h2>元素 {{ i }}</h2>
      <p>这是第 {{ i }} 个元素的内容。</p>
    </div>
    <div class="fade-element1">
      <h2>元素 test1</h2>
      <p>这是第 test1 个元素的内容。</p>
    </div>
    <div class="fade-element2">
      <h2>元素 test2</h2>
      <p>这是第 test2 个元素的内容。</p>
    </div>
    <div class="fade-element3">
      <h2>元素 test3</h2>
      <p>这是第 test3 个元素的内容。</p>
    </div>
  </div>
</template>

<script setup>
import { useScrollFade } from '@/composables/useScrollFade'
const handleEnter = () => {
  console.log('Custom Enter Event Triggered!')
}

const handleLeave = () => {
  console.log('Custom Leave Event Triggered!')
}

useScrollFade('.fade-element', 'bottom', handleEnter, handleLeave)
useScrollFade('.fade-element1', 'right')
useScrollFade('.fade-element2', 'left')
useScrollFade('.fade-element3', 'top')
</script>

<style scoped>
.scroll-fade-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
  flex-direction: column;
}

.fade-element {
  margin: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  background-color: white;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}

.fade-element1 {
  margin: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  background-color: rgb(139 204 236);
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}

.fade-element2 {
  margin: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  background-color: rgb(139 204 236);
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}

.fade-element3 {
  margin: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  background-color: rgb(139 204 236);
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}
</style>
