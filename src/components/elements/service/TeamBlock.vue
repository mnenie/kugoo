<script setup lang="ts">
interface IEmoji {
  id: number;
  img: string;
  title: string;
}
const items: IEmoji[] = [
  {
    id: 1,
    img: '/img/service/emodji1.png',
    title: `Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их`
  },
  {
    id: 2,
    img: '/img/service/emodji2.png',
    title: 'Консультант сервисного центра сопровождает вас на протяжении всего времени эксплуатации и помогает решить возникающие вопросы.'
  }
]
</script>

<template>
  <div class="blocks">
    <div v-for="item in items" :key="item.id" class="block">
      <img :src="item.img" alt="">
      <p class="size_7">{{ item.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 67px;

  .block {
    max-width: 515px;
    width: 100%;
    padding: 24px 22px 24px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid var(--gray-200-color);
    gap: 32px;

    & img {
      width: 52px;
      height: 52px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }
  }
}
@media screen and (max-width: 768px){
  .blocks{
    flex-direction: column;
    width: 100%;
    .block{
      max-width: 100%;
    }
  }
}
</style>