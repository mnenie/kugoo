<script setup lang="ts">
import FilterItems from '@/components/UI/FilterItems.vue';
import type { IBtns } from '@/types/ui.interface';
const props = defineProps<{
  btnsFilter: IBtns[]
}>()
const emit = defineEmits<{
  (e: 'filterCards', index: number): void
}>()

const toIndex = (index: number) =>{
  emit('filterCards', index);
}
</script>

<template>
  <div class="filter">
    <div class="container">
      <div class="filter_items">
        <h1 class="size_1">
          Электросамокаты
        </h1>
        <FilterItems @filter-cards="toIndex" :btns-filter="btnsFilter" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  padding-bottom: 50px;

  .filter_items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
    }
  }
}

@media screen and (max-width: 990px) {
  .filter_items {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .filter {
    padding-bottom: 40px;

    .filter_items {
      align-items: center !important;
    }
  }
}
</style>