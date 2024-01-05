<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import { ref } from 'vue';
import { useComparison } from '@/stores/comparison';
const props = defineProps<{
  card: ICards
}>()
const count = ref<number>(196)

const comparison = useComparison()
</script>

<template>
  <div class="main_block">
    <h1 class="size_1">{{ card.title }}</h1>
    <div class="span_collection">
      <span class="size_8">Просмотров 350</span>
      <span class="size_8">Купили {{ count }} раз</span>
      <span class="size_8">Артикул: {{ card.article }}</span>
    </div>
    <div class="actions">
      <div class="ok_cont">
        <img v-if="card.basket" src="/icons/scooters/ok.svg" alt="">
        <img v-else src="/icons/scooters/no.svg" alt="">
        <span>{{ card.basket ? 'В наличии' : 'Нет в наличии' }}</span>
      </div>
      <div class="actions_1">
        <div @click="comparison.addComparisonProduct(card)" style="cursor: pointer;" class="balance">
          <img src="/icons/scooters/balance.svg" alt="">
          <span class="size_7">Сравнить</span>
        </div>
        <div class="share">
          <img src="/icons/scooters/share.svg" alt="">
          <span class="size_7">Поделиться</span>
        </div>
      </div>
    </div>
    <div class="price_content">
      <div class="price">
        <span class="size_7">{{ card.sale }} ₽</span>
        <span class="size_3">{{ card.price }} ₽</span>
      </div>
      <div class="banner_price">
        <img src="/icons/scooters/card.png" alt="">
        <div class="text">
          <span class="size_8">Рассрочка:</span>
          <span class="size_7">{{ (Number(card.price.replace(/\s/g, '')) / 24).toFixed(0) }} ₽ в месяц / 24 месяца</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .span_collection {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    max-width: 353px;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 42px;
    margin-bottom: 30px;

    &_1 {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .ok_cont {
      display: flex;
      align-items: center;
      gap: 10px;

      & img {
        width: 9px;
        height: 9px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .balance {
      display: flex;
      align-items: center;
      gap: 10px;

      & img {
        width: 20px;
        height: 20px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .share {
      display: flex;
      align-items: center;
      gap: 10px;

      & img {
        width: 20px;
        height: 20px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }

  .price_content {
    display: flex;
    gap: 80px;
    align-items: center;
    margin-bottom: 30px;

    .price {
      display: flex;
      flex-direction: column;

      & span {
        &:first-child {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: line-through;
          color: var(--gray-600-color);
        }

        &:last-child {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--black-color);
          white-space: nowrap;
        }
      }
    }

    .banner_price {
      border-radius: 5px;
      background: var(--btn-gray-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 260px;
      width: 100%;
      padding: 7px 14px;
      gap: 15px;

      .text {
        display: flex;
        flex-direction: column;

        & span {
          &:first-child {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
          &:last-child{
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
          }
        }
      }
    }
  }
}
</style>