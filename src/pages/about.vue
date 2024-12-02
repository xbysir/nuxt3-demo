<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-blue-600 to-blue-800 py-20 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="mb-4 text-5xl font-bold" data-aos="fade-down">About Me</h1>
          <p class="mx-auto max-w-2xl text-xl text-blue-100" data-aos="fade-up">
            Passionate developer with a love for creating beautiful and functional web applications
          </p>
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center">
          <div class="mb-8 w-full md:mb-0 md:w-1/3" data-aos="fade-right">
            <img
              v-Mlazy:img="'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'"
              alt="Profile"
              class="mx-auto rounded-full shadow-lg"
            />
          </div>
          <div class="w-full md:w-2/3 md:pl-12" data-aos="fade-left">
            <h2 class="mb-6 text-3xl font-bold text-gray-800">Who I Am</h2>
            <p class="mb-4 text-lg text-gray-600">
              With over 5 years of experience in web development, I specialize in creating modern and responsive web
              applications using Vue.js, Nuxt, and other cutting-edge technologies.
            </p>
            <div class="mt-8 flex space-x-4">
              <a href="#" class="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                >Download CV</a
              >
              <a
                href="#"
                class="rounded-full border-2 border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50"
                >Contact Me</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-12 text-center text-3xl font-bold text-gray-800" data-aos="fade-up">My Skills</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="mb-4 text-4xl text-blue-600">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Frontend Development</h3>
            <p class="text-gray-600">Vue.js, React, Tailwind CSS, JavaScript, TypeScript</p>
          </div>

          <div
            class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="mb-4 text-4xl text-blue-600">
              <i class="fas fa-server"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Backend Development</h3>
            <p class="text-gray-600">Node.js, Express, PHP, MySQL, MongoDB</p>
          </div>

          <div
            class="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mb-4 text-4xl text-blue-600">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Mobile Development</h3>
            <p class="text-gray-600">React Native, Flutter, Mobile-First Design</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-12 text-center text-3xl font-bold text-gray-800" data-aos="fade-up">Work Experience</h2>
        <div class="relative space-y-8">
          <!-- Timeline line -->
          <div class="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-200"></div>

          <!-- Timeline items -->
          <div class="relative flex items-center justify-between" data-aos="fade-right">
            <div class="w-5/12 pr-8 text-right">
              <h3 class="text-xl font-bold text-gray-800">Senior Developer</h3>
              <p class="text-gray-600">2020 - Present</p>
              <p class="mt-2 text-gray-600">Led development team in creating enterprise web applications</p>
            </div>
            <div class="absolute left-1/2 z-10 -ml-2 h-4 w-4 rounded-full bg-blue-600"></div>
            <div class="w-5/12 pl-8"></div>
          </div>

          <div class="relative flex items-center justify-between" data-aos="fade-left">
            <div class="w-5/12 pr-8"></div>
            <div class="absolute left-1/2 z-10 -ml-2 h-4 w-4 rounded-full bg-blue-600"></div>
            <div class="w-5/12 pl-8">
              <h3 class="text-xl font-bold text-gray-800">Web Developer</h3>
              <p class="text-gray-600">2018 - 2020</p>
              <p class="mt-2 text-gray-600">Developed and maintained multiple client websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-900 py-16 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="mb-8 text-3xl font-bold" data-aos="fade-up">Get In Touch</h2>
          <div class="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
            <div class="text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="mb-4 text-3xl text-blue-400">
                <i class="fas fa-envelope"></i>
              </div>
              <p>example@email.com</p>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="mb-4 text-3xl text-blue-400">
                <i class="fas fa-phone"></i>
              </div>
              <p>+1 234 567 890</p>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="mb-4 text-3xl text-blue-400">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Me',
  ogTitle: 'About Me - Developer Portfolio',
  description: 'Learn more about my experience, skills, and projects in web development.',
  ogDescription: 'Professional web developer with expertise in Vue.js, React, and Node.js.',
  ogImage: 'https://example.com/about-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
/* 如果需要的话，这里可以添加自定义样式 */
</style>
