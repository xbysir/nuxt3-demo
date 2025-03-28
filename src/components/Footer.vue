<template>
  <footer class="footer-box w-full bg-[#242933] py-8 sm:py-10">
    <div class="box mx-auto w-11/12 max-w-7xl">
      <div class="flex flex-col justify-between gap-8 sm:flex-row sm:gap-4">
        <!-- Left Section -->
        <div class="left space-y-6 text-[14px] sm:w-1/2">
          <div class="icon text-[24px] font-bold text-white sm:text-[30px]">LOGO</div>
          <div class="space-y-2">
            <div class="phone text-[14px] leading-[22px] text-white sm:text-[16px]">Contact: +86-136xxxx8899</div>
            <div class="text-[14px] leading-[22px] text-white sm:text-[16px]">Email: example@company.com</div>
            <div class="text-[14px] leading-[22px] text-white sm:text-[16px]">Address: Your Company Address Here</div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="right flex flex-col gap-6 sm:w-1/2 sm:items-end">
          <!-- Social Links -->
          <div class="flex gap-4">
            <a href="#" class="text-white hover:text-blue-400">
              <TwitterOutlined class="text-2xl" />
            </a>
            <a href="#" class="text-white hover:text-blue-600">
              <FacebookOutlined class="text-2xl" />
            </a>
            <a href="#" class="text-white hover:text-pink-600">
              <InstagramOutlined class="text-2xl" />
            </a>
            <a href="#" class="text-white hover:text-blue-500">
              <LinkedinOutlined class="text-2xl" />
            </a>
          </div>

          <!-- Links -->
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-[#878FB4]">
            <nuxt-link to="/" class="hover:text-white">Home</nuxt-link>
            <nuxt-link to="/about" class="hover:text-white">About</nuxt-link>
            <nuxt-link to="/search" class="hover:text-white">Search</nuxt-link>
            <nuxt-link to="/list" class="hover:text-white">List</nuxt-link>
            <nuxt-link to="/fade" class="hover:text-white">Fade</nuxt-link>
            <nuxt-link to="/motion" class="hover:text-white">Motion</nuxt-link>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-8 flex flex-col items-center gap-4 border-t border-gray-700 pt-6 text-[14px] text-[#878FB4] sm:flex-row sm:justify-between"
      >
        <div class="flex flex-wrap items-center justify-center gap-2 text-center sm:justify-start">
          <span>Copyright © {{ new Date().getFullYear() }} Company Name</span>
          <span class="hidden sm:inline">|</span>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="hover:text-white">ICP License 343432211</a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2 text-center sm:justify-end">
          <a href="https://beian.mps.gov.cn/" target="_blank" class="flex items-center hover:text-white">
            <img class="mr-1 h-[17px] w-[16px]" src="@/assets/images/badge.png" alt="Police Badge" />
            <span>Police Record 143435664444</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped></style>
