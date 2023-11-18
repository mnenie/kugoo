<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import { useCart } from '@/stores/cart';
defineProps<{
  cards: ICards[],
  style: string
}>()
const cart = useCart()
const addIndexCart = () => {
  cart.addIndex()
}
</script>

<template>
  <div class="cards_block">
    <div class="container">
      <div :style="style" class="cards">
        <div v-for="card in cards" :key="card.id" class="card_item">
          <div class="cards_img-container">
            <img class="img_main" :src="card.img" alt="">
          </div>
          <div class="cards_text-container">
            <h1 class="catalog_1">{{ card.title }}</h1>
            <div class="icons_block">
              <div class="icon_item">
                <img :src="card.accumSvg" alt="">
                <span class="catalog_2">{{ card.accum }}</span>
              </div>
              <div class="icon_item">
                <img :src="card.powerSvg" alt="">
                <span class="catalog_2">{{ card.power }}W</span>
              </div>
              <div class="icon_item">
                <img :src="card.speedSvg" alt="">
                <span class="catalog_2">{{ card.speed }}</span>
              </div>
              <div class="icon_item">
                <img :src="card.timeSvg" alt="">
                <span class="catalog_2">{{ card.time }}</span>
              </div>
            </div>
            <div class="bottom_category">
              <div class="price_container">
                <div class="price">
                  <span class="catalog_3">{{ card.sale }} ₽</span>
                  <span class="catalog_4">{{ card.price }} ₽</span>
                </div>
                <div class="cart">
                  <div v-if="card.basket">
                    <img :src="card.basket" alt="">
                  </div>
                  <div>
                    <img :src="card.heart" alt="">
                  </div>
                </div>
              </div>
              <btn-card-yellow style="margin: 0 auto; display: block; width: 100%;" v-if="!card.basket">Оформить
                предзаказ</btn-card-yellow>
              <btn-card-purple @click="addIndexCart" style="margin: 0 auto; display: block; width: 100%;" v-else>Купить в
                1
                клик</btn-card-purple>
            </div>
          </div>
          <div v-if="card.rec" class="block_news catalog_3"
            :style="[card.rec === 'ХИТ' ? 'background: var(--pink-color)' : 'background: var(--green-color)']">
            {{ card.rec }}
          </div>
          <div v-if="card.balance" class="balance">
            <img :src="card.balance" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards_block {
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    .card_item {
      position: relative;
      width: 255px;
      // min-height: 492px;
      border-radius: 11px;
      border: 1.5px solid #EAEBED;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .block_news {
        position: absolute;
        z-index: 0;
        top: 10px;
        left: 10px;
        z-index: 0;
        border-radius: 5px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--white-color);
        padding: 4px 9px;
      }

      .balance {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        padding: 8px 10px 11px 8px;
        z-index: 99;
      }

      .cards_img-container {
        height: 231px;
        background: rgba(240, 241, 245, 1);
        padding: 27px 0 22px 0;
        border-radius: 10px 10px 0px 0px;

        & img {
          display: block;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          height: 180px;
          width: 190px;
        }
      }

      .cards_text-container {
        padding: 20px 25px;

        & h1 {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          color: var(--black-color);
          margin-bottom: 20px;
        }

        .icons_block {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 19px;
          row-gap: 10px;

          .icon_item {
            display: flex;
            gap: 10px;
            align-items: center;

            & span {
              white-space: nowrap;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              color: var(--gray-600-color);
            }
          }
        }

        .price_container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 26px;
          margin-bottom: 16px;

          .price {
            display: flex;
            flex-direction: column;

            & span {
              &:first-child {
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration: line-through;
                color: var(--gray-600-color);
              }

              &:last-child {
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                color: var(--black-color);
              }
            }
          }

          .cart {
            display: flex;
            align-items: center;
            gap: 10px;

            & div {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid var(--gray-200-color);
              padding: 10px 10px 10px 9px;

              & img {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .cards_block {
    .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .card_item {
        max-width: 350px;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .cards_block {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      .card_item {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .cards_block {
    .cards {
      gap: 15px;

      .card_item {
        max-width: 400px;

        .cards_img-container {
          & img {
            height: 160px !important;
            width: 170px !important;
          }
        }
      }
    }
  }
}
</style>@/store/cart