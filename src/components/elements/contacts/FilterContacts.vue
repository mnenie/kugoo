<script setup lang="ts">
import FilterItems from '@/components/UI/FilterItems.vue';
import type { IBtns } from '@/types/ui.interface';
const props = defineProps<{
  btns: IBtns[]
}>()
const emit = defineEmits<{
  (e: 'filterCards', id: number): void
}>()
</script>

<template>
  <div class="container">
    <div class="filters">
      <FilterItems :btns-filter="btns" @filter-cards="emit('filterCards', $event)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  margin-bottom: 50px !important;
  display: flex;
  justify-content: center;
}
</style>