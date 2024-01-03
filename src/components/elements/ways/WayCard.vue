<script setup lang="ts">
import { ref } from 'vue';

const cards = [
  {
    id: 1,
    svg: '/icons/pay1.svg'
  },
  {
    id: 2,
    svg: '/icons/pay2.svg'
  },
  {
    id: 3,
    svg: '/icons/pay3.svg'
  },
  {
    id: 4,
    svg: '/icons/pay4.svg'
  },
  {
    id: 5,
    svg: '/icons/pay5.svg'
  },
]
const radioCard = ref<boolean>(true)
</script>

<template>
  <div class="way_card">
    <p class="size_4"><span style="color: var(--purple-color);">Шаг 3.</span> Выберите способ оплаты</p>
    <div class="block">
      <input :checked="radioCard" class="input" type="radio">
      <div class="text">
        <p class="size_6">Картой</p>
        <div class="cards">
          <div v-for="i in cards" :key="i.id" class="card">
            <img :src="i.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.way_card {
  display: flex;
  flex-direction: column;
  gap: 30px;

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
  }

  .block {
    border-radius: 5px;
    border: 1px solid var(--purple-color);
    background: var(--white-color);
    max-width: 240px;
    width: 100%;
    height: 158px;
    padding: 18px 16px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
      }
    }
  }
}

.input {
  min-width: 16px !important;
  min-height: 16px !important;
  margin-top: 2px !important;
}
input[type="radio"]{
  accent-color: var(--purple-color);
}
</style>