<script setup lang="ts">
const items = [
  { id: 1, title: 'Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».', img: '/icons/product/gift1.png' },
  { id: 2, title: 'Универсальный держатель для телефона ', img: '/icons/product/gift2.png' },
]
</script>

<template>
  <div class="banner">
    <p class="size_5">2 подарка при покупке</p>
    <div class="items">
      <div v-for="i in items" :key="i.id" class="item">
        <img :src="i.img" alt="">
        <span class="size_8">{{ i.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 20px;
  width: 100%;

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
    margin-bottom: 23px;
  }

  .items {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    .item {
      display: flex;
      align-items: center;
      gap: 18px;

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
      }
    }
  }
}</style>