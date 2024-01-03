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

defineProps<{
  titleScooter: string
  imgScooter: string
  priceScooter: string
}>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

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
    emit('confirm')
  }
};
const phone = defineInputBinds('phone');
const btnTitle = ref('Оформить предзаказ')
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_card" :content-transition="'vfm-fade'">
    <div class="content">
      <div class="text_content">
        <div class="text_content_1">
          <h2 class="size_3">Оформите предзаказ на электросамокат {{ titleScooter }}</h2>
          <p class="size_6">Сообщим вам, когда товар появится в наличии</p>
        </div>
        <FormModal v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue"
          @on-submit="onSubmit" :btn-title="btnTitle" :purple-btn="false" />
      </div>
      <div class="img_content">
        <img class="img_scooter" :src="imgScooter" alt="">
        <div class="price">
          <span class="size_8">{{ priceScooter }} ₽</span>
        </div>
      </div>
    </div>

    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  max-width: 355px;
  &_1{
    display: flex;
    flex-direction: column;
  }

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 9px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--black-color);
    margin-bottom: 26px;
  }
}

.img_content {
  width: 297.759px;
  height: 307px;
  background: rgba(240, 241, 245, 1);
  padding: 27px 0 22px 0;
  position: relative;
  border-radius: 10px;

  .img_scooter {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1;
    width: 260.525px;
    height: 242.56px;
  }

  .price {
    position: absolute;
    top: 12px;
    left: -25px;
    border-radius: 5px;
    background: var(--white-color);
    box-shadow: 0px 10px 20px 0px rgba(111, 115, 238, 0.10);
    width: 83px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--green-color);

    }
  }
}
@media screen and (max-width: 750px){
  .content{
    flex-direction: column;
    gap: 30px;
  }
  .text_content{
    max-width: 500px;
    align-items: center;
    & h2{
      text-align: center;
    }
    & p{
      text-align: center;
    }
  }
  .img_content{
    width: 90%;
  }
}
@media screen and (max-width: 540px){
  .content{
    flex-direction: unset;
    gap: 20px;
  }
  .text_content{
    max-width: 355px;
    align-items: unset;
    & h2{
      text-align: unset;
    }
    & p{
      text-align: unset;
    }
  }
  .img_content{
    width: 297.759px;
    height: 250px;
    .img_scooter{
      width: 216px;
      height: 206px;
    }
  }
}
@media screen and (max-width: 480px){
  .content{
    flex-direction: column;
    gap: 30px;
  }
  .text_content{
    max-width: 500px;
    align-items: center;
    & h2{
      text-align: center;
    }
    & p{
      text-align: center;
    }
  }
  .img_content{
    width: 85%;
  }
}
</style>