<script setup lang="ts">
import TextAbout from './TextAbout.vue';

const list = [
  {
    id: 1,
    img: '/icons/service/check.svg',
    title: 'Регулировка натяжения тормозного троса'
  },
  {
    id: 2,
    img: '/icons/service/check.svg',
    title: 'Регулировка положения тормозной ручки'
  },
  {
    id: 3,
    img: '/icons/service/check.svg',
    title: 'Регулировка тормозных механизмов'
  },
  {
    id: 4,
    img: '/icons/service/check.svg',
    title: 'Протяжка всех соединений'
  },
  {
    id: 5,
    img: '/icons/service/check.svg',
    title: 'И еще более 35 работ.'
  }
]
const text = {
  title: 'Продлим срок службы вашего самоката в 2 раза',
  title1: 'благодаря настройкам от специалистов с опытом 7+ лет',
  about: 'Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.',
  name: 'Что входит в настройку:',
  last: 'Подробнее про настройку прочитайте в нашей статье'
}
const style = 'max-width: 427px'
</script>

<template>
  <div class="scooter_about">
    <div class="container">
      <div class="blocks">
        <TextAbout :list="list" :text="text" :style="style" />
        <div class="img">
          <img src="/img/cards/scooter4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scooter_about{
  margin-bottom: 100px;
}
.blocks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.img {
  position: relative;
  border-radius: 10px;
  width: 542px;
  height: 470px;
  min-width: 240px;
  background-color: #eeeff5;
  overflow: hidden;
  & img {
    width: 450px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (max-width: 1200px){
  .scooter_about{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 992px){
  .blocks{
    gap: 20px;
  }
  .img{
    width: 460px;
    height: 414px;
    & img{
      width: 350px;
      height: 340px;
    }
  }
}
@media screen and (max-width: 890px){
  .img{
    & img{
      width: 320px;
      height: 300px;
    }
  }
}
@media screen and (max-width: 820px){
  .img{
    height: 360px;
    & img{
      width: 300px;
      height: 280px;
    }
  }
}
@media screen and (max-width: 768px){
  .img{
    & img{
      width: 264px;
      height: 230px;
    }
  }
}
@media screen and (max-width: 540px){
  .img{
    & img{
      width: 242px;
      height: 220px;
    }
  }
}
</style>