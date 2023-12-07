<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '@/stores/cart'

const cart = useCart()
const cartFlag = computed(() => cart.flag);
const cartIndex = computed(() => cart.cartIndex);
</script>

<template>
  <div class="round_cart" v-if="cartFlag">
    <span>{{ cartIndex }}</span>
  </div>
</template>

<style lang="scss" scoped>
.round_cart {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background: var(--pink-color);
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
}

@media screen and (max-width: 768px) {
  .round_cart{
    & span {
      font-size: 10px;
    }
  }
}
</style>@/store/cart