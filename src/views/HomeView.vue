<template>
<link href="https://fonts.cdnfonts.com/css/son-of-a-glitch" rel="stylesheet">
  <body>
    <main class="p-1 bg-black">
      <div class="flex justify-center align-middle max-w-fit mt-16">
        <swiper :scrollbar="true" :navigation="true" :autoplay="true" :modules="modules" :loop="true" class="mySwiper">
          <swiper-slide>
            <div class=" overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- Cards -->
      <div class="flex flex-row justify-between mt-6 p-10">
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="@/assets/images/cooler.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">PC</h5>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="flex justify-center  overflow-hidden max-h-fit max-w-xs w-64">
          <div class=" shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class=" w-full" src="@/assets/images/builder.png" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">BUILDER</h5>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="flex justify-center  overflow-hidden max-h-fit max-w-xs w-64">
          <div class=" shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="@/assets/images/teclado.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">KEYBOARDS</h5>
            </div>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class=" w-full" src="@/assets/images/mouse_gaming.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">MOUSE</h5>
            </div>
          </div>
        </div>
        <!-- Card 5 -->
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">PC</h5>
            </div>
          </div>
        </div>
        <!-- Card 6 -->
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">PC</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- /Cards -->
      <!-- Tipus de PC -->
      <div class="flex flex-row justify-between p-11">
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96 overflow-hidden">
              <a href="#!">
                <img class="w-full" src="@/assets/images/pc_entero.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC GAMING</h5>
            </div>
          </div>
        </div>
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96">
              <a href="#!">
                <img class="w-full" src="@/assets/images/pc_entero2.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC FOR EDITION</h5>
            </div>
          </div>
        </div>
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96 overflow-hidden">
              <a href="#!">
                <img class="w-full" src="@/assets/images/pc_entero3.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC FOR PROGRAMMERS</h5>
            </div>
          </div>
        </div>
        <div class="flex justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96">
              <a href="#!">
                <img class="w-full" src="@/assets/images/house.png" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC FOR DAILY USE</h5>
            </div>
          </div>
        </div>
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
h5{
  font-family: 'Son Of A Glitch', sans-serif;
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
