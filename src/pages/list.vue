<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-list h-[40vh] bg-cover bg-center sm:h-[50vh]">
      <div class="flex h-full items-center justify-center bg-black/50">
        <div class="w-full text-center">
          <h1 class="mb-6 text-4xl font-bold text-white sm:text-6xl" data-aos="fade-down">Blog Articles</h1>
          <p class="mx-auto w-11/12 max-w-3xl text-lg text-white/90 sm:text-xl" data-aos="fade-up">
            Discover insights about web development, design, and technology
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="border-b bg-white p-4 shadow-sm sm:p-6">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a-button
            v-for="category in categories"
            :key="category.value"
            :type="currentCategory === category.value ? 'primary' : 'default'"
            class="min-w-[100px]"
            @click="currentCategory = category.value"
          >
            {{ category.label }}
          </a-button>
        </div>
      </div>
    </section>

    <!-- Article List -->
    <section class="mx-auto max-w-7xl p-4 sm:p-10">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Featured Article -->
        <div
          class="col-span-1 overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl md:col-span-2 lg:col-span-3"
          data-aos="fade-up"
        >
          <div class="flex flex-col md:flex-row">
            <div class="relative md:w-1/2">
              <img :src="getImageUrl(3)" alt="Featured Article" class="h-64 w-full object-cover md:h-full" />
              <div class="absolute left-4 top-4">
                <a-tag color="blue">Featured</a-tag>
              </div>
            </div>
            <div class="flex flex-col justify-center p-6 md:w-1/2">
              <div class="mb-3 flex items-center gap-2 text-sm text-gray-500">
                <CalendarOutlined /> March 15, 2024 <EyeOutlined /> 1.2K Views
              </div>
              <h2 class="mb-4 text-2xl font-bold sm:text-3xl">Getting Started with Vue 3 Composition API</h2>
              <p class="mb-6 text-gray-600">
                Learn how to leverage the power of Vue 3 Composition API to build more maintainable and scalable
                applications. We'll cover setup function, refs, reactive state, and more.
              </p>
              <a-button type="primary">Read More</a-button>
            </div>
          </div>
        </div>

        <!-- Regular Articles -->
        <div
          v-for="i in 6"
          :key="i"
          class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="relative">
            <img :src="getImageUrl(i)" :alt="`Article ${i}`" class="h-48 w-full object-cover" />
            <div class="absolute left-4 top-4">
              <a-tag :color="tagColors[i % tagColors.length]">{{ categories[i % categories.length].label }}</a-tag>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <CalendarOutlined /> March {{ 15 + i }}, 2024 <EyeOutlined />
              {{ Math.floor(Math.random() * 900 + 100) }} Views
            </div>
            <h3 class="mb-3 text-xl font-bold">{{ articleTitles[i - 1] }}</h3>
            <p class="mb-4 text-sm text-gray-600">
              {{ articleDescriptions[i - 1] }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <a-avatar src="https://api.dicebear.com/7.x/avatars/svg" />
                <span class="text-sm text-gray-600">John Doe</span>
              </div>
              <a-button type="link">Read More →</a-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-10 flex justify-center" data-aos="fade-up">
        <a-pagination v-model:current="currentPage" :total="50" show-quick-jumper />
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gray-900 p-6 text-white sm:p-10">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mb-4 text-2xl font-bold sm:text-3xl" data-aos="fade-up">Subscribe to Our Newsletter</h2>
        <p class="mb-6 text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Get the latest articles and news delivered to your inbox weekly
        </p>
        <div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="200">
          <a-input placeholder="Enter your email" size="large" class="flex-1" />
          <a-button type="primary" size="large">Subscribe</a-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons-vue'

const currentCategory = ref('all')
const currentPage = ref(1)

const categories = [
  { value: 'all', label: 'All' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'nodejs', label: 'Node.js' }
]

const tagColors = ['blue', 'green', 'purple', 'magenta', 'cyan', 'orange']

const articleTitles = [
  'Understanding JavaScript Promises',
  'Vue 3 Performance Optimization Tips',
  'Building Scalable Node.js Applications',
  'TypeScript Best Practices in 2024',
  'React Server Components Explained',
  'Modern CSS Tips and Tricks'
]

const articleDescriptions = [
  'Deep dive into JavaScript Promises and async/await patterns for better asynchronous code.',
  'Learn how to optimize your Vue 3 applications for better performance and user experience.',
  'Discover patterns and practices for building large-scale Node.js applications.',
  'Essential TypeScript tips and patterns for modern web development.',
  'Understanding the new React Server Components and their benefits.',
  'Modern CSS techniques and best practices for responsive web design.'
]

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
  title: 'Blog Articles',
  ogTitle: 'Blog Articles - Web Development Insights',
  description: 'Read the latest articles about web development, design, and technology.',
  ogDescription: 'Discover insights about web development, design, and technology in our blog.',
  ogImage: 'https://example.com/blog-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style lang="scss" scoped>
.bg-list {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/images/list-bg.jpg');
}
</style>
