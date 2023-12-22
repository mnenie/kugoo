<script setup lang="ts">
interface Props {
  modelValue: string | number;
  placeholder: string
  type: string
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="input_form">
    <slot />
    <input @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :value="modelValue" class="input"
      :type="type" :placeholder="placeholder">
  </div>
</template>

<style lang="scss" scoped>
.input_form {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-variation-settings: "wght" 600;
  line-height: 100%;
  color: #a6acbf;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all .3s ease;
  cursor: text;
  gap: 5px;

  &:hover {
    border: 1px solid var(--purple-color);

    .input {
      color: var(--black-color);
      &::placeholder {
        color: var(--black-color);
      }
    }
  }

  &:focus-within {
    border: 1px solid var(--purple-color);

    .input {
      color: var(--black-color);
      &::placeholder {
        color: var(--black-color);
      }
    }
  }
}

.input {
  padding: 12px 10px 12px 5px;
  border-radius: 8px;
  border: none;
  background: var(--white-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-600-color);
  transition: 0.15s ease;
  outline: none;
  width: 100%;
}
@media screen and (max-width: 650px){
  .input{
    font-size: 14px;
  }
}

</style>