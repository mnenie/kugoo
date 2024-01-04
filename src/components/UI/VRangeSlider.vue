<script setup lang="ts">
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";

interface IProps {
  range: number[];
  min: number;
  max: number;
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:range']);

</script>

<template>
  <div class="slider">
    <VueSimpleRangeSlider :model-value="range" @update:model-value="(e: number[]) => emit('update:range', e)" :min="min" :max="max" :activeBarColor="'#6F73EE'" :barColor="'#eaebed'" style="width: 100%;" ></VueSimpleRangeSlider>
  </div>
</template>

<style lang="scss" scoped>

</style>
