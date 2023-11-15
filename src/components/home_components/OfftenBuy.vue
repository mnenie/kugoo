<script setup lang="ts">
import ScootersCards from './ScootersCards.vue';
import { computed } from 'vue';
import useOftenCards from '@/hooks/useOftenCards';
const { cardsOften } = useOftenCards()
const style = computed(() => {
  return 'margin-bottom: 50px'
})
</script>

<template>
  <div class="offten_buy">
    <div class="container">
      <div class="offten_buy_block">
        <h1 class="size_1">часто покупают</h1>
        <ScootersCards :style="style" :cards="cardsOften" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offten_buy {
  padding-bottom: 23px;

  .offten_buy_block {
    display: flex;
    flex-direction: column;
    gap: 60px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      text-align: center;
      color: var(--black-color);
    }
  }
}

@media screen and (max-width: 992px) {
  .offten_buy {
    .offten_buy_block {
      gap: 50px;
    }
  }
}

@media screen and (max-width: 600px) {
  .offten_buy {
    .offten_buy_block {
      gap: 40px;
    }
  }
}
</style>