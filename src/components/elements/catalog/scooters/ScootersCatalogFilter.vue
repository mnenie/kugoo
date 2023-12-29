<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import ProductsCatalog from '../ProductsCatalog.vue';

const props =  defineProps<{
  items: ICards[]
}>()
</script>

<template>
  <div class="catalog">
    <ProductsCatalog class="cards" :cards="items" />
  </div>
</template>

<style lang="scss" scoped>
.cards{
  margin-bottom: 100px;
}
</style>