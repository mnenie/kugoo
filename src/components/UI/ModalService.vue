<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import ButtonPurpleLg from './ButtonPurpleLg.vue';
import useAddresses from '../../hooks/useAddresses';

const place = ref('+7 (___) __ - __ - __')
const formValue = ref<string>('')
const checked = ref<boolean>(true)
const isSubmit = ref<boolean>(false)
const address = ref<string[]>([])
const {getAddress} = useAddresses()
onMounted(() => {
  getAddress(address)
})
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
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_phone" :lock-scroll="true" :content-transition="'vfm-fade'">
    <div class="text">
      <div class="text_1">
        <h2 class="size_3">Запишитесь в сервисный центр</h2>
        <p class="size_6">и получите профессионалное обслуживание от специалистов Kugoo-Russia
        </p>
      </div>
      <div class="text_2">
        <span class="size_7">Заполните форму, и менеджер свяжется с вами
          в течение 5 минут, чтобы уточнить детали</span>
        <v-select :options="address"></v-select>
      </div>
      <div class="text_3">
        <span class="size_8">Как с вами удобнее связаться?</span>
        <div class="socials">
          <div class="social">
            <img src="/icons/service/viber.svg" alt="">
          </div>
          <div class="social">
            <img src="/icons/service/whatsapp.svg" alt="">
          </div>
          <div class="social">
            <img src="/icons/service/tg.svg" alt="">
          </div>
        </div>
      </div>
      <form @submit.prevent="onSubmit" style="max-width: 263px; width: 100%; display: flex; flex-direction: column">
        <input-form :placeholder="place" style="margin-bottom: 20px;" v-bind="phone" v-model="formValue" />
        <div style="color: var(--pink-color); margin-top: -15px; margin-bottom: 20px;">{{ errors.phone }}</div>
        <ButtonPurpleLg style="margin-bottom: 16px;">Записаться</ButtonPurpleLg>
        <div class="check_block">
          <input type="checkbox" v-model="checked" :disabled="checked" id="flexCheckChecked">
          <label for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
            <router-link class="route" to="/">политикой конфиденциальности</router-link>
          </label>
        </div>
        <div style="color: var(--pink-color);">{{ errors.checkbox }}</div>
      </form>
    </div>
    <img class="img" src="/img/service/modal1.png" alt="">
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

  .text {
    position: relative;
    z-index: 99;
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

    &_3 {
      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
        margin-bottom: 7px;
      }

      .socials {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;

        .social {
          border-radius: 5px;
          border: 1px solid var(--gray-200-color);
          width: 78px;
          height: 53px;
          display: flex;
          align-items: center;

          & img {
            display: block;
            margin: 0 auto;
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .img {
    position: absolute;
    width: 607.975px;
    height: 604.211px;
    right: 0px;
    z-index: 1;
  }

  .circle {
    position: absolute;
    right: -380px;
    bottom: -300px;
    width: 794px;
    height: 794px;
    border-radius: 794px;
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