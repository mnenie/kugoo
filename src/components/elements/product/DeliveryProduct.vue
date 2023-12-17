<script setup lang="ts">
const items1 = [
  { id: 1, title: 'наличными', svg: '/icons/product/arrow.svg' },
  { id: 2, title: 'картой', svg: '/icons/product/arrow.svg' },
  { id: 3, title: 'онлайн на сайте через корзину', svg: '/icons/product/arrow.svg' },
  { id: 4, title: 'через интернет-банкинг по счету', svg: '/icons/product/arrow.svg' },
  { id: 5, title: 'в кредит от «Сбербанка»', svg: '/icons/product/arrow.svg' },
]
const items2 = [
  { id: 1, title: 'Отправляем заказы по всей России день в день службой доставки товаров CDEK', svg: '/icons/product/arrow.svg' },
  { id: 2, title: 'Самовывоз из магазинов в Москве, Санкт-Петербурге и Краснодаре', svg: '/icons/product/arrow.svg' },
]
</script>

<template>
  <div class="delivery">
    <div class="block_1">
      <h2 class="size_3">5 способов оплаты</h2>
      <p class="size_6">Вы можете оплатить покупку:</p>
      <div class="items">
        <div v-for="i in items1" :key="i.id" class="item">
          <img :src="i.svg" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
    <div class="block_2">
      <h2 class="size_3">Доставка по всей России</h2>
      <div class="items">
        <div v-for="i in items2" :key="i.id" class="item">
          <img :src="i.svg" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.delivery {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 28px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;

      & img {
        width: 10px;
        height: 10px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        color: var(--black-color);
      }
    }
  }

  .block_1 {
    display: flex;
    flex-direction: column;

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
      margin-bottom: 15px;
    }
  }

  .block_2 {
    display: flex;
    flex-direction: column;
  }
}</style>