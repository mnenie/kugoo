<script setup lang="ts">
interface IFormProps {
  place: string;
  errors: any;
  phone: any;
  isEmail: boolean;
  email: any;
  phoneValue: string | number;
  emailValue: string | number;
  checked: boolean;
  btnTitle: string;
  placeEmail: string
}
defineProps<IFormProps>()
defineEmits([
  'onSubmit',
  'update:phoneValue',
  'update:emailValue',
])
</script>

<template>
  <form @submit.prevent="$emit('onSubmit')"
    style="max-width: 100%; width: 100%; display: flex; flex-direction: column; gap: 20px;">
    <input-purple :placeholder="place" style="max-width: 100%;" v-bind="phone" :value="phoneValue"
      @input="$emit('update:phoneValue', ($event.target as HTMLInputElement).value)" />
    <div class="size_7" style="color: var(--white-color); margin-top: -15px;">{{ errors.phone }}</div>
    <input-purple v-if="isEmail" :placeholder="placeEmail" style="max-width: 100%;" v-bind="email" :value="emailValue"
      @input="$emit('update:emailValue', ($event.target as HTMLInputElement).value)" />
    <div v-if="isEmail" class="size_7" style="color: var(--white-color); margin-top: -15px;">{{ errors.email }}</div>
    <btn-large-white style="width: 100%;">{{ btnTitle }}</btn-large-white>
    <div class="check_block">
      <input type="checkbox" :checked="checked" :disabled="checked" id="flexCheckChecked">
      <label class="size_8" for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
        <router-link class="route" to="/">политикой конфиденциальности</router-link>
      </label>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.check_block {
  display: flex;
  gap: 12px;

  & label {
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: var(--white-color);

    .route {
      color: var(--white-color);
      text-decoration: none;
    }
  }
}
</style>