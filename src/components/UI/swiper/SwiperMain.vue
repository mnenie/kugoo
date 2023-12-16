<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref } from 'vue';
import { useSwiperStore } from '@/stores/swiper';
import { useInput } from '@/stores/search';
const modules = [Autoplay, Pagination, Navigation]
const swilderItems = ref([
  {
    id: 1,
    title: 'Электросамокаты Kugoo Kirin от официального дилера',
    body: 'с бесплатной доставкой по РФ от 1 дня'
  },
  {
    id: 2,
    title: 'Электросамокаты Kugoo Kirin RU производства',
    body: 'доставка по РФ абсолютна бесплатна!'
  },
  {
    id: 3,
    title: 'Электросамокаты Kugoo Kirin EU производства',
    body: 'доставка в страны Европы за 10-20 дней'
  },
])
const store = useSwiperStore();
const inputMain = useInput();
const onSwiper = store.onSwiper;
</script>
<template>
  <swiper @swiper="onSwiper" :direction="'horizontal'" :loop="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :modules="modules" class="swiper">
    <swiper-slide @click="inputMain.changeDrop" v-for="item in swilderItems" :key="item.id">
      <h1 class="size_1">{{ item.title }}</h1>
      <p class="size_4">{{ item.body }}</p>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--white-color);
    max-width: 615px;
    margin-bottom: 7px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 992px) {
  .swiper {
    & h1{
      max-width: 562px;
    }
  }
}
@media screen and (max-width: 890px) {
  .swiper {
    & h1{
      max-width: 522px;
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper {
    & h1{
      max-width: 482px;
    }
  }
}
@media screen and (max-width: 720px) {
  .swiper {
    & h1{
      max-width: 452px;
    }
  }
}
@media screen and (max-width: 650px) {
  .swiper {
    & h1{
      max-width: 383px;
    }
    & p{
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 600px) {
  .swiper {
    & h1{
      max-width: 362px;
    }
  }
}
@media screen and (max-width: 540px) {
  .swiper {
    & h1{
      max-width: 348px;
    }
  }
}
</style>@/store/swiper@/store/mainInput@/stores/search