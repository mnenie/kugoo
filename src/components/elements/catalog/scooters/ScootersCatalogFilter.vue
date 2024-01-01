<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import ProductsCatalog from '../ProductsCatalog.vue';

const props =  defineProps<{
  items: ICards[]
  loader?: boolean
}>()
</script>

<template>
  <div class="catalog">
    <ProductsCatalog class="cards" :cards="items" />
  </div>
</template>

<style lang="scss" scoped>
.catalog{
  width: 100%;
  margin-bottom: 100px;
}
</style>