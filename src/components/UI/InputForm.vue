<script setup lang="ts">
const props = defineProps<{
  placeholder: string
  modelValue: string | number
}>()
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input class="input_form" :placeholder="placeholder" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
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
  letter-spacing: 1.5px;
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
@media screen and (max-width: 650px){
  .input_form{
    font-size: 14px;
  }
}
</style>