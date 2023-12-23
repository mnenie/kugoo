<script setup lang="ts">
const items = [
  { id: 1, icon: '/icons/cooperation/check.svg', strong: 'Цены', span: 'от завода-изготовителя Jilong ;' },
  { id: 2, icon: '/icons/cooperation/check.svg', strong: 'Бесплатный тест-драйв', span: 'самокатов;' },
  { id: 3, icon: '/icons/cooperation/check.svg', strong: 'Фирменную гарантию ', span: '1 год;' },
  { id: 4, icon: '/icons/cooperation/check.svg', strong: 'Ремонт и обслуживание', span: 'от 1 дня в собственном сервисном центре' },
  { id: 5, icon: '/icons/cooperation/check.svg', strong: 'Более 1 000 запчастей', span: 'и аксессуаров в наличии.' },
]
</script>

<template>
  <div class="text">
    <h1 class="size_1">С 2017 г. развиваем тему электротранспорта и освещаем
      его ценность в современном мире</h1>
    <p class="size_4 mainp">Наша цель</p>
    <span class="size_5">
      Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Cтремимся
      подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.
    </span>
    <p class="size_4 p_2">
      Специализируемся исключительно на бренде Kugoo, поэтому вы получите:
    </p>
    <div class="items">
      <div v-for="i in items" :key="i.id" class="item">
        <img :src="i.icon" alt="">
        <span class="size_5" style="font-weight: 500;">{{ i.strong }} <span style="font-weight: 400;">{{ i.span
        }}</span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  display: flex;
  flex-direction: column;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    max-width: 513px;
    margin-bottom: 34px;
  }

  .mainp {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
    margin-bottom: 15px;
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 35px;
    max-width: 538px;
  }

  .p_2 {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
    margin-bottom: 20px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .item {
      display: flex;
      align-items: center;
      gap: 10px;

      & img {
        width: 22px;
        height: 22px;
      }

      & span {
        font-style: normal;
        line-height: normal;
        color: var(--black-color);
        margin-bottom: 0;
        // white-space: nowrap;
      }
    }
  }
}
@media screen and (max-width: 670px){
  .text{
    align-items: center;
    & h1{
      text-align: center;
      max-width: unset;
      margin-bottom: 30px;
    }
    & span{
      text-align: center;
    }
    .p_2{
      text-align: center;
    }
    .items{
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
</style>