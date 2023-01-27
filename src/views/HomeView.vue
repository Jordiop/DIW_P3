<template>
  <body>
    <main class="p-6 bg-black">
      <div class="flex justify-center align-middle max-w-fit border-solid rounded-lg border-red border-4 overflow-auto mt-16">
        <swiper :scrollbar="true" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img className="object-fill w-full h-128" src="@/assets/images/pc_home.png" alt="image slide 1" />
          </swiper-slide>
          <swiper-slide>
            <img className="object-fill w-full h-96"
              src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg" alt="image slide 2" />
          </swiper-slide>
          <swiper-slide>
            <img className="object-fill w-full h-96"
              src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg" alt="image slide 3" />
          </swiper-slide>
          <swiper-slide>
            <img className="object-fill w-full h-96"
              src="@/assets/images/pc2.jpg" alt="image slide 4" />
          </swiper-slide>
        </swiper>
      </div>
    </main>
  </body>
</template>
<style>
.mySwiper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
