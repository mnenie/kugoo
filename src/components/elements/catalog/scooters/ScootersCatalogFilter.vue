<script setup lang="ts">
import useGetAllScooters from '@/hooks/useGetAllScooters';
import ProductsCatalog from '../ProductsCatalog.vue';
const {items} = useGetAllScooters()
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