<script setup lang="ts">
import ModalTestDrive from '@/components/UI/ModalTestDrive.vue';
import ScootersCards from '@/components/elements/home/ScootersCards.vue';
import useTestDriveScooters from '@/hooks/useTestDriveScooters';
import { computed } from 'vue';
import { useModal } from 'vue-final-modal';
const { cards } = useTestDriveScooters()
const style = computed(() => {
  return 'margin-bottom: 0px'
})
const { open, close } = useModal({
  component: ModalTestDrive,
  attrs: {
    onClose() {
      close()
    },
    onConfirm() {
      close();
    }
  }
})
const openModalTest = () => {
  open()
}
</script>

<template>
  <div class="card_block">
    <div class="container">
      <div class="block">
        <h1 class="size_1">Сейчас для тест-драйва и обучения доступны следующие модели</h1>
        <ScootersCards :cards="cards" :style="style" @open-modal-test="openModalTest" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card_block {
  margin-bottom: 100px;

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      text-align: center;
      max-width: 742px;
      color: var(--black-color);
    }
  }
}
@media screen and (max-width: 600px) {
  .card_block{
    margin-bottom: 80px;
  }
}
</style>