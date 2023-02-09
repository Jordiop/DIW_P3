<template>
  <link href="https://fonts.cdnfonts.com/css/son-of-a-glitch" rel="stylesheet">
  <body>
    <main class="p-1 bg-black">
      <div class="flex justify-center align-middle sm:max-w-fit mt-16">
        <swiper :scrollbar="true" :autoplay="true" :modules="modules" :loop="true" class="mySwiper">
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/home/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/home/slider1.jpg"
                alt="image slide 1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="overflow-y-hidden max-h-96">
              <img className="object-fill -mt-96 w-full h-full overflow-hidden" src="@/assets/images/home/slider1.jpg"
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
      <!-- Cards -->
      <div class="flex flex-col justify-center sm:flex-wrap md:flex-row sm:justify-between mt-6 sm:px-10">
        <div class="flex justify-center rounded-lg overflow-hidden max-h-fit max-w-md w:64 sm:max-w-xs sm:w-64 mb-1">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/cooler.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">PC</h5>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="flex justify-center rounded-lg  overflow-hidden max-h-fit max-w-md w:64 sm:max-w-xs sm:w-64 mb-1">
          <div class=" shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class=" w-full" src="@/assets/images/home/builder.png" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">BUILDER</h5>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="flex justify-center  rounded-lg  overflow-hidden max-h-fit max-w-md w:64 sm:max-w-xs sm:w-64 mb-1">
          <div class=" shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/teclado.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">KEYBOARDS</h5>
            </div>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="flex justify-center rounded-lg  overflow-hidden max-h-fit max-w-md w:64 sm:max-w-xs sm:w-64 mb-1">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class=" w-full" src="@/assets/images/home/mouse_gaming.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">MOUSE</h5>
            </div>
          </div>
        </div>
        <!-- Card 5 -->
        <div class="flex justify-center rounded-lg  overflow-hidden max-h-fit max-w-md w:64 sm:max-w-xs sm:w-64 mb-1">
          <div class="shadow-lg bg-white">
            <div class="max-h-fit">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/arduino.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">OTHER</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- /Cards -->
      <!-- Tipus de PC -->
      <!-- Slider mobile -->
      <div class="sm:hidden px-8">
        <div class="mb-4">
          <h5 class="text-center text-3xl font-bold text-white">CATEGORIES</h5>
        </div>
        <swiper :scrollbar="true" :navigation="true" :autoplay="true" :modules="modules" :loop="true" class="mySwiper">
          <swiper-slide>
            <div class="flex justify-center overflow-hidden max-h-fit max-w-xl w-80">
              <div class="shadow-lg bg-white">
                <div class="max-h-96">
                  <a href="#!">
                    <img class="w-full" src="@/assets/images/home/pc_entero.jpg" alt="" />
                  </a>
                </div>
                <div class="p-0 flex justify-center">
                  <h5 class="text-white text-xl font-medium ">PC GAMING</h5>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center overflow-hidden max-h-fit max-w-xl w-80">
              <div class="shadow-lg bg-white">
                <div class="max-h-96">
                  <a href="#!">
                    <img class="w-full" src="@/assets/images/home/pc_entero2.jpg" alt="" />
                  </a>
                </div>
                <div class="p-0 flex justify-center">
                  <h5 class="text-white text-xl font-medium ">PC FOR EDITING</h5>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center overflow-hidden max-h-fit max-w-xl w-80">
              <div class="shadow-lg bg-white">
                <div class="max-h-96">
                  <a href="#!">
                    <img class="w-full" src="@/assets/images/home/pc_entero3.jpg" alt="" />
                  </a>
                </div>
                <div class="p-0 flex justify-center">
                  <h5 class="text-white text-xl font-medium ">PC FOR PROGRAMMING</h5>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-center overflow-hidden max-h-fit max-w-xl w-80">
              <div class="shadow-lg bg-white">
                <div class="max-h-96">
                  <a href="#!">
                    <img class="w-full" src="@/assets/images/home/house.png" alt="" />
                  </a>
                </div>
                <div class="p-0 flex justify-center">
                  <h5 class="text-white text-xl font-medium ">PC FOR DAILY USE</h5>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="sm:flex flex-wrap hidden sm:flex-row justify-between p-20">
        <div class="flex rounded-lg justify-center overflow-hidden max-h-fit sm:max-w-xs w-64 ">
          <div class="shadow-lg bg-white">
            <div class="max-h-96 overflow-hidden">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/pc_entero.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC GAMING</h5>
            </div>
          </div>
        </div>
        <div class="flex rounded-lg justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/pc_entero2.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC FOR EDITION</h5>
            </div>
          </div>
        </div>
        <div class="flex rounded-lg justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96 overflow-hidden">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/pc_entero3.jpg" alt="" />
              </a>
            </div>
            <div class="p-0 flex justify-center">
              <h5 class="text-gray-900 text-xl font-medium ">PC FOR PROGRAMMERS</h5>
            </div>
          </div>
        </div>
        <div class="flex rounded-lg justify-center overflow-hidden max-h-fit max-w-xs w-64">
          <div class="shadow-lg bg-white">
            <div class="max-h-96">
              <a href="#!">
                <img class="w-full" src="@/assets/images/home/house.png" alt="" />
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

h5 {
  font-family: 'Son Of A Glitch', sans-serif;
}

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
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/scrollbar"
  import "swiper/css/autoplay"
  // import required modules
  import { Navigation, Scrollbar, Autoplay } from "swiper";
  import News from "@/components/News.vue";
  export default {
    components: {
      News,
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
