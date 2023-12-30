<script setup lang="ts">
import VRangeSlider from '@/components/UI/VRangeSlider.vue';
import { ref, watch } from 'vue';

const emit = defineEmits<{
  (e: 'update:range', newRange: number[]): void
}>()

const props = defineProps<{
  range: number[]
}>()
const sliderMin = ref(0);
const sliderMax = ref(500000);

const updateRange = (newRange: number[]) => {
  emit('update:range', newRange);
};
const handleInput = (index: number, event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  const parsedValue = parseInt(inputValue, 10);

  if (!isNaN(parsedValue)) {
    const updatedRange = [...props.range];
    updatedRange[index] = parsedValue;
    emit('update:range', updatedRange);
  }
};
</script>

<template>
  <div class="price">
    <p class="size_5">Цена</p>
    <VRangeSlider :range="range" @update:range="updateRange" :min="sliderMin" :max="sliderMax" />
    <div class="counts">
      <div class="count">
        <input class="input" type="number" :min="sliderMin" :max="sliderMax" :value="range[0]"
          @input="handleInput(0, $event)">
        <span style="color: var(--gray-600-color); padding-right: 5px;" class="size_7">₽</span>
      </div>
      <div class="line"></div>
      <div class="count">
        <input class="input" type="number" :min="sliderMin" :max="sliderMax" :value="range[1]"
          @input="handleInput(1, $event)">
        <span style="color: var(--gray-600-color); padding-right: 5px;" class="size_7">₽</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
  }

  .counts {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .count {
      border-radius: 5px;
      border: 1px solid var(--gray-200-color);
      background: #FFF;
      width: 80px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      .input {
        padding: 0 5px;
        width: 62px;
        height: 19px;
        outline: none;
        border: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

    }

    .line {
      width: 15px;
      height: 1px;
      background: var(--black-color);
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>