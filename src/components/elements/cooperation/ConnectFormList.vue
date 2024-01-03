<script setup lang="ts">
import { ref } from 'vue';
import FormList from './FormList.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
const place = ref('+7 (___) __ - __ - __')
const phoneValue = ref<string>('')
const emailValue = ref<string>('')
const checked = ref<boolean>(true)
const btnTitle = ref('Узнать условия франшизы')
const isEmail = ref<boolean>(true)
const placeEmail = ref<string>('example@gmail.com')

const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
    email: yup.string().email('Некорректный адрес email').required('*Обязательное поле')
  }),
});
const router = useRouter()
const onSubmit = async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    router.push({name: 'thanks', params: {id: '4'}})
  }
};
const phone = defineInputBinds('phone');
const email = defineInputBinds('email');

</script>

<template>
  <div class="list">
    <div class="text">
      <h3 class="size_4">Заполните короткую форму, мы свяжемся с вами</h3>
      <span class="size_7">чтобы рассказать подробнее о бизнесе и ответить на все ваши вопросы</span>
    </div>
    <FormList v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model:phone-value="phoneValue"
      v-model:email-value="emailValue" @on-submit="onSubmit" :btn-title="btnTitle" :is-email="isEmail" :email="email"
      :place-email="placeEmail" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  min-width: 377px;
  width: 377px;
  border-radius: 10px;
  background: transparent;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border: 1.5px solid rgba(255, 255, 255, 0.20);

  .text {
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;
    text-align: center;

    & h3 {
      text-align: center;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
      margin-bottom: 7px;
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: var(--white-color);
    }
  }
}

@media screen and (max-width: 840px) {
  .list {
    min-width: unset;
    max-width: 600px;
    width: 100%;

    .text {
      max-width: none;
    }
  }
}
</style>