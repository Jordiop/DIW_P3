<template>
  <link href="https://fonts.cdnfonts.com/css/son-of-a-glitch" rel="stylesheet">

  <body>
    <main class="flex flex-col place-items-center justify-center bg-black">
      <div class="flex align-middle mt-16 rounded-lg overflow-hidden w-5/6">
        <swiper :modules="modules" :autoplay="true" :loop="true" class="mySwiper">
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="https://i.blogs.es/449eed/pc/1366_2000.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="https://media.steelseriescdn.com/thumbs/blog/posts/6-ways-to-make-your-pc-setup-look-awesome/5a5af93b19cd4be5ba8ce4cc27467856.jpg.1200x630_q100_crop-scale_optimize_upscale.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="https://www.gamingdebugged.com/wp-content/uploads/2021/09/purple-gaming-set-up-1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/home/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <Categories></Categories>
      <Builds></Builds>

    </main>
  </body>
</template>
<style>
/* h5 {
  font-family: 'Son Of A Glitch', sans-serif;
} */

.bg-gradient-cover {
  background-color: transparent;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.92));
  background-position-y: -1px;
}

.max-h-98 {
  max-height: 24.3rem;
}

.box-one>article:nth-child(1) {
  padding-top: 0;
  padding-bottom: 0.125rem;
  padding-right: 0.125rem;
}

.box-one>article:nth-child(2) {
  padding-top: 0;
  padding-bottom: 0.125rem;
  padding-left: 0.125rem;
}

.box-one>article:nth-child(3) {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-right: 0.125rem;
}

.box-one>article:nth-child(4) {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.125rem;
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Builds from "@/components/Builds.vue"
import Categories from "@/components/Categories.vue"
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"
// import required modules
import { Navigation, Scrollbar, Autoplay } from "swiper";
export default {
  components: {
    Builds,
    Categories,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
