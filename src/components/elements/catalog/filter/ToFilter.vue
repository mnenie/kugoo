<script setup lang="ts">
import type { IFilter } from '@/types/filter.interface';
import { ref } from 'vue';

const filters = ref<IFilter[]>([
  { id: 1, checked: true, title: 'До 20 км' },
  { id: 2, checked: false, title: 'До 25 км' },
  { id: 3, checked: false, title: 'До 30 км' },
  { id: 4, checked: false, title: 'До 35 км' },
  { id: 5, checked: false, title: 'До 40 км' },
  { id: 6, checked: false, title: 'До 45 км' },
  { id: 7, checked: false, title: 'До 50 км' },
  { id: 8, checked: false, title: 'До 55 км' },
  { id: 9, checked: false, title: 'До 60 км' },
  { id: 10, checked: false, title: 'До 70 км' },
])
</script>

<template>
  <div class="filter_block">
    <p class="size_5">Дальность хода</p>
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