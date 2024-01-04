<script setup lang="ts">
import type { IBasket } from '@/types/basket.interface';
const items: IBasket[] = [
  { id: 1, title: 'Комплектация:', strong: 'стандартная' },
  { id: 2, title: 'Подарочная упаковка:', img: '/icons/product/pink.svg' },
  { id: 3, title: 'Гарантия:', strong: '1 год' },
  { id: 4, title: 'Тип покрышки:', strong: 'шоссейная' },
  { id: 5, title: 'Доп.услуги:', strong: 'гидроизоляция' },
]
</script>

<template>
  <div class="bottom_part">
    <div class="items">
      <div v-for="item in items" :key="item.id" class="item">
        <span style="color: var(--gray-600-color);" class="size_7">{{ item.title }} <span
            style="color: var(--black-color);" v-if="item.strong">{{ item.strong }}</span></span>
        <img v-if="item.img" :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.bottom_part {
  border-radius: 5px;
  border: 1px solid rgba(92, 107, 122, 0.1);
  padding: 16px 10px;
  margin-bottom: 40px;

  .items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;


    .item {
      display: inline-flex;
      padding: 8px 15px;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-radius: 300px;
      border: 1px solid var(--gray-200-color);

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      & img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>