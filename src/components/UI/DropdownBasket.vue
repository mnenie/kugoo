<script setup lang="ts">
import { basketItems } from '@/mocks/basketDropdown';
import { useCart } from '@/stores/cart';
import { ref } from 'vue';

const cards = ref(basketItems);
const cart = useCart()
</script>

<template>
  <div v-if="cart.flBasket" class="dropdown_basket">
    <div class="block_basket">
      <div class="title_basket">
        <h1>В вашей корзине</h1>
        <span>2 товара</span>
      </div>
      <div v-for="card in cards" :key="card.id" class="card_in_basket">
        <div class="block_about">
          <img :src="card.img" alt="">
          <div class="text_about">
            <span>{{ card.title }}</span>
            <div class="price_content">
              <span>{{ card.price }} ₽</span>
              <span>1 шт.</span>
            </div>
          </div>
        </div>
        <img src="/icons/delete.svg" alt="">
      </div>
    </div>
    <div class="bottom_basket">
      <div class="total">
        <span>Сумма: </span>
        <span>59 800 ₽</span>
      </div>
      <btn-card-purple>Оформить заказ</btn-card-purple>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown_basket {
  position: absolute;
  z-index: 120;
  top: 80px;
  right: 170px;
  max-width: 304px;
  max-height: 270px;
  height: auto;
  width: 100%;
  background: var(--white-color);

  .block_basket {
    display: flex;
    flex-direction: column;
    max-height: 270px;
    height: auto !important;
    overflow-y: scroll;
    border-radius: 5px;

    .title_basket {
      display: flex;
      justify-content: space-between;
      padding: 17px 20px;
      background: var(--btn-gray-color);

      & h1 {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }

      & span {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
      }
    }

    .card_in_basket {
      display: flex;
      justify-content: space-between;
      padding: 15px 20px;
      border-bottom: 1px solid var(--gray-200-color);

      .block_about {
        display: flex;
        gap: 12px;

        & img {
          width: 49px;
          height: 49px;
          border-radius: 50%;
          background: var(--btn-gray-color);
        }

        .text_about {
          display: flex;
          flex-direction: column;
          gap: 2px;

          .price_content {
            display: flex;
            align-items: center;
            gap: 13px;
          }
        }
      }
    }
  }

  .bottom_basket {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white-color);
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.10);
    padding: 18px 20px;

    .total {
      display: flex;
      flex-direction: column;

      & span {
        &:first-child {
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--gray-600-color);
        }

        &:last-child {
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--black-color);
        }
      }
    }
  }
}
</style>@/store/cart