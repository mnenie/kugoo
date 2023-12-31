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
  <form @submit.prevent="$emit('onSubmit')" class="form">
    <div class="input_content">
      <div style="width: 100%;" class="input_er">
        <InputForm class="input" :placeholder="place" v-bind="phone" :value="modelValue"
        @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" />
      <div class="size_7" style="color: var(--pink-color); margin-top: 5px;">{{ errors.phone }}</div>
      </div>
      <ButtonPurpleLg style="max-width: 263px; width: 100%;" v-if="purpleBtn">{{ btnTitle }}</ButtonPurpleLg>
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
  </form>
</template>


<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  .input_content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    .input{
      max-width: 263px; 
      width: 100%;
    }
  }

  .check_block {
    max-width: 320px;
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
@media screen and (max-width: 566px){
  .form{
    .input_content{
      .input{
        max-width: 210px;
      }
    }
  }
}
@media screen and (max-width: 540px){
  .form{
    .input_content{
      .input{
        max-width: 263px;
      }
    }
  }
}
@media screen and (max-width: 365px){
  .form{
    .input_content{
      .input{
        max-width: 210px;
      }
    }
  }
}
</style>