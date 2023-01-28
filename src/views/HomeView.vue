<template>

  <body>
    <main class="p-6 bg-black">
      <div
        class="flex justify-center align-middle max-w-fit border-solid rounded-lg border-red border-4 overflow-auto mt-16">
        <swiper :scrollbar="true" :navigation="true" :autoplay="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img className="object-fill w-full h-96" src="@/assets/images/pc_home.png" alt="image slide 1" />
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
            <img className="object-fill w-full h-96" src="@/assets/images/pc2.jpg" alt="image slide 4" />
          </swiper-slide>
        </swiper>
      </div>
      <!-- Cards -->
      <div class="flex flex-row justify-between mt-6">
        <div class="flex justify-center border-solid rounded-lg border-red border-4 overflow-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center border-solid rounded-lg border-red border-4 overflow-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center border-solid rounded-lg border-red border-4 overflow-auto">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
          </div>
        </div>
      </div>
      <!--Cards-->
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
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
// import required modules
import { Navigation, Scrollbar, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Scrollbar, Autoplay],
    };
  },
};
</script>
