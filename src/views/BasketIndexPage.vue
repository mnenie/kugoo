<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import BasketElement from '@/components/elements/basket/BasketElement.vue';
import { ref } from 'vue';
const title = ref('Каталог')
const title2 = ref('Моя корзина')
</script>

<template>
  <div>
    <NavigationTopPage :title="title" :title2="title2" />
    <BasketElement />
  </div>
</template>

<style lang="scss" scoped></style>