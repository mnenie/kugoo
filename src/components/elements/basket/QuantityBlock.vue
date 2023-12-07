<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(1)
</script>

<template>
  <div class="quantity">
    <img @click="() => count--"  src="/icons/basket/minus.svg" alt="">
    <span class="size_6">{{ count }}</span>
    <img @click="() => count++" src="/icons/basket/plus.svg" alt="">
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