<script setup lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import { ref, watchEffect } from 'vue';

interface IProps {
  range: number[]
  min: number
  max: number
}

const props = defineProps<IProps>()

const emit = defineEmits(['update:range'])

const sliderRef = ref<typeof VueSlider | null>(null);

watchEffect(() => {
  if (sliderRef.value) {
    sliderRef.value.setValue(props.range);
  }
});

</script>

<template>
  <vue-slider ref="sliderRef" :model-value="range" @change="(e: number[]) => emit('update:range', e)"  :min="min" :max="max" :dot-size="15" :tooltip="'hover'"/>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;
}
</style>