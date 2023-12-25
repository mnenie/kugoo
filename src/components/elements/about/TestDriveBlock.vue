<script setup lang="ts">
import { ref } from 'vue';
import {useForm} from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router';

const phone = ref<string | number>('')

const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона')
  }),
}); 
const phoneValidate = defineInputBinds('phone')
const router = useRouter()

const onSubmit = async () => {
  await validate()
  if(Object.keys(errors.value).length === 0){
    router.push({name: 'thanks', params: {id: '3'}})
  }
}
</script>

<template>
  <div class="test_drive">
    <div class="container_lg">
      <div class="content">
        <div class="img">
          <img src="/img/about/2.png" alt="">
        </div>
        <div class="text">
          <h1 class="size_1">Бесплатный тест-драйв и обучение в Москве</h1>
          <p class="size_5">Оцените все преимущества самокатов лично</p>
          <div class="form">
            <div class="form_btns">
              <div class="input_form">
                <InputForm class="input" :placeholder="'+7 (___) __ - __ - __'" v-model="phone" v-bind="phoneValidate" />
                <div v-if="errors.phone" class="size_7" style="color: var(--pink-color); margin-top: 5px;">{{ errors.phone }}</div>
              </div>
              <ButtonPurpleLg @click="onSubmit">Оставить заявку на тест-драйв</ButtonPurpleLg>
            </div>
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test_drive {
  margin-bottom: 100px;

  .content {
    border-radius: 10px;
    background: var(--btn-gray-color);
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 29px;
  }

  .img {
    position: relative;
    width: 606px;
    height: 341px;
    overflow: hidden;
    border-radius: 10px;

    & img {
      position: absolute;
      left: -50px;
      border-radius: 10px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      max-width: 496px;
      margin-bottom: 11px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: var(--black-color);
      margin-bottom: 27px;
    }
    .form{
      display: flex;
      flex-direction: column;
      gap: 27px;
      .form_btns{
        display: flex;
        align-items: flex-start;
        gap: 17px;
        .input{
          min-width: 263px;
        }
      }
    }
  }
}
</style>