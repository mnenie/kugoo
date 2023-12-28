<script setup lang="ts">
import type { IFilter } from '@/types/filter.interface';
import { ref } from 'vue';

const filters = ref<IFilter[]>([
  { id: 1, checked: true, title: '249 Вт' },
  { id: 2, checked: false, title: '350 Вт' },
  { id: 3, checked: false, title: '500 Вт' },
  { id: 4, checked: false, title: '600 Вт' },
  { id: 5, checked: false, title: '1000 Вт' },
  { id: 6, checked: false, title: '1600 Вт' },
  { id: 7, checked: false, title: '2000 Вт' },
  { id: 8, checked: false, title: '2400 Вт' },
])
</script>

<template>
  <div class="filter_block">
    <p class="size_5">Мощность
      мотор-колеса</p>
    <div class="filters">
      <div v-for="item in filters" :key="item.id" class="filter">
        <input type="checkbox">
        <span class="size_7">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/filters.scss";
@include filter;
</style>