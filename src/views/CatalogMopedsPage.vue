<script setup lang="ts">
import FilterTop from '@/components/elements/catalog/FilterTop.vue';
import BannerScooters from '@/components/elements/catalog/scooters/BannerScooters.vue'
import ScootersCatalogFilter from '@/components/elements/catalog/scooters/ScootersCatalogFilter.vue';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import FilterCatalog from '@/components/elements/catalog/FilterCatalog.vue';
import { ref, onUnmounted } from 'vue';
import useFilterCatalog from '@/hooks/useFilterCatalog';
import useGetAllMopeds from '@/hooks/useGetAllMopeds';


const title = ref<string>('Каталог')
const range = ref([0, 500000])
const { items, tempItems } = useGetAllMopeds()
const { filters, filterProductsByTop, filterProductsPanel, clearFilters, filterProductsByPrice} = useFilterCatalog(items, tempItems, range)

onUnmounted(() => {
  clearFilters()
})
</script>

<template>
  <NavigationTopPage :title="title" :title2="'Электроскутеры'" />
  <BannerScooters />
  <div class="container">
    <FilterTop :filters="filters" @filter-cards="filterProductsByTop" />
    <div class="blocks">
      <FilterCatalog :range="range" @update:range="filterProductsByPrice" @onChecked="filterProductsPanel" />
      <ScootersCatalogFilter v-if="items.length > 0" :items="items" />
      <p v-else class="size_5" style="text-align: center; width: 100%; margin-top: 50px; margin-bottom: 50px; color: var(--pink-color);">Ничего не найдено</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
}

@media screen and (max-width: 860px){
  .blocks{
    flex-direction: column;
    gap: 20px;
  }
}
</style>