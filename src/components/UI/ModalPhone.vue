<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import FormModal from './FormModal.vue';

const place = ref('+7 (___) __ - __ - __')
const formValue = ref<string>('')
const checked = ref<boolean>(true)
const isSubmit = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'close'): void
}>()
const props = defineProps(['onConfirm'])

const { defineInputBinds, errors, validate } = useForm({
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
const btnTitle = ref('Позвоните мне')
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final" :content-transition="'vfm-fade'">
    <div class="text_content">
      <h2 class="size_3">Менеджер позвонит вам в течение 5 минут</h2>
      <p class="size_6">ответит на все вопросы и проконсультирует по продуктам Kugoo</p>
      <FormModal v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue" @on-submit="onSubmit" :btn-title="btnTitle" :purple-btn="true" />
    </div>
    <img class="img" src="/img/womanmodal.png" alt="">
    <div class="circle"></div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
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

.text_content {
  display: flex;
  flex-direction: column;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    max-width: 355px;
    color: var(--black-color);
    margin-bottom: 16px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--black-color);
    max-width: 311px;
    margin-bottom: 35px;
  }
}

@media screen and (max-width: 768px) {
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

@media screen and (max-width: 650px) {
  .img {
    right: -20px;
    width: 270px;
    height: 340px;
  }
}
</style>