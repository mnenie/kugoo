<script setup lang="ts">
import BannerScooters from '@/components/elements/catalog/scooters/BannerScooters.vue'
import BannerHome from '@/components/elements/home/BannerHome.vue';
import { ref } from 'vue';
const style = ref('margin-bottom: 0')
</script>

<template>
  <BannerScooters />
  <BannerHome :style="style" />
</template>

<style lang="scss" scoped>
</style>