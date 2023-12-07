<script setup lang="ts">
import {ref} from 'vue'
const imgs = ref([
  {
    id: 1,
    img: '/img/service/team/1.png',
    name: 'Дмитрий Никитенко',
    body: 'Руководитель сервисного центра'
  },
  {
    id: 2,
    img: '/img/service/team/2.png',
    name: 'Анастасия Горина',
    body: 'Заместитель директора'
  },
  {
    id: 3,
    img: '/img/service/team/3.png',
    name: 'Юлия Кортич',
    body: 'Менеджер по продажам'
  },
  {
    id: 4,
    img: '/img/service/team/4.png',
    name: 'Сергей Бойко',
    body: 'Мастер по ремонту самокатов'
  },
  {
    id: 5,
    img: '/img/service/team/5.png',
    name: 'Николай Прокофьев',
    body: 'Старший менеджер'
  },
])

</script>

<template>
  <div class="members">
    <div class="members_content" v-for="img in imgs" :key="img.id">
      <div class="img_block">
        <img style="border-radius: 10px;" :src="img.img" alt="">
        <div class="line"></div>
      </div>
      <div class="text">
        <p class="size_5">{{ img.name }}</p>
        <span class="size_7">{{ img.body }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.members {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}

.members_content {
  width: 255px !important;
  height: 387px !important;

  .img_block {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 316px;
    border: 1px solid var(--btn-gray-color);
    background: var(--btn-gray-color);
    border-radius: 10px 10px 0 0;
    margin-bottom: 22px;

    .line {
      height: 2px;
      width: 100%;
      background: var(--purple-color);
      bottom: 0;
      position: absolute;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
    }
  }

  & img {
    position: absolute;
  }

  &:first-child {
    & img {
      width: 254px;
      height: 318px;
      top: 15px;
    }
  }

  &:nth-child(2) {
    & img {
      width: 216px;
      height: 340px;
      top: 25px;
      left: 20px;
    }
  }

  &:nth-child(3) {
    & img {
      top: 12px;
    }
  }

  &:nth-child(4) {
    & img {
      width: 195px;
      height: 307px;
      top: 19px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:nth-child(5) {
    & img {
      width: 220px;
      height: 351px;
      top: 19px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.arrow {
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -58%);
}

@media screen and (max-width: 1372px){
  .members{
    grid-template-columns: repeat(3, 1fr);
    .members_content{
      width: 100% !important;
      & img{
        left: 50% !important;
        transform: translateX(-50%);
      }
    }
  }
}
@media screen and (max-width: 890px){
  .members{
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>