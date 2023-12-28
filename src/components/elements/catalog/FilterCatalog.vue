<script setup lang="ts">
import ForWhoFilter from './filter/ForWhoFilter.vue';
import PriceFilter from './filter/PriceFilter.vue'
import TypeFilter from './filter/TypeFilter.vue';
import WeightFilter from './filter/WeightFilter.vue'
import SetsFilter from './filter/SetsFilter.vue'
import ToFilter from './filter/ToFilter.vue'
import PowerFilter from './filter/PowerFilter.vue'
</script>

<template>
  <div class="filter">
    <PriceFilter />
    <TypeFilter />
    <ForWhoFilter />
    <WeightFilter />
    <div class="more">
      <span class="size_7">Показать весь фильтр</span>
      <img src="/icons/catalog/arrow.svg" alt="">
    </div>
    <div class="more_blocks">
      <SetsFilter />
      <ToFilter />
      <PowerFilter />
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
    position: absolute;
    bottom: 0;
    

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--purple-color);
    }
  }
}
</style>