<script setup lang="ts">
import { useCart } from '@/stores/cart';

const cart = useCart()
const props = defineProps<{
  id: number
}>()
</script>

<template>
  <div class="quantity">
    <img @click="cart.changeQuantity(id,'dec')"  src="/icons/basket/minus.svg" alt="">
    <span class="size_6">{{ cart.getCountForProduct(id) }}</span>
    <img @click="cart.changeQuantity(id, 'inc')" src="/icons/basket/plus.svg" alt="">
  </div>
</template>

<style lang="scss" scoped>
.quantity {
  border-radius: 5px;
  background: var(--btn-gray-color);
  width: 106px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }
  & img{
    cursor: pointer;
  }
}
</style>