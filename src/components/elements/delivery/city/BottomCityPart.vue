<script setup lang="ts">
import { footerPays } from '@/mocks/footer/footerPays';
</script>

<template>
  <div class="bottom_part">
    <p class="size_5">Выбирайте подходящий способ оплаты</p>
    <div class="part_1">
      <span class="size_6">Наличными в магазине или курьеру</span>
      <div class="two">
        <span class="size_6">Картой в магазине</span>
        <div class="imgs">
          <div v-for="item in footerPays" :key="item.id" class="img">
            <img :src="item.svg" alt="">
          </div>
        </div>
      </div>
      <span class="size_6">Онлайн на сайте через корзину</span>
    </div>
    <div class="part_2">
      <span class="size_6">Через интернет-банкинг по счету, который вам выставит менеджер</span>
      <span class="size_6">В рассрочку от Сбербанка, Тинькофф банка или по карте "Халва" от Совкомбанка</span>
      <span class="size_6">В рассрочку — только для электрсоамокатов версии MAX</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom_part {
  display: flex;
  flex-direction: column;

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 33px;
    color: var(--black-color);
  }

  .part_1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
    align-items: flex-start;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }

    .two {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .imgs {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  .part_2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;

    & span {
      &:first-child {
        max-width: 302px;
      }

      &:nth-child(2) {
        max-width: 224px;
      }

      &:last-child {
        max-width: 261px;
      }
    }
  }
}

@media screen and (max-width: 970px) {
  .bottom_part {
    .part_1{
      .two{
        .imgs{
          flex-wrap: wrap;
        }
      }
    }
    .part_2 {
      & span {
        &:first-child {
          max-width: 230px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .bottom_part {
    .part_2 {
      & span {
        &:first-child {
          max-width: 171px;
        }
      }
    }
  }
}
@media screen and (max-width: 680px) {
  .bottom_part {
    .part_1{
      & span{
        &:first-child{
          max-width: 121px;
        }
      }
    }
    .part_2 {
      & span {
        &:nth-child(2) {
          max-width: 187px;
        }
        &:last-child{
          max-width: 192px;
        }
      }
    }
  }
}
</style>