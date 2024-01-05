<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BASKET_ROUTE } from '@/utils/consts'
import DropdownHeader from './DropdownHeader.vue';
import DropdownCards from '@/components/UI/DropdownCards.vue';
import RoundCart from '@/components/UI/RoundCart.vue';
import RoundGreenAuth from '@/components/UI/RoundGreenAuth.vue';
import RoundSmall from '@/components/UI/RoundSmall.vue';
import { CATALOG_ROUTE } from '@/utils/consts';
import { useInput } from '@/stores/search';
import smoothScroll from '@/helpers/smoothScrollHelper';
import ComparisonRound from '@/components/UI/ComparisonRound.vue';

defineProps<{
  shopItems: any[]
}>()
const emit = defineEmits<{
  (e: 'rightPart', index: number): void
}>()
const router = useRouter()

const inputMain1 = useInput()
const inputCatalog = () => {
  inputMain1.inputCatalog()
}
const searchThis = () => {
  inputMain1.searchThis()
}
const scrollY = ref(window.scrollY);
const offset = ref(100);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const {smoothScrollToTop} = smoothScroll()
const goToCatalog = () => {
  router.push(CATALOG_ROUTE)
  smoothScrollToTop()
}
</script>

<template>
  <div class="main_display_new">
    <div class="container">
      <div class="main_display_new-content">
        <div :class="{'main_display_new-content_1': true, 'fixed': scrollY > offset}">
          <div style="display: flex; align-items: center;" class="catalog_new">
            <div class="catalog_modal">
              <button @click="goToCatalog" class="btn-catalog">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <!-- <DropdownCatalog @close-dropdown-route="closeRoute" :ul="dropdownFlag" /> -->
            </div>
            <router-link style="text-decoration: none;" to="/">
              <h1 class="size_2" style="cursor: pointer;">Kugoo</h1>
            </router-link>
          </div>
          <div class="shop_block">
            <i style="font-size: 20px; color: var(--black-color);" class='bx bx-glasses'></i>
            <img class="img" @click="$emit('rightPart', index)" v-for="(shopItem, index) in shopItems" :src="shopItem.img"
              alt="" :key="shopItem.id">
              <RoundGreenAuth style="position: absolute; left: 31px; top: 5px;" />
              <RoundSmall style="position: absolute; left: 152px; top: 5px;"  />
              <ComparisonRound style="position: absolute; left: 112px; top: 5px;" />
            <button style="position: relative;" class="basket size_7" @click="router.push(BASKET_ROUTE)">
              <img src="/icons/shopping-cart.svg" alt="">
              Корзина
              <RoundCart style="position: absolute; left: 25px; top: 4px;" />
            </button>
          </div>
        </div>
        <div class="main_display_new-content_2">
          <form @submit.prevent>
            <input v-model="inputMain1.search" @input="inputCatalog" @focus="inputMain1.focus" @mousedown="inputMain1.mouseDown" @keyup.enter="inputMain1.stopForm" placeholder="Искать самокат KUGOO">
            <button @click="searchThis" class="btn-1">
              <img src="/icons/search.svg" alt="">
            </button>
            <DropdownHeader />
            <DropdownCards />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_display_new {
  padding: 25px 0 25px 0;

  &-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &_1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: padding 0.2s ease;

      .btn-catalog {
        height: 40px;
        width: 40px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--white-color);
        display: flex;
        align-items: center;
        padding: 8px 15px 8px 11px;
        border-radius: 5px;
        border: 1.5px solid var(--purple-color);
        background: var(--purple-color);
        transition: 0.15s ease;
        margin-right: 20px;

        & div {
          display: flex;
          flex-direction: column;
          margin-bottom: 6px;
          margin-right: 13px;
          gap: 3px;
          position: relative;

          & span {
            width: 13px;
            height: 2px;
            background-color: var(--white-color);
            border-radius: 50px;

            &:last-child {
              position: absolute;
              bottom: -5px;
              right: 0px;
              width: 7px;
              height: 2px;
              display: block;
              transition: width 0.3s ease 0s, left 0.3s ease 0s;
              background: none repeat scroll 0 0 transparent;
              background: var(--white-color);
            }
          }
        }

        &:hover {
          background: rgba(129, 133, 249, 1);
          border: 1.5px solid rgba(129, 133, 249, 1);

          & span {
            &:last-child {
              width: 13px;
              right: 0px
            }
          }
        }
      }

      & h1 {
        text-transform: uppercase;
        // font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: var(--black-color);
        margin-right: 35px;
      }

      .shop_block {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;

        & img {
          cursor: pointer;
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
    }

    &_2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

form {
  width: 100%;
  height: 40px;
  position: relative;
  margin-right: 0;

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

.btn_focus {
  background: rgba(129, 133, 249, 1) !important;
  border: 1.5px solid rgba(129, 133, 249, 1) !important;

  & span {
    &:last-child {
      width: 13px !important;
      right: 0px !important;
    }
  }
}

.basket {
  transition: 0.15s ease;

  &:hover {
    color: var(--purple-color);
  }
}
.img{
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: var(--white-color);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 10px 40px #41464c12;
  padding: 20px 20px;
}
</style>