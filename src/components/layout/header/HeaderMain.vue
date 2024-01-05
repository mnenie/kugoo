<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DropdownCards from '@/components/UI/DropdownCards.vue';
import { useRouter } from 'vue-router';
import { BASKET_ROUTE } from '@/utils/consts'
import DropdownHeader from './DropdownHeader.vue';
import DropdownBasket from '@/components/UI/DropdownBasket.vue';
import HeaderTablet from './HeaderTablet.vue';
import RoundCart from '@/components/UI/RoundCart.vue';
import HeaderBtn from './HeaderBtn.vue'
import { useInput } from '@/stores/search';
import RoundGreenAuth from '@/components/UI/RoundGreenAuth.vue';
import RoundSmall from '@/components/UI/RoundSmall.vue';
import ComparisonRound from '@/components/UI/ComparisonRound.vue';

defineProps<{
  shopItems: any[]
}>()
const emit = defineEmits<{
  (e: 'rightPart', index: number): void
}>()
const router = useRouter()

const screenWidth = ref(window.innerWidth);
const isScreenSmall = ref(screenWidth.value < 990);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  isScreenSmall.value = screenWidth.value < 990;
};
const scrollY = ref(window.scrollY);
const offset = ref(100);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
});

const inputMain = useInput()
const inputCatalog = () => {
  inputMain.inputCatalog()
}
const searchThis = () => {
  inputMain.searchThis()
}
</script>

<template>
  <div v-if="!isScreenSmall" :class="{ 'main_display': true, 'fixed': scrollY > offset }" class="main_display">
    <div class="container">
      <div class="main_display-content">
        <router-link style="text-decoration: none;" to="/">
          <h1 class="size_2" style="cursor: pointer;">Kugoo</h1>
        </router-link>
        <HeaderBtn />
        <form style="position: relative;" @submit.prevent>
          <input @input="inputCatalog" v-model.trim="inputMain.search" @focus="inputMain.focus"
            @mousedown="inputMain.mouseDown" @keyup.enter="inputMain.stopForm" placeholder="Искать самокат KUGOO">
          <button @click="searchThis" class="btn-1">
            <img src="/icons/search.svg" alt="">
          </button>
          <DropdownHeader />
          <DropdownCards />
        </form>
        <div class="shop_block">
          <img class="img" @click="emit('rightPart', index)" v-for="(shopItem, index) in shopItems" :src="shopItem.img"
            alt="" :key="shopItem.id">
            <RoundGreenAuth style="position: absolute; left: 10px; top: 5px;" />
            <RoundSmall style="position: absolute; left: 132px; top: 5px;"  />
            <ComparisonRound style="position: absolute; left: 92px; top: 5px;" />
          <button style="position: relative;" class="basket size_7" @click="router.push(BASKET_ROUTE)">
            <img src="/icons/shopping-cart.svg" alt="">
            Корзина
            <RoundCart style="position: absolute; left: 25px; top: 4px;" />
          </button>
          <DropdownBasket />
        </div>
      </div>
    </div>
  </div>
  <HeaderTablet v-else :shop-items="shopItems" @right-part="emit('rightPart', $event)" />
</template>

<style lang="scss" scoped>
.main_display {
  position: relative;
  backface-visibility: hidden;
  

  &:not(.fixed) {
    padding: 27px 0 34px 0;
  }
  &.fixed {
    padding: 20px 0;
    transform: translateZ(0);
  }

  &-content {
    display: flex;
    align-items: center;

    & h1 {
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--black-color);
      margin-right: 35px;
    }
  }
}

form {
  width: 583px;
  height: 40px;
  position: relative;
  margin-right: 47px;

  & input {
    width: 100%;
    height: 40px;
    border: 2px solid var(--purple-color);
    border-radius: 5px;
    padding-left: 100px;
    outline: none;
  }

  .btn-1 {
    position: absolute;
    border-radius: 5px;
    border: 1.5px solid var(--purple-color);
    background: var(--purple-color);
    top: 0;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transition: 0.15s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 1.5px solid rgba(129, 133, 249, 1);
      background: rgba(129, 133, 249, 1);
    }
  }

  .btn-2 {
    position: absolute;
    left: 4px;
    top: 4px;
    bottom: 4px;
    width: 76px;
    height: 32px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px;
    background: var(--btn-gray-color);
    border: none;
    color: var(--black-color);
  }
}

.shop_block {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  & img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  & button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    height: 40px;
    border-radius: 100px;
    background: var(--btn-gray-color);
    border: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
  }
}

.basket {
  transition: 0.15s ease;

  &:hover {
    color: var(--purple-color);
  }
}

.round_cart {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: var(--pink-color);
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: var(--white-color);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 10px 40px #41464c12;
}

.img{
  position: relative;
}
</style>