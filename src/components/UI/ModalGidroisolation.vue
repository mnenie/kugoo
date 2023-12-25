<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import NetworksMobile from './NetworksMobile.vue';
import useGetAllScooters from '@/hooks/useGetAllScooters';
import FormColumn from './FormColumn.vue'

const { items } = useGetAllScooters()
const place = ref('+7 (___) __ - __ - __')
const formValue = ref<string>('')
const checked = ref<boolean>(true)
const isSubmit = ref<boolean>(false)
const selected = ref(null)

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()
defineProps<{
  title: string
  about: string
  btnTitle: string
}>()

const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
    select: yup.string().required('*Выберите модель'),
  }),
});
const onSubmit = async () => {
  isSubmit.value = true;
  await validate();
  if (errors.value.phone?.length === undefined && selected.value !== null) {
    emit('confirm')
  }
};
const phone = defineInputBinds('phone');
const select = defineInputBinds('select');
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_sm_flex_sm" :lock-scroll="true"
    :content-transition="'vfm-fade'">
    <div class="text">
      <div class="text_1">
        <h2 class="size_3">{{ title }}</h2>
        <p class="size_6">{{ about }}</p>
      </div>
      <span class="size_8">Как с вами удобнее связаться?</span>
      <div class="content_btns">
        <div class="text_2">
          <div class="select">
            <v-select :options="items" placeholder="Выберите модель" label="title" v-model="selected" v-bind="select">
              <template #option="{ title }">
                <span style="color: var(--black-color);" class="size_7">{{ title }}</span>
              </template>
            </v-select>
            <div class="size_7" style="color: var(--pink-color); margin-top: 5px">{{ selected === null ? errors.select :
              '' }}</div>
          </div>
          <NetworksMobile style="margin-bottom: 0;" />
        </div>
        <FormColumn v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue"
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
    align-items: center;
    color: var(--black-color);

    & h2 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      max-width: 415px;
      text-align: center;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
    }
  }

  &_2 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 20px;

    .select {
      width: 100%;
    }
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    margin-bottom: 7px;
    align-self: self-end;
  }
}

.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 101;
  cursor: pointer;
}

.mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}
</style>