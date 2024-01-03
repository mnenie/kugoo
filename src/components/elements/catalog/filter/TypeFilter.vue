<script setup lang="ts">
import type { IFilter } from '@/types/filter.interface';

const props = defineProps<{
  filtersPanel1: IFilter[]
}>()

const emit = defineEmits<{
  (e: 'onChecked', id: number): void
}>()

</script>

<template>
  <div class="filter_block">
    <p class="size_5">Тип</p>
    <div class="filters">
      <div v-for="item in filtersPanel1" :key="item.id" class="filter">
        <input v-model="item.checked" @change="emit('onChecked', item.id)" type="checkbox">
        <span class="size_7">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/filters.scss";
@include filter;
</style>