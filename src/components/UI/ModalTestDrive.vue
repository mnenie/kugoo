<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import FormModal from './FormModal.vue';
import NetworksMobile from './NetworksMobile.vue';

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
    select: yup.string().required('*Выберите город'),
  }),
});
const onSubmit = async () => {
  isSubmit.value = true;
  await validate();
  if (errors.value.phone?.length === undefined) {
    props.onConfirm();
  }
};
const phone = defineInputBinds('phone');
const btnTitle = ref('Записаться')
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_between" :lock-scroll="true" :content-transition="'vfm-fade'">
    <div class="content_modal">
      <div class="text">
        <div class="text_1">
          <h2 class="size_3">Запишитесь на тест-драйв электросамоката</h2>
          <p class="size_6">и подберите модель для себя
          </p>
        </div>
        <div class="text_2">
          <span class="size_7">Менеджер свяжется с вами в течение 5 минут, чтобы согласовать время.
          </span>
        </div>
        <span class="size_8 how">Как с вами удобнее связаться?</span>
        <NetworksMobile style="margin-bottom: 20px;" />
        <FormModal v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue"
          @on-submit="onSubmit" :btn-title="btnTitle" :purple-btn="true" />
      </div>
      <div class="img_block">
        <img src="/img/testdrive/modal.png" alt="">
        <div class="block">
          <span class="size_8">В сентябре <span style="color: var(--pink-color);">осталось 5 мест</span> на бесплатный тест-драйв</span>
        </div>
      </div>
    </div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
.content_modal {
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.text {
  display: flex;
  flex-direction: column;
  max-width: 315px;
  width: 100%;

  &_1 {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 33px;
    color: var(--black-color);

    & h2 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }

  &_2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
  }

  .how {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    margin-bottom: 7px;
  }
}

.img_block {
  position: relative;
  margin-right: 10px;
  & img{
    position: relative;
    border-radius: 10px;
  }
  .block {
    position: absolute;
    top: 20px;
    right: -40px;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(111, 115, 238, 0.10);
    padding: 15px 18px;
    width: 192px;
    display: flex;
    align-items: center;
    justify-content: center;
    & span{
      text-align: center;
    }
  }
}


.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 101;
  cursor: pointer;
}

@media screen and (max-width: 768px){
  .content_modal{
    .img_block{
      margin-right: 0;
      & img{
        width: 286px;
        height: 420px;
      }
    }
  }
}
@media screen and (max-width: 650px){
  .content_modal{
    .img_block{
      margin-right: 0;
      & img{
        width: 230px;
        height: 340px;
      }
      .block{
        top: -30px;
        right: -20px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .text{
    max-width: 230px;
    &_1{
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 540px){
  .text{
    max-width: 400px;
    &_1{
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 410px){
  .text{
    max-width: 230px;
    &_1{
      margin-bottom: 20px;
    }
  }
}
</style>