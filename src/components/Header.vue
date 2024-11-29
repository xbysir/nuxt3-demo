<template>
  <header class="sticky top-0 z-10 h-[60px] w-full bg-white leading-[60px] shadow-md">
    <nav class="flex h-full w-full items-center justify-between">
      <div class="ml-4 font-bold text-green-600">
        <nuxt-link to="/">Nuxt 3</nuxt-link>
      </div>

      <!-- Desktop navigation -->
      <div class="mr-4 hidden h-full items-center sm:flex">
        <ul class="flex h-full items-center justify-between text-center">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="[
              'h-[60px] border-t-2 border-transparent px-2 text-lg leading-[60px] transition-all duration-300 ease-in-out hover:border-green-600 hover:text-green-600',
              { 'border-green-600 text-green-600': isActive(item.link) }
            ]"
          >
            <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Mobile navigation -->
      <div class="mr-4 cursor-pointer sm:hidden" @click="showNav">
        <MenuFoldOutlined />
      </div>
    </nav>

    <!-- Drawer for mobile -->
    <div class="sm:hidden">
      <a-drawer title="Navbar" width="50%" :visible="visible" @close="onClose">
        <ul class="flex h-full flex-col items-center text-center">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="[
              'height-[50px] text-lg leading-[50px] hover:text-green-600',
              { 'text-green-600': isActive(item.link) }
            ]"
            @click="onClose(true)"
          >
            <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </a-drawer>
    </div>
  </header>
</template>

<script setup>
import { MenuFoldOutlined } from '@ant-design/icons-vue'
const route = useRoute()
const visible = ref(false)
const navItems = ref([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Search', link: '/search' },
  { name: 'List', link: '/list' }
])
const showNav = () => {
  visible.value = true
}
const onClose = (scroll = false) => {
  visible.value = false
  if (scroll === true) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
const isActive = link => {
  return route.path === link
}
</script>

<style scoped>
li.active {
  color: #4caf50;
  border-color: #4caf50;
}
</style>
