<script setup lang="ts">
defineProps<{
  placeholder: string
  modelValue: string | number
}>()
defineEmits(["update:modelValue"]);
</script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'input-form'
})
</script>

<template>
  <input class="input_form" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<style lang="scss" scoped>
.input_form {
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid var(--gray-200-color);
  background: var(--white-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // letter-spacing: 2.48px;
  color: var(--gray-600-color);
  transition: 0.15s ease;
  outline: none;
  &:hover{
    border: 1px solid var(--purple-color);
    color: var(--black-color);
    &::placeholder{
      color: var(--black-color);
    }
  }
  &:focus{
    border: 1px solid var(--purple-color);
    color: var(--black-color);
    &::placeholder{
      color: var(--black-color);
    }
  }
}
</style>