<script setup lang="ts">

</script>

<template>
  <div class="top_part">
    <span class="size_6">Службой доставки товаров CDEK</span>
    <span class="size_6">Время доставки транспортной компанией CDEK <span style="color: var(--purple-color);">уточняйте
        у менеджера</span></span>
    <span class="size_6"><span style="font-weight: 500;">Доставка со скидкой</span> до 1 000 руб.</span>
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
      max-width: 297px;
    }
  }
}

@media screen and (max-width: 720px) {
  .top_part {
    & span {
      &:nth-child(2) {
        max-width: 170px;
      }
    }
  }
}
@media screen and (max-width: 630px) {
  .top_part {
    & span {
      &:first-child{
        max-width: 170px;
      }
      &:nth-child(2) {
        max-width: 157px;
      }
      // &:last-child {
      //   max-width: 129px;
      // }
    }
  }
}
</style>