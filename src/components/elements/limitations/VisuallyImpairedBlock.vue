<script setup lang="ts">
import ButtonLimitation from '@/components/UI/ButtonLimitation.vue'
import { useLimitation } from '@/stores/limitation';
const limitation = useLimitation()
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="content">
        <div class="left_part">
          <span>Шрифт: </span>
          <ButtonLimitation @click="limitation.toggleIncreaseFontSizeBig">Большой</ButtonLimitation>
          <ButtonLimitation @click="limitation.toggleIncreaseFontSizeLgBig">Очень большой</ButtonLimitation>
          <ButtonLimitation @click="limitation.toggleIncreaseFontSizeLgMoreBig">Огромный</ButtonLimitation>
        </div>
        <btn-card-purple @click="limitation.changeShowLimitationReset">Обычный режим</btn-card-purple>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-color: rgba(0, 26, 52, .2);
  left: 0;
  min-height: 100px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left_part {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
}
</style>