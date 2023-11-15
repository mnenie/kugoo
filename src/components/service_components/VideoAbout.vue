<script setup lang="ts">
import TextAbout from './TextAbout.vue';

const list = [
  {
    id: 1,
    img: '/icons/service/check.svg',
    title: 'Возможность выезжать в дождь или после дождя'
  },
  {
    id: 2,
    img: '/icons/service/check.svg',
    title: 'Можно ездить в любое время года'
  },
  {
    id: 3,
    img: '/icons/service/check.svg',
    title: 'Защита от влаги, пыли и грязи продлит срок беспроблемного использования.'
  }
]
const text = {
  title: 'Сделаем гидроизоляцию электросамоката',
  title1: 'которая позволит вам кататься в любую погоду',
  about: 'Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.',
  name: 'Что дает гидроизоляция:',
  last: 'Подробнее про гидроизоляцию прочитайте в нашей статье'
}
const style = 'max-width: 451px'
</script>


<template>
  <div class="content">
    <div class="container_lg">
      <div class="video_about">
        <div class="img">
          <img class="img_inside" src="/img/service/1.png" alt="">
        </div>
        <TextAbout :style="style" :text="text" :list="list" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.content {
  margin-bottom: 50px;
}

.video_about {
  display: flex;
  gap: 66px;
  // align-items: center;

  .img {
    width: 703px;
    height: 392px;
    overflow: hidden;
    position: relative;
    background-color: var(--whaite-color);
    border-radius: 10px;

    & img {
      position: absolute;
      width: 703px;
      top: -40px;
      height: 470px;
    }
  }
}
@media screen and (max-width: 992px) {
  .video_about {
    gap: 30px;
    .img{
      height: 340px;
      & img{
        width: 658px;
        height: 446px;
      }
    }
  }
}
@media screen and (max-width: 940px) {
  .video_about {
    .img {

      & img {
        right: -150px;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .video_about {
    gap: 20px;
    .img{
      height: 320px;
      & img{
        width: 560px;
        height:378px;
        right: -230px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .video_about {
    .img{
      & img{
        width: 530px;
        height:395px;
        right: -230px;
      }
    }
  }
}
</style>