<script setup lang="ts">
import EmptyBasket from './EmptyBasket.vue';
import FillBasket from './FillBasket.vue';
import { useCart } from '@/stores/cart';
import { computed } from 'vue';

const { cartIndex } = useCart()
const style = computed(() => {
  const marginBottom = cartIndex === 0 ? '40px' : '8px';
  return 'margin-bottom: ' + marginBottom
})
</script>

<template>
  <div class="basket_item">
    <div class="container">
      <div class="content">
        <h1 :style="style" class="size_1 h1">Моя корзина</h1>
        <p v-if="cartIndex != 0" class="size_7 span">Количество товаров: {{ cartIndex }}</p>
        <EmptyBasket v-if="cartIndex === 0" />
        <FillBasket v-else />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.h1 {
  margin-top: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: var(--black-color);
}

.span {
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-600-color);
  margin-bottom: 40px;
}
</style>