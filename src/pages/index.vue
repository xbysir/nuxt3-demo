<template>
  <div id="home-page">
    <!-- bg -->
    <section class="bg-home h-screen bg-cover bg-center sm:min-h-screen">
      <div class="w-full text-center text-white">
        <div class="mx-auto">
          <div class="mb-14 flex items-center justify-center pt-20 sm:mb-24 sm:pt-20" data-aos="fade-right">
            <img src="../assets/images/logo-big.png" alt="..." width="130" />
          </div>
          <h1 class="mb-12 text-6xl text-white" data-aos="fade-left">NUXT 3 NUXT!</h1>
          <p class="m-auto w-7/12 pb-4 text-3xl" data-aos="fade-left">WELCOME NUXT3 WORLD!</p>
        </div>
      </div>
    </section>
    <!-- about -->
    <section class="overflow-hidden p-10">
      <div class="title mb-4 text-center">
        <div
          class="inline-block py-3 text-4xl font-bold uppercase text-black"
          style="border-top: 1px solid #ccc; border-bottom: 1px solid #ccc"
          data-aos="fade-up"
        >
          About me
        </div>
      </div>
      <div class="content flex flex-col justify-center md:flex-row">
        <div class="content-left mb-6 w-full md:mb-0 md:mr-6 md:w-6/12" data-aos="fade-up-right">
          <p class="mb-2">
            An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now
            unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can
            admiration prosperous now devonshire diminution law.
          </p>
          <p class="mb-2">
            Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic
            to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too.
            Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate
            if. Mistake do produce beloved demesne if am pursuit.
          </p>
          <p class="mb-2">
            An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now
            unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can
            admiration prosperous now devonshire diminution law.
          </p>
        </div>
        <div class="content-right w-full md:w-6/12" data-aos="fade-up-left">
          <div class="item-progress mb-4">
            <div class="label text-xl">PHP</div>
            <a-progress :percent="80" status="active" :show-info="false" />
          </div>
          <div class="item-progress mb-4">
            <div class="label text-xl">Javascript</div>
            <a-progress :percent="50" status="active" :show-info="false" />
          </div>
          <div class="item-progress mb-4">
            <div class="label text-xl">HTML Coding</div>
            <a-progress :percent="70" status="active" :show-info="false" />
          </div>
          <div class="item-progress mb-4">
            <div class="label text-xl">SEO</div>
            <a-progress :percent="100" :show-info="false" />
          </div>
        </div>
      </div>
    </section>
    <!-- services -->
    <section class="bg-gray-600 p-10">
      <div class="title mb-4 text-center">
        <div
          class="inline-block py-3 text-4xl font-bold uppercase text-white"
          style="border-top: 1px solid #ccc; border-bottom: 1px solid #ccc"
          data-aos="fade-up"
        >
          SERVICES
        </div>
      </div>
      <div class="content" data-aos="zoom-out-up">
        <div class="row-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="col-lg-4 m-2 flex flex-col items-center">
            <CodeSandboxOutlined style="font-size: 60px; color: #fff" />
            <h3 class="mb-3 mt-2 text-xl text-white">Consulting</h3>
            <p class="text-xs text-white">
              On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he
              prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be
              abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness
              waiting regular led ham.
            </p>
          </div>
          <div class="col-lg-4 m-2 flex flex-col items-center">
            <Html5Outlined style="font-size: 60px; color: #fff" />
            <h3 class="mb-3 mt-2 text-xl text-white">HTML Coding</h3>
            <p class="text-xs text-white">
              On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he
              prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be
              abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness
              waiting regular led ham.
            </p>
          </div>
          <div class="col-lg-4 m-2 flex flex-col items-center">
            <SkypeOutlined style="font-size: 60px; color: #fff" />
            <h3 class="mb-3 mt-2 text-xl text-white">PHP webdelopment</h3>
            <p class="text-xs text-white">
              On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he
              prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be
              abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness
              waiting regular led ham.
            </p>
          </div>
        </div>
        <hr class="mt-12" />
        <div class="mt-4 text-center text-white" data-aos="zoom-in">
          <p class="lead text-2xl">Would you like to know more or just discuss something?</p>
          <a-button class="mt-4">Contact me</a-button>
        </div>
      </div>
    </section>
    <!-- My customers -->
    <section class="p-10">
      <div class="title mx-auto mb-4 text-center sm:w-1/2">
        <div
          class="inline-block py-3 text-4xl font-bold uppercase"
          style="border-top: 1px solid #ccc; border-bottom: 1px solid #ccc"
          data-aos="fade-up"
        >
          My customers said about me
        </div>
        <p class="mt-5 text-xl text-gray-400" data-aos="fade-up" data-aos-delay="300">
          I am always glad to hear that my customers leave satisfied. Some of them shared with you their insights on our
          cooperation.
        </p>
      </div>
      <div class="content" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <a-carousel effect="fade">
          <a-row class="sm:!flex">
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-1.jpg" alt="" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-4.jpg" alt="" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-5.jpg" alt="" />
            </a-col>
          </a-row>

          <a-row class="sm:!flex">
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-4.jpg" alt="" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-1.jpg" alt="" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img class="w-full object-cover" src="../assets/images/portfolio-5.jpg" alt="" />
            </a-col>
          </a-row>
        </a-carousel>
      </div>
    </section>
    <!-- statistics -->
    <section class="statistics-bg relative bg-cover bg-center sm:h-80">
      <div class="container mx-auto flex h-full flex-row items-center justify-center text-center">
        <div
          class="list mt-4 grid grid-cols-1 items-center justify-center gap-10 uppercase text-white sm:grid-cols-4 sm:flex-row sm:flex-wrap"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div class="items">
            <div class="mb-2">
              <RobotOutlined style="font-size: 40px" />
            </div>
            <div class="mb-1 text-2xl sm:text-3xl md:text-4xl">120</div>
            <p class="text-base sm:text-lg md:text-xl">Websites</p>
          </div>
          <div class="items">
            <div class="mb-2">
              <GitlabOutlined style="font-size: 40px" />
            </div>
            <div class="mb-1 text-2xl sm:text-3xl md:text-4xl">120</div>
            <p class="text-base sm:text-lg md:text-xl">Satisfied Clients</p>
          </div>
          <div class="items">
            <div class="mb-2">
              <AliyunOutlined style="font-size: 40px" />
            </div>
            <div class="mb-1 text-2xl sm:text-3xl md:text-4xl">120</div>
            <p class="text-base sm:text-lg md:text-xl">projects</p>
          </div>
          <div class="items">
            <div class="mb-2">
              <SlackOutlined style="font-size: 40px" />
            </div>
            <div class="mb-1 text-2xl sm:text-3xl md:text-4xl">120</div>
            <p class="text-base sm:text-lg md:text-xl">Magazines</p>
          </div>
        </div>
      </div>
    </section>
    <!-- back top -->
    <BackTop />
  </div>
</template>

<script setup>
import {
  CodeSandboxOutlined,
  Html5Outlined,
  SkypeOutlined,
  RobotOutlined,
  GitlabOutlined,
  AliyunOutlined,
  SlackOutlined
} from '@ant-design/icons-vue'
useSeoMeta({
  title: '首页',
  ogTitle: '我的神奇网站',
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>
<style lang="scss" scoped>
.bg-home {
  background-image: url('../assets/images/home.jpg');
}
.statistics-bg {
  background-image: url('../assets/images/parallax.jpg');
}
:deep(.ant-carousel .slick-slide) {
  text-align: center;
}

.show-animations {
  opacity: 0;
  transform: rotateY(180deg) scale(0.4);
  transition:
    opacity 1s ease,
    transform 1s ease;
  transform-style: preserve-3d;
}

.animate-up {
  opacity: 1;
  transform: rotateY(360deg) scale(1);
  transition:
    opacity 1s ease,
    transform 1s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style>
