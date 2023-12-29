<script setup lang="ts">
import type { IBtns } from '@/types/ui.interface';
const props = defineProps<{
  filters: IBtns[]
}>()
const emit = defineEmits<{
  (e: 'filterCards', id: number): void
}>()
</script>

<template>
  <div class="filter_top">
    <h2 class="size_3">Фильтр</h2>
    <div class="filters">
      <p>Сортировать:</p>
      <FilterItems :btns-filter="filters" @filter-cards="emit('filterCards', $event)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter_top {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 20px;

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }
  }
}
</style>