<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import QuantityBlock from './QuantityBlock.vue';
import { useCart } from '@/stores/cart';
const props = defineProps<{
  card: ICards
}>()

const cart = useCart()
</script>

<template>
  <div class="top_part">
    <div class="img_block">
      <div class="img">
        <img :src="card.img" alt="">
      </div>
      <div class="text">
        <p class="size_4">{{ card.title }}</p>
        <div class="bottom">
          <div class="status_block">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
              <circle cx="3.5" cy="3.5" r="3.5" fill="#75D14A" />
            </svg>
            <span class="size_8">В наличии</span>
          </div>
          <span class="size_8">+ 2 подарка</span>
        </div>
      </div>
    </div>
    <div class="block_inside">
      <QuantityBlock :id="card.id" />
      <div class="price_block">
        <h3 class="size_4">{{ cart.changeSum(card.id, card.price) }} ₽</h3>
        <img @click="cart.removeProductById(card.id)" style="cursor: pointer;" src="/icons/basket/delete.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top_part {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 43px;


  .img_block {
    display: flex;
    align-items: center;
    gap: 20px;

    .img {
      border-radius: 5.625px 5.625px 0px 0px;
      background: #F0F1F5;
      width: 75px;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        width: 70px;
        height: 70px;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 7px;

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
        max-width: 270px;
      }

      .bottom {
        display: flex;
        align-items: center;
        gap: 18px;

        .status_block {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--gray-600-color);
        }
      }
    }
  }

  .block_inside {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 59px;

    .price_block {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 59px;
    }

    & h3 {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--black-color);
    }
  }
}
@media screen and (max-width: 800px){
  .top_part{
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 30px;
    .block_inside{
      width: 100%;
      justify-content: space-between;
    }
  }
}
</style>