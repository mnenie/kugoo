<script setup lang="ts">
import type { IFilter } from '@/types/filter.interface';

const props = defineProps<{
  filters: IFilter[]
}>()
const emit = defineEmits<{
  (e: 'updateFilters'): void
}>()

</script>

<template>
  <div class="filter_block">
    <p class="size_5">Для кого</p>
    <div class="filters">
      <div v-for="item in filters" :key="item.id" class="filter">
        <input v-model="item.checked" type="checkbox" @change="emit('updateFilters')">
        <span class="size_7">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/filters.scss";
@include filter;
</style>