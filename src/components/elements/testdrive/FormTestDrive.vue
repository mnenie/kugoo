<script setup lang="ts">
import { ref } from 'vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import ButtonPurpleLg from '@/components/UI/ButtonPurpleLg.vue';
import { useRouter } from 'vue-router';


const placeholder = ref<string>('+7 (___) __ - __ - __')
const phoneValue = ref<string>('')
const checked = ref<boolean>(true)
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
  }),
});
const router = useRouter()
const onSubmit = async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    router.push({name: 'thanks', params: {id: '2'}})
  }
};
const phone = defineInputBinds('phone');
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="btn_content">
      <div class="input_format">
        <input-form class="input" :placeholder="placeholder" v-model="phoneValue" v-bind="phone" />
        <div class="size_7" style="color: var(--pink-color);">{{ errors.phone }}</div>
      </div>
      <ButtonPurpleLg class="btn">Оставить заявку на тест-драйв</ButtonPurpleLg>
    </div>
    <div class="check_block">
      <input type="checkbox" :checked="checked" :disabled="checked" id="flexCheckChecked">
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
  flex-direction: column;
  gap: 20px;

  .btn_content {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    .input {
      min-width: 263px;
      width: 100%;
    }
  }

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
      max-width: 307px;
      color: var(--black-color);

      .route {
        color: var(--purple-color);
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 1020px) {
  .form {
    .btn_content {
      flex-direction: column;
      align-items: flex-start;

      .input {
        min-width: 282.52px;
        width: 100%;
      }

      .btn {
        max-width: 290px;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .form {
    .check_block{
      & label{
        max-width: 250px;
      }
    }
    .btn_content {

      .input {
        min-width: 253.7px;
        width: 100%;
      }
    }
  }
}
</style>