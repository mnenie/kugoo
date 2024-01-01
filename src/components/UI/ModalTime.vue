<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { useRouter } from 'vue-router';
import { CATALOG_ROUTE } from '@/utils/consts';
const emit = defineEmits<{
  (e: 'close'): void
}>()
const router = useRouter()
const goToCatalog = () => {
  router.push(CATALOG_ROUTE)
  emit('close')
}
</script>

<template>
  <VueFinalModal class="modal_vue" content-class="modal_final_sm" :lock-scroll="true" :content-transition="'vfm-slide-up'">
    <div class="content">
      <h2 class="size_3">Счастливые часы</h2>
      <p class="size_6"><span class="size_6">Каждые выходные с 00:00 до 05:00 </span>дополнительный подарок к любому заказу
        фирменный рюкзак</p>
      <ButtonPurpleLg @click="goToCatalog" style="margin-bottom: 16px; width: 200px;">Перейти в каталог</ButtonPurpleLg>
    </div>
    <img class="img" src="/img/service/modal2.png" alt="">
    <div class="circle"></div>
    <img @click="emit('close')" class="close" src="/icons/closemodal.svg" alt="">
  </VueFinalModal>
</template>


<style lang="scss" scoped>
.content {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  max-width: 293px;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 19px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--black-color);
    margin-bottom: 28px;

    & span {
      font-weight: 500;
    }
  }
}

.img {
  position: absolute;
  z-index: 1;
  width: 440px;
  height: 402px;
  transform: rotate(-18.221deg);
  top: 0;
  right: -80px;
}

.circle {
  position: absolute;
  z-index: 0;
  width: 452px;
  height: 452px;
  border-radius: 452px;
  right: -250px;
  bottom: -230px;
  background: var(--btn-gray-color);
}

.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 101;
  cursor: pointer;
}
</style>