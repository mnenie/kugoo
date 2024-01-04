<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { ICards } from '@/types/cards.interface';
import { useCart } from '@/stores/cart';
import { PAYMENT_ROUTE } from '@/utils/consts';
const router = useRouter()
defineProps<{
  card: ICards
}>()
const cart = useCart()
</script>

<template>
  <div class="banner_pay">
    <div class="price">
      <h1 class="size_1">{{ card.price }} руб.</h1>
      <div class="img">
        <img src="/icons/product/fav.svg" alt="">
      </div>
    </div>
    <div class="delivery">
      <img src="/icons/product/delivery.svg" alt="">
      <span style="font-weight: 400;" class="size_6"><span style="font-weight: 500;">Бесплатная доставка по РФ</span> от 1
        дня при заказе до 01.09</span>
    </div>
    <div v-if="card.basket" class="btns">
      <ButtonPurpleLg @click="router.push(PAYMENT_ROUTE)" class="btn">Купить в 1 клик</ButtonPurpleLg>
      <ButtonLgBorderPurple @click="cart.addToCart(card)" class="btn">Добавить в корзину</ButtonLgBorderPurple>
    </div>
    <div v-else style="text-align: center; color: var(--pink-color); margin-top: 40px;" class="no_content">
      нет в наличии
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner_pay {
  border-radius: 10px;
  background: var(--btn-gray-color);
  min-height: 282px;
  padding: 28px 30px;
  max-width: 100%;
  width: 100%;

  .price {
    padding-bottom: 22px;
    border-bottom: 1px solid var(--gray-200-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: var(--black-color);
    }

    .img {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border: 1px solid var(--gray-200-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .delivery {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 30px;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: var(--black-color);
      max-width: 210px;
    }
  }

  .btns {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    .btn {
      min-width: 200px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .banner_pay {
    .btns {
      justify-content: flex-start;
    }
  }
}
</style>