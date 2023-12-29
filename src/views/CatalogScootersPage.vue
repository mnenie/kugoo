<script setup lang="ts">
import FilterTop from '@/components/elements/catalog/FilterTop.vue';
import BannerScooters from '@/components/elements/catalog/scooters/BannerScooters.vue'
import ScootersCatalogFilter from '@/components/elements/catalog/scooters/ScootersCatalogFilter.vue';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import FilterCatalog from '@/components/elements/catalog/FilterCatalog.vue';
import { ref } from 'vue';
import useGetAllScooters from '@/hooks/useGetAllScooters';
import useFilterCatalog from '@/hooks/useFilterCatalog';


const title = ref<string>('Каталог')
const { items, tempItems } = useGetAllScooters()
const { filters, filterProductsByTop } = useFilterCatalog(items, tempItems)
</script>

<template>
  <NavigationTopPage :title="title" :title2="'Электросамокаты'" />
  <BannerScooters />
  <div class="container">
    <FilterTop :filters="filters" @filter-cards="filterProductsByTop" />
    <div class="blocks">
      <FilterCatalog />
      <ScootersCatalogFilter :items="items" />
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
</style>