<script setup lang="ts">
import CardBasket from './CardBasket.vue';
import { useCart } from '@/stores/cart';

const cart = useCart()
</script>

<template>
  <div class="cards">
    <CardBasket :cards="cart.products" />
  </div>  
</template>

<style lang="scss" scoped>
.cards{
  display: flex;
  flex-direction: column;
  max-width: 760px;
  width: 100%;
}
@media screen and (max-width: 1100px){
  .cards{
    max-width: 100%;
  }
}
</style>