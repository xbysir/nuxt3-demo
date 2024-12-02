<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-search h-[40vh] bg-cover bg-center sm:h-[50vh]">
      <div class="flex h-full items-center justify-center bg-black/50">
        <div class="w-full text-center">
          <h1 class="mb-6 text-4xl font-bold text-white sm:text-6xl" data-aos="fade-down">Search Projects</h1>
          <div class="mx-auto w-11/12 max-w-3xl px-4" data-aos="fade-up">
            <a-input
              v-model:value="searchText"
              placeholder="Search for projects..."
              size="large"
              class="search-input !text-lg"
              @search="onSearch"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="border-b bg-white p-4 shadow-sm sm:p-6">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap items-center gap-4">
          <a-select
            v-model:value="category"
            style="width: 200px"
            placeholder="Category"
            :options="[
              { value: 'all', label: 'All Categories' },
              { value: 'web', label: 'Web Development' },
              { value: 'mobile', label: 'Mobile Apps' },
              { value: 'design', label: 'UI/UX Design' }
            ]"
          />
          <a-select
            v-model:value="sortBy"
            style="width: 200px"
            placeholder="Sort by"
            :options="[
              { value: 'latest', label: 'Latest' },
              { value: 'oldest', label: 'Oldest' },
              { value: 'popular', label: 'Most Popular' }
            ]"
          />
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="p-4 sm:p-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 text-center">
          <h2 class="text-2xl font-bold text-gray-800 sm:text-3xl" data-aos="fade-up">Featured Projects</h2>
          <p class="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Discover our latest works and creative solutions
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          <div
            v-for="i in 6"
            :key="i"
            class="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <div class="relative overflow-hidden">
              <img
                :src="getImageUrl(i)"
                :alt="'Project ' + i"
                class="h-48 w-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100"
              >
                <a-button type="primary" ghost>View Details</a-button>
              </div>
            </div>
            <div class="p-6">
              <h3 class="mb-2 text-xl font-semibold">Project Title {{ i }}</h3>
              <p class="mb-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div class="flex flex-wrap gap-2">
                <a-tag color="blue">Vue.js</a-tag>
                <a-tag color="green">Tailwind</a-tag>
                <a-tag color="purple">TypeScript</a-tag>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-10 flex justify-center" data-aos="fade-up">
          <a-pagination v-model:current="currentPage" :total="50" show-quick-jumper />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 搜索相关的响应式变量
const searchText = ref('')
const category = ref('all')
const sortBy = ref('latest')
const currentPage = ref(1)

// 搜索方法
const onSearch = value => {
  console.log('搜索:', value)
}

const images = {
  1: await import('@/assets/images/portfolio-1.jpg'),
  2: await import('@/assets/images/portfolio-2.jpg'),
  3: await import('@/assets/images/portfolio-3.jpg'),
  4: await import('@/assets/images/portfolio-4.jpg'),
  5: await import('@/assets/images/portfolio-5.jpg'),
  6: await import('@/assets/images/portfolio-6.jpg')
}

const getImageUrl = index => {
  return images[index]?.default || '/images/default.jpg'
}
// SEO
useSeoMeta({
  title: 'Search Projects',
  ogTitle: 'Search Projects - Portfolio',
  description: 'Search and discover amazing web development projects and creative solutions.',
  ogDescription: 'Browse through our collection of web development projects and creative solutions.',
  ogImage: 'https://example.com/search-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style lang="scss" scoped>
.bg-search {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/images/search-bg.jpg');
}
</style>
