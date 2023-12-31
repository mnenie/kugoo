<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import NetworksMobile from './NetworksMobile.vue';
import FormModal from './FormModal.vue'
import FlexFormModal from './FlexFormModal.vue';
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
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона')
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

const screenWidth = ref(window.innerWidth);
const isScreenSmall = ref(screenWidth.value < 420);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  isScreenSmall.value = screenWidth.value < 420;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_sm_flex" :lock-scroll="true"
    :content-transition="'vfm-fade'">
    <div class="text">
      <div class="text_1">
        <h2 class="size_3">Запишитесь на диагностику и получите оценку стоимости и сроков ремонта</h2>
        <p class="size_6">Оставьте свой номер, менеджер свяжется с вами в течение 5 минут, чтобы уточнить проблему.</p>
      </div>
      <span class="size_8">Как с вами удобнее связаться?</span>
      <FlexFormModal v-if="!isScreenSmall" v-model:checked="checked" :errors="errors" :phone="phone" :place="place"
        v-model="formValue" @on-submit="onSubmit" :btn-title="btnTitle" :purple-btn="true" />
      <div v-else class="mobile">
        <NetworksMobile style="margin-bottom: 20px;" />
        <FormModal v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue"
          @on-submit="onSubmit" :btn-title="btnTitle" :purple-btn="true" />
      </div>
    </div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
.text {
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;

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
      max-width: 431px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      max-width: 348px;
    }
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    margin-bottom: 7px;
  }
}

.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 101;
  cursor: pointer;
}
@media screen and (max-width: 420px){
  .text{
    align-items: center;
    &_1{
      align-items: center;
      & h2{
        text-align: center;
      }
      & p{
        text-align: center;
      }
    }
  }
}
</style>