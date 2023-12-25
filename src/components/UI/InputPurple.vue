<script setup lang="ts">
defineProps<{
  modelValue: string | number,
}>()
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="input">
</template>

<style lang="scss" scoped>
.input {
  padding: 15px 25px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.20);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  color: var(--white-color);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--white-color);
  }
}
</style>