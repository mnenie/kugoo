<script setup lang="ts">
import ForWhoFilter from './filter/ForWhoFilter.vue';
import PriceFilter from './filter/PriceFilter.vue'
import TypeFilter from './filter/TypeFilter.vue';
import WeightFilter from './filter/WeightFilter.vue'
import SetsFilter from './filter/SetsFilter.vue'
import ToFilter from './filter/ToFilter.vue'
import PowerFilter from './filter/PowerFilter.vue'
import { ref } from 'vue';
import { filtersPanel2, filtersPanel1, filtersPanel3, filtersPanel4, filtersPanel5, filtersPanel6 } from '@/mocks/filters';


const isMore = ref<boolean>(false)
const style = ref<string>('')
const title = ref<string>('Показать весь фильтр')
let count = ref(0)
const showMore = () => {
  count.value++
  if (count.value % 2 == 0) {
    isMore.value = !isMore.value
    style.value = ''
    title.value = 'Показать весь фильтр'
  }
  else {
    isMore.value = !isMore.value
    style.value = 'transform: rotate(180deg)'
    title.value = 'Скрыть часть фильтра'
  }
}
const emit = defineEmits(['update:range', 'onChecked'])

const props = defineProps<{
  range: number[]
}>()

const updateRange = (newRange: number[]) => {
  emit('update:range', newRange);
};
</script>

<template>
  <div class="filter">
    <PriceFilter :range="range" @update:range="updateRange" />
    <TypeFilter :filters-panel1="filtersPanel1" @on-checked="$emit('onChecked', $event)" />
    <ForWhoFilter :filters="filtersPanel2" @update-filters="$emit('onChecked', $event)" />
    <WeightFilter :filters="filtersPanel3" @update-checked="$emit('onChecked', $event)" />
    <div v-show="isMore" class="more_blocks">
      <SetsFilter :filters="filtersPanel4" @update-checked="$emit('onChecked', $event)" />
      <ToFilter :filters="filtersPanel5" @update-filters="$emit('onChecked', $event)" />
      <PowerFilter :filters="filtersPanel6" @update-checked="$emit('onChecked', $event)" />
    </div>
    <div @click="showMore" class="more">
      <span class="size_7">{{ title }}</span>
      <img :style="style" src="/icons/catalog/arrow.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 20px;
  min-width: 255px;
  gap: 25px;
  position: relative;

  .more_blocks {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;


    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--purple-color);
    }
  }
}
</style>