<script setup lang="ts">
import ButtonPurpleLg from './ButtonPurpleLg.vue';
interface IFormProps {
  place: string;
  errors: any;
  phone: any;
  modelValue: string | number;
  checked: boolean;
  btnTitle: string 
}
defineProps<IFormProps>()
defineEmits([
  'onSubmit',
  'update:modelValue',
  'update:checked'
])
</script>

<template>
  <form @submit.prevent="$emit('onSubmit')" style="max-width: 263px; width: 100%; display: flex; flex-direction: column">
    <input-form :placeholder="place" style="margin-bottom: 20px;" v-bind="phone" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div style="color: var(--pink-color); margin-top: -15px; margin-bottom: 20px;">{{ errors.phone }}</div>
    <ButtonPurpleLg style="margin-bottom: 16px;">{{ btnTitle }}</ButtonPurpleLg>
    <div class="check_block">
      <input type="checkbox" :checked="checked" @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)" :disabled="checked"
        id="flexCheckChecked">
      <label for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
        <router-link class="route" to="/">политикой конфиденциальности</router-link>
      </label>
    </div>
    <div style="color: var(--pink-color);">{{ errors.checkbox }}</div>
  </form>
</template>


<style lang="scss" scoped>
.check_block {
  display: flex;
  gap: 12px;

  & input {
    margin-top: 5px;
  }

  & label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: var(--black-color);

    .route {
      color: var(--purple-color);
      text-decoration: none;
    }
  }
}
</style>