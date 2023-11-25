<script setup lang="ts">
import ScootersCards from '@/components/elements/home/ScootersCards.vue';
import { computed } from 'vue';
import useOftenCards from '@/hooks/useOftenCards';
const { cardsOften } = useOftenCards()
const style = computed(() => {
  return 'margin-bottom: 0px'
})
</script>

<template>
  <div class="often_products">
    <div class="container">
      <div class="block">
        <h1 class="size_1">Выбирайте популярные товары без наценок посредников</h1>
        <ScootersCards :style="style" :cards="cardsOften" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.often_products {
  margin-bottom: 100px;

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      text-align: center;
      max-width: 635px;
    }
  }
}
@media screen and (max-width: 1200px){
  .often_products{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 600px){
  .often_products{
    margin-bottom: 60px;
    .block{
      gap: 40px;
    }
  }
}
</style>