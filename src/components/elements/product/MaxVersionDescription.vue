<script setup lang="ts">
import { description1 } from '@/mocks/maxversion'
</script>

<template>
  <div class="block">
    <div class="text_1">
      <div v-for="item in description1" :key="item.id" class="text_inside">
        <p class="size_4">{{ item.title }}</p>
        <span v-if="item.body" class="size_7">{{ item.body }}</span>
      </div>
    </div>
    <div class="text_2">
      <p class="size_4">500 руб. на покупку аксессуаров</p>
      <span class="size_7">При покупке версии MAX вы получаете купон номиналом 500 р. на покупку любых аксессуаров,
        представленных в нашем магазине.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 20px;

  .text_1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;

    .text_inside {
      display: flex;
      flex-direction: column;
      gap: 44px;

      &:last-child {
        margin-left: 26px;
      }

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
        white-space: nowrap;
      }

      & span {
        max-width: 200px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }

  .text_2 {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--black-color);
      max-width: 196px;
    }

    & span {
      max-width: 255px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }
  }
}

@media screen and (max-width: 1200px) {
  .block {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
    .text_2{
      & p{
        max-width: unset;
      }
      & span{
        max-width: unset;
      }
    }
    .text_1{
      gap: 30px;
    }
  }
}
@media screen and (max-width: 1020px) {
  .block {
    align-items: center;
    .text_2{
     align-items: center;
     text-align: center;
    }
  }
}
</style>