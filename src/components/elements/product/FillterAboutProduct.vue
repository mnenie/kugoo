<script setup lang="ts">
import { computed } from 'vue';
const emit = defineEmits<{
  (e: 'changeItems', id: number): void
}>()
const props = defineProps<{
  filters: any[]
}>()
const changeFilters = computed(() => {
  return (index: number) => {
    props.filters.map((btn, i) => {
      btn.active = i === index
    })
    emit('changeItems', index)
  }
})
</script>

<template>
  <div class="container">
    <div class="filters">
      <div class="items">
        <div v-for="(filter, index) in filters" :key="filter.id" class="item" @click="changeFilters(index)"
          :class="['filter', 'size_7', filter.active ? 'active' : '']">
          {{ filter.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  position: relative;

  &::after {
    content: '';
    width: 100%;
    bottom: 0;
    border-bottom: 1.5px solid var(--gray-200-color);
    left: 0;
    right: 0;
    height: 1.5px;
    position: absolute;
  }

  margin-bottom: 51px;

  .items {
    display: flex;
    padding: 0 62px;
    justify-content: space-between;
    align-items: center;

    .filter {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--gray-600-color);
      padding-bottom: 22px;
      position: relative;
      z-index: 99;
      cursor: pointer;
    }
  }
}

.active {
  color: var(--purple-color) !important;
  border-bottom: 2px solid var(--purple-color);
}
</style>