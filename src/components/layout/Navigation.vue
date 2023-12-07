<script setup lang="ts">
import { ref } from 'vue';
import type { INavigation } from '@/types/ui.interface';
import { useRouter } from 'vue-router';
import {HOME_ROUTE, CATALOG_ROUTE, BASKET_ROUTE, FAVOURITES_ROUTE, COMPARISON_ROUTE} from '@/utils/consts'
import RoundCart from '@/components/UI/RoundCart.vue';

const navigations = ref<INavigation[]>([
  {
    id: 1,
    img: '/Kugoo/icons/navigation/home.svg',
    title: 'Главная',
  },
  {
    id: 2,
    img: '/Kugoo/icons/navigation/search.svg',
    title: 'Каталог',
  },
  {
    id: 3,
    img: '/Kugoo/icons/navigation/cart.svg',
    title: 'Корзина',
  },
  {
    id: 4,
    img: '/Kugoo/icons/navigation/heart.svg',
    title: 'Избранное',
  },
  {
    id: 5,
    img: '/Kugoo/icons/navigation/balance.svg',
    title: 'Сравнить',
  }
])
const router = useRouter()
const nextNavi = (index: number) => {
  switch (index) {
    case 0:
      router.push(HOME_ROUTE)
      break;
    case 1:
      router.push(CATALOG_ROUTE)
      break;
    case 2:
      router.push(BASKET_ROUTE)
      break;
    case 3:
      router.push(FAVOURITES_ROUTE)
      break;
    case 4:
      router.push(COMPARISON_ROUTE)
      break;
  }
}
</script>

<template>
  <div style="max-width: 100%; width: 100%; background: var(--white-color);" class="navi_mobile">
    <div class="navi_blocks">
      <div @click="nextNavi(index)" v-for="(navi, index) in navigations" :key="navi.id" class="navi_block">
        <img :src="navi.img" alt="">
        <span>{{ navi.title }}</span>
      </div>
      <RoundCart style="position: absolute; left: 50%; top: 7px;" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navi_mobile {
  position: fixed;
  bottom: 0;
  display: none;
  z-index: 999;

  .navi_blocks {
    width: 100%;
    padding: 8px 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .navi_block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;

      & img {
        width: 30px;
        height: 30px;
      }

      & span {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
      }
    }
  }
}
@media screen and (max-width: 540px){
  .navi_mobile{
    display: block;
  }
}
</style>