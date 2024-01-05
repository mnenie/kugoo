<script setup lang="ts">
import ComparisonBanner from '@/components/elements/comparison/ComparisonBanner.vue';
import TopPartComparison from '@/components/elements/comparison/TopPartComparison.vue';
import NavBackLink from '@/components/UI/links/NavBackLink.vue';
import MainPartComparison from '@/components/elements/comparison/MainPartComparison.vue'
import { useComparison } from '@/stores/comparison';
import EmptyComparison from '@/components/elements/comparison/EmptyComparison.vue';

const comparison = useComparison()
</script>

<template>
  <div>
    <NavBackLink />
    <div v-if="comparison.products.length > 0" class="fill">
      <TopPartComparison />
      <MainPartComparison :products="comparison.products" />
      <ComparisonBanner />
    </div>
    <EmptyComparison v-else />
  </div>
</template>

<style lang="scss" scoped></style>