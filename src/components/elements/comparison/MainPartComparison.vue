<script setup lang="ts">
import LeftPartProducts from './LeftPartProducts.vue';
import RightPartProducts from './RightPartProducts.vue';
import type { ICards } from '@/types/cards.interface';

const props = defineProps<{
  products: ICards[]
}>()
</script>

<template>
  <div class="container">
    <div class="main_part">
      <LeftPartProducts />
      <RightPartProducts :products="products" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_part{
  display: flex;
  align-items: flex-start;
  margin-bottom: 120px;
}
@media screen and (max-width: 992px){
  .main_part{
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 600px){
  .main_part{
    margin-bottom: 70px;
  }
}
</style>