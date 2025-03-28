<template>
  <div>
    <div class="title" v-motion-roll-left>move title</div>

    <div class="box" v-for="(item, index) in items" :key="item.id" v-motion-slide-visible-bottom :delay="index * 200">
      测试{{ index }}
    </div>

    <div
      class="dance"
      v-motion="{
        initial: {
          y: 100,
          opacity: 0
        },
        enter: {
          y: 0,
          opacity: 1
        }
      }"
    >
      Hello
    </div>

    <div v-motion :initial="initial" :enter="enter" class="dance">Hello</div>

    <div style="height: 1000px"></div>

    <div v-motion-slide-visible-bottom class="box">最终文字</div>

    <div class="target" v-motion-fade>1</div>
    <div class="target" v-motion-fade-visible>2</div>

    <div v-motion="'pop-bottom'" class="box">最终文字</div>
  </div>
</template>

<script setup>
import { ref } from '@vue/composition-api'

const items = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 }
])

const initial = ref({
  y: 100,
  opacity: 0
})

const enter = ref({
  y: 0,
  opacity: 1
})
</script>

<style scoped>
.title {
  font-size: 24px;
  color: red;
}

.dance {
  margin-bottom: 20px;
  color: royalblue;
}

.box {
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  background-color: aqua;
}

.target {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 300px auto 500px;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  font-weight: bold;
  background: #43b883;
}
</style>
