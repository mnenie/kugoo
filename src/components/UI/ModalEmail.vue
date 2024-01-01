<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
const emit = defineEmits<{
  (e: 'close'): void
}>()
const imgs = [
  {
    id: 1,
    img: '/icons/modal/google.svg'
  },
  {
    id: 2,
    img: '/icons/modal/yandex.svg'
  },
  {
    id: 3,
    img: '/icons/modal/outlook.svg'
  },
  {
    id: 4,
    img: '/icons/modal/yahoo.svg'
  }
]
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_sm_sm" :lock-scroll="true"
    :content-transition="'vfm-fade'">
    <div class="content">
      <h2 class="size_3">Благодарим за подписку на рассылку</h2>
      <p class="size_7">Перейдите в свою почту, чтобы подтвердить подписку и получить видеообзор «Топ-3 электросамоката
        2021г.»
      </p>
      <span class="size_8">Выберите свой почтовый сервис</span>
      <div class="socials">
        <div v-for="img in imgs" :key="img.id" class="social">
          <img :src="img.img" alt="">
        </div>
      </div>
      <span class="size_8">Если письма не во входящих, проверьте папку «Промоакции» или «Спам». Письмо могло попасть туда
        по ошибке.</span>
    </div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
.content {
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  max-width: 409px;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 15px;
    text-align: center;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
    margin-bottom: 26px;
    text-align: center;
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    text-align: center;
  }
}

.socials {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 22px;
  justify-content: center;

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

.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 101;
  cursor: pointer;
}
</style>