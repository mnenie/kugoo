<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import { ref } from 'vue';

const title = ref<string>('Каталог')
</script>

<template>
  <div>
    <NavigationTopPage :title="title" />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>