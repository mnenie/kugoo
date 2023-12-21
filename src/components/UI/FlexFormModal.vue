<script setup lang="ts">
import NetworksMobile from './NetworksMobile.vue';
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
  <form @submit.prevent="$emit('onSubmit')" class="form">
    <div class="btn_content">
      <NetworksMobile style="margin-bottom: 20px;" />
      <ButtonPurpleLg v-if="purpleBtn">{{ btnTitle }}</ButtonPurpleLg>
      <ButtonYellowBg v-else >{{ btnTitle }}</ButtonYellowBg>
    </div>
    <div class="input_content">
      <InputForm :placeholder="place" style="margin-bottom: 16px;" v-bind="phone" :value="modelValue"
        @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" />
      <div class="size_7" style="color: var(--pink-color); margin-top: -10px; margin-bottom: 20px;">{{ errors.phone }}
      </div>
      <div class="check_block">
        <input type="checkbox" :checked="checked"
          @change="emits('update:checked', ($event.target as HTMLInputElement).checked)" :disabled="checked"
          id="flexCheckChecked">
        <label class="size_8" for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
          <router-link class="route" to="/">политикой конфиденциальности</router-link>
        </label>
      </div>
      <div class="size_7" style="color: var(--pink-color);">{{ errors.checkbox }}</div>
    </div>
  </form>
</template>


<style lang="scss" scoped>
.form {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  justify-content: space-between;

  .btn_content {
    display: flex;
    flex-direction: column;
  }

  .input_content {
    display: flex;
    flex-direction: column;

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
  }
}
@media screen and (max-width: 600px){
  .form{
    gap: 15px;
    .btn_content{
      max-width: 230px;
    }
  }
}
@media screen and (max-width: 540px){
  .form{
    gap: 30px;
    .btn_content{
      max-width: unset;
    }
    .input_content{
      max-width: 263px;
    }
  }
}
</style>