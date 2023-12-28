<script setup lang="ts">
import type { IFilter } from '@/types/filter.interface';
import { ref } from 'vue';

const filters = ref<IFilter[]>([
  { id: 1, checked: true, title: 'Легкие (до 15 кг)' },
  { id: 2, checked: false, title: 'Средние (15-30 кг)' },
  { id: 3, checked: false, title: 'Тяжелые (свыше 30 кг)' },
])
</script>

<template>
  <div class="filter_block">
    <p class="size_5">Вес</p>
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