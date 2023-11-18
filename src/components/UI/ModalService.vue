<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import useAddresses from '@/hooks/useAddresses';
import FormModal from './FormModal.vue';

const place = ref('+7 (___) __ - __ - __')
const formValue = ref<string>('')
const checked = ref<boolean>(true)
const isSubmit = ref<boolean>(false)
const { address } = useAddresses()
const selected = ref(null)
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
  if (errors.value.phone?.length === undefined && selected.value !== null) {
    props.onConfirm();
  }
};
const phone = defineInputBinds('phone');
const select = defineInputBinds('select');
const imgs = [
  {
    id: 1,
    img: '/icons/service/viber.svg'
  },
  {
    id: 2,
    img: '/icons/service/whatsapp.svg'
  },
  {
    id: 3,
    img: '/icons/service/tg.svg'
  },
]
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final" :lock-scroll="true" :content-transition="'vfm-fade'">
    <div class="text">
      <div class="text_1">
        <h2 class="size_3">Запишитесь в сервисный центр</h2>
        <p class="size_6">и получите профессионалное обслуживание от специалистов Kugoo-Russia
        </p>
      </div>
      <div class="text_2">
        <span class="size_7">Заполните форму, и менеджер свяжется с вами
          в течение 5 минут, чтобы уточнить детали
        </span>
        <v-select :options="address" placeholder="Выберите свой город" label="city" v-model="selected" v-bind="select">
          <template #option="{ region, city }">
            <h3 style="color: var(--black-color);" class="size_6">{{ region }}</h3>
            <span style="color: var(--gray-600-color);" class="size_7">{{ city }}</span>
          </template>
        </v-select>
        <div style="color: var(--pink-color); margin-top: -10px">{{ selected === null ? errors.select : '' }}</div>
      </div>
      <div class="text_3">
        <span class="size_8">Как с вами удобнее связаться?</span>
        <div class="socials">
          <div v-for="img in imgs" :key="img.id" class="social">
            <img :src="img.img" alt="">
          </div>
        </div>
      </div>
      <FormModal v-model:checked="checked" :errors="errors" :phone="phone" :place="place" v-model="formValue" @on-submit="onSubmit" />
    </div>
    <img class="img" src="/img/service/modal1.png" alt="">
    <div class="circle"></div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
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

@media screen and (max-width: 768px) {
  .img {
    width: 507.975px;
    height: 504.211px;
  }

  .circle {
    right: -320px;
    bottom: -220px;
    width: 642px;
    height: 642px;
    border-radius: 642px;
  }
}

@media screen and (max-width: 650px) {
  .img {
    width: 380.975px;
    height: 377.211px;
  }

  .circle {
    right: -280px;
    bottom: -150px;
    width: 542px;
    height: 542px;
    border-radius: 542px;
  }
}

@media screen and (max-width: 600px) {
  .img {
    width: 360.975px;
    height: 357.211px;
    right: -30px;
  }

  .circle {
    right: -340px;
    bottom: -150px;
    width: 542px;
    height: 542px;
    border-radius: 542px;
  }
}</style>