<script setup lang="ts">
interface IFormProps {
  place: string;
  errors: any;
  phone: any;
  modelValue: string | number;
  checked: boolean;
  btnTitle: string;
  purpleBtn: boolean
}
defineProps<IFormProps>()
const emits = defineEmits([
  'onSubmit',
  'update:modelValue',
  'update:checked'
])
</script>

<template>
  <form @submit.prevent="emits('onSubmit')" style="max-width: 263px; width: 100%; display: flex; flex-direction: column">
    <InputForm :placeholder="place" style="margin-bottom: 20px;" v-bind="phone" :value="modelValue"
      @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div class="size_7" style="color: var(--pink-color); margin-top: -15px; margin-bottom: 20px;">{{ errors.phone }}</div>
    <ButtonPurpleLg v-if="purpleBtn" style="margin-bottom: 16px;">{{ btnTitle }}</ButtonPurpleLg>
    <ButtonYellowBg v-else style="margin-bottom: 16px;">{{ btnTitle }}</ButtonYellowBg>
    <div class="check_block">
      <input type="checkbox" :checked="checked" @change="emits('update:checked', ($event.target as HTMLInputElement).checked)" :disabled="checked"
        id="flexCheckChecked">
      <label class="size_8" for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
        <router-link class="route" to="/">политикой конфиденциальности</router-link>
      </label>
    </div>
    <div class="size_7" style="color: var(--pink-color);">{{ errors.checkbox }}</div>
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