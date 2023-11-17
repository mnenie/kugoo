<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import ButtonPurpleLg from './ButtonPurpleLg.vue';
const place = ref('+7 (___) __ - __ - __')
const formValue = ref<string>('')
const checked = ref<boolean>(true)
const isSubmit = ref<boolean>(false)
const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps(['onConfirm'])

const { defineInputBinds, handleSubmit, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
  }),
});
const onSubmit = async () => {
  isSubmit.value = true;
  await validate();
  if (Object.keys(errors.value).length === 0) {
    props.onConfirm();
  }
};
const phone = defineInputBinds('phone');
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_phone" :content-transition="'vfm-fade'">
    <div class="text_content">
      <h1>Менеджер позвонит вам в течение 5 минут</h1>
      <p>ответит на все вопросы и проконсультирует по продуктам Kugoo</p>
      <form @submit.prevent="onSubmit" style="max-width: 263px; width: 100%; display: flex; flex-direction: column">
        <input-form :placeholder="place" style="margin-bottom: 19px;" v-bind="phone" v-model="formValue" />
        <div style="color: var(--pink-color); margin-top: -15px; margin-bottom: 20px;">{{ errors.phone }}</div>
        <ButtonPurpleLg style="margin-bottom: 16px;">Позвоните мне</ButtonPurpleLg>
        <div class="check_block">
          <input type="checkbox" v-model="checked" :disabled="checked" id="flexCheckChecked">
          <label for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
            <router-link class="route" to="/">политикой конфиденциальности</router-link>
          </label>
        </div>
        <div style="color: var(--pink-color);">{{ errors.checkbox }}</div>
      </form>
    </div>
    <img class="img" src="/img/womanmodal.png" alt="">
    <div class="circle"></div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss">
.modal_vue {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_phone {
  position: relative;
  overflow: hidden;
  padding: 40px;
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: var(--white-color);
  max-width: 790px;
  width: 100%;
  min-height: 428px;

  .img {
    position: absolute;
    right: 70px;
    bottom: 0;
    z-index: 1;
  }

  .circle {
    position: absolute;
    right: -320px;
    bottom: -400px;
    width: 742px;
    height: 742px;
    border-radius: 742px;
    background: var(--btn-gray-color);
    z-index: 0;
  }

  .close {
    position: absolute;
    right: 14px;
    top: 14px;
    z-index: 101;
    cursor: pointer;
  }
}

.text_content {
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    max-width: 355px;
    color: var(--black-color);
    margin-bottom: 16px;
  }

  & p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--black-color);
    max-width: 311px;
    margin-bottom: 35px;
  }
}

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

@media screen and (max-width: 768px) {
  .modal_phone {
    .img {
      right: 0;
      width: 300px;
      height: 390px;
    }

    .circle {
      right: -320px;
      bottom: -200px;
      width: 542px;
      height: 542px;
      border-radius: 542px;
    }
  }
}
@media screen and (max-width: 650px) {
  .modal_phone {
    .img {
      right: -20px;
      width: 270px;
      height: 340px;
    }
  }
}
</style>