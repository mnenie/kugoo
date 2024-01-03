<script setup lang="ts">
import { useCart } from '@/stores/cart';
const {cartIndex} = useCart()
</script>

<template>
  <div class="container">
    <h1 class="size_1">Моя корзина</h1>
    <p v-if="cartIndex != 0" class="size_7 span">Количество товаров: {{ cartIndex }}</p>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: var(--black-color);
}

p {
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-600-color);
  margin-bottom: 40px;
}
</style>