<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open') :void
}>()
</script>

<template>
  <div class="top_part">
    <span class="size_6">Службой доставки товаров CDEK</span>
    <span class="size_6">Стоимость и сроки доставки транспортной компанией CDEK <span
        style="color: var(--purple-color); cursor: pointer;" @click="emit('open')">уточняйте
        у менеджера</span></span>
    <span class="size_6">Стоимость доставки зависит от веса, габаритов и дальности отправки.</span>
  </div>
</template>

<style lang="scss" scoped>
.top_part {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 38px;
  border-bottom: 1px solid rgba(93, 108, 123, 0.2);
  margin-bottom: 39px;
  align-items: flex-start;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);

    &:nth-child(2) {
      max-width: 310px;
    }

    &:last-child {
      max-width: 328px;
    }
  }
}

@media screen and (max-width: 870px) {
  .top_part {
    & span {
      &:nth-child(2) {
        max-width: 249px;
      }

      &:last-child {
        max-width: 163px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .top_part {
    & span {
      &:nth-child(2) {
        max-width: 214px;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .top_part {
    & span {
      &:first-child {
        max-width: 144px;
      }
    }
  }
}
@media screen and (max-width: 610px) {
  .top_part {
    & span {
      &:nth-child(2) {
        max-width: 150px;
      }
    }
  }
}
</style>