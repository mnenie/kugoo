<script setup lang="ts">
import NavigationTopPage from '@/components/layout/NavigationTopPage.vue';
import BannerCatalog from '@/components/elements/catalog/BannerCatalog.vue';
import { ref } from 'vue';
import CatalogChoice from '@/components/elements/catalog/CatalogChoice.vue'
import AboutHome from '@/components/elements/home/AboutHome.vue';
import VideoSection from '@/components/elements/home/VideoSection.vue';
import News from '@/components/elements/home/News.vue';
import OfftenBuy from '@/components/elements/home/OfftenBuy.vue';

const title = ref<string>('Каталог')
</script>

<template>
  <div>
    <NavigationTopPage :title="title" />
    <BannerCatalog />
    <CatalogChoice />
    <AboutHome />
    <VideoSection />
    <News />
    <OfftenBuy />
  </div>
</template>

<style lang="scss" scoped></style>