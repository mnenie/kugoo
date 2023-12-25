<script setup lang="ts">
import BannerStocks from '@/components/elements/stocks/BannerStocks.vue'
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
</script>

<template>
  <div>
    <NavigationTopPage :title="'Акции'" />
    <BannerStocks />
  </div>
</template>

<style lang="scss" scoped></style>