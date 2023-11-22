<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';

// import required modules
import {Autoplay, Grid, Pagination } from 'swiper/modules';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';


const modules = [Autoplay, Grid, Pagination]
const imgs = ref([
  {
    id: 1,
    img: '/img/slider/1.png',
  },
  {
    id: 2,
    img: '/img/slider/2.png',
  },
  {
    id: 3,
    img: '/img/slider/3.png',
  },
  {
    id: 4,
    img: '/img/slider/4.png',
  },
  {
    id: 5,
    img: '/img/slider/5.png',
  },
  {
    id: 6,
    img: '/img/slider/6.png',
  },

  {
    id: 7,
    img: '/img/slider/7.png',
  },
  {
    id: 8,
    img: '/img/slider/8.png',
  },
  {
    id: 9,
    img: '/img/slider/9.png',
  },
  {
    id: 10,
    img: '/img/slider/10.png',
  },
  {
    id: 11,
    img: '/img/slider/11.png',
  },
  {
    id: 12,
    img: '/img/slider/12.png',
  },
  {
    id: 13,
    img: '/img/slider/13.png',
  },

  {
    id: 14,
    img: '/img/slider/14.png',
  },
  {
    id: 15,
    img: '/img/slider/15.png',
  },
  {
    id: 16,
    img: '/img/slider/16.png',
  },
])

const swiperOptions = ref({
  slidesPerView: 5,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  grabCursor: true,
  modules: modules,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const updateSlidesPerView = () => {
  const screenWidth = window.innerWidth;
  if(screenWidth < 650){
    swiperOptions.value.slidesPerView = 2;
  } else if (screenWidth < 890) {
    swiperOptions.value.slidesPerView = 3;
  } else if (screenWidth < 992) {
    swiperOptions.value.slidesPerView = 4;
  } else {
    swiperOptions.value.slidesPerView = 5;
  }
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

watch(
  () => window.innerWidth,
  () => {
    updateSlidesPerView();
  }
)
</script>

<template>
<swiper
    v-bind="swiperOptions"
    class="swiper"
  >
   <swiper-slide v-for="img in imgs" :key="img.id">
    <img style="border-radius: 10px;" :src="img.img" alt="">
   </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  // width: 374px !important;
  height: calc((100% - 56px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media screen and (max-width: 1200px){
  .swiper{
    height: 450px;
  }
  .swiper-slide{
    height: calc((100% - 20px) / 2) !important;
  }
}
@media screen and (max-width: 650px){
  .swiper{
    height: 500px;

  }
}


</style>