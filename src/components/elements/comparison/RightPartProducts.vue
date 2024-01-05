<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import { useComparison } from '@/stores/comparison';


const props = defineProps<{
  products: ICards[]
}>()

const comparison = useComparison()

const fields: (keyof ICards)[] = [
  'basket', 'weight', 'power', 'accum', 'time', 'speed', 'mileage', 'load',
  'lighting', 'actuator', 'brake', 'equipment', 'guarantees', 'sale', 'price'
];
</script>

<template>
  <div class="right_part">
    <div class="items">
      <div v-for="product in products" :key="product.id" class="item">
        <div class="title_block">
          <div class="img">
            <img :src="product.img" alt="">
          </div>
          <p class="size_5">{{ product.title }}</p>
        </div>
        <div class="block" v-for="(field, index) in fields" :key="field">
          <span
            :style="[comparison.comparisonProducts()[index] ? 'color: var(--green-color)' : 'color: var(--pink-color)']"
            :class="[field === 'price' ? 'size_4' : 'size_7']">
            {{
              field === 'basket'
              ? (product[field] ? 'В наличии' : 'Нет в наличии')
              : (field === 'sale'
                ? '-'
                : (field === 'price'
                  ? (product[field] !== undefined ? product[field] + ' руб.' : '-')
                  : (product[field] || '-')
                )
              )
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right_part {
  overflow-x: auto;
  overflow-y: hidden;

  .items {
    display: flex;
    align-items: flex-start;

    .item {
      display: flex;
      flex-direction: column;
      min-width: 370px;
      width: 100%;

      &:last-child {
        min-width: unset;
      }


      .title_block {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--gray-200-color);

        & p {
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--black-color);
          white-space: nowrap;
        }

        .img {
          width: 150px;
          height: 150px;
          border-radius: 10px;
          background: #F0F1F5;
          display: flex;
          align-items: center;
          justify-content: center;

          & img {
            height: 118px;
            width: 118px;
          }
        }
      }

      .block {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--gray-200-color);

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
          white-space: nowrap;
        }

        &:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;

          & span {
            font-style: normal;
            font-weight: 500;
            line-height: 119%;
            color: var(--black-color);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 992px){
  .right_part{
    .items{
      .item{
        min-width: 300px;
      }
    }
  }
}
</style>
