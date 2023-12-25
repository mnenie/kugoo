<script setup lang="ts">
import { ref, type Ref } from 'vue';
import FormList from './FormList.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import downloadExcelHelper from '@/helpers/downloadExcelHelper';

const place = ref('+7 (___) __ - __ - __')
const phoneValue = ref<string>('')
const emailValue = ref<string>('')
const checked = ref<boolean>(true)
const btnTitle = ref('Скачать прайс-лист')
const isEmail = ref<boolean>(false)
const placeEmail = ref<string>('')

const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
  }),
});
const { downlandExcel } = downloadExcelHelper()
const onSubmit = async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    await downlandExcel()
  }
};
const phone = defineInputBinds('phone');

</script>

<template>
  <div class="list">
    <div class="text">
      <h3 class="size_4">Получите прайс-лист с оптовыми ценами</h3>
      <span class="size_7">а также рассчитаем вашу прибыль от продажи товаров Kugoo</span>
    </div>
    <FormList v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model:phone-value="phoneValue"
      v-model:email-value="emailValue" @on-submit="onSubmit" :btn-title="btnTitle" :is-email="isEmail" :email="null"
      :place-email="placeEmail" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 377px;
  border-radius: 10px;
  background: var(--purple-color);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .text {
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;
    text-align: center;
    max-width: 245px;

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

@media screen and (max-width: 900px) {
  .list {
    max-width: 600px;
    width: 100%;

    .text {
      max-width: none;
    }
  }
}
</style>