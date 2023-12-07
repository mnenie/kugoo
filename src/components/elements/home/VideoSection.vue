<script setup lang="ts">
import VideoBlock from './VideoBlock.vue';
</script>

<template>
  <div class="video">
    <div class="container">
      <div class="video_block">
        <div class="text">
          <div class="text_1">
            <h1 class="size_1">Видеообзоры</h1>
            <p class="size_7">Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.
            </p>
          </div>
          <link-arrow>Смотреть все видеообзоры</link-arrow>
        </div>
        <VideoBlock />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video {
  margin-bottom: 100px;
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    &_1 {
      display: flex;
      flex-direction: column;
      gap: 17px;
      max-width: 405px;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
      }
    }
  }
}

@media screen and (max-width: 992px){
  .video{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 768px){
  .video{
    .text{
      &_1{
      max-width: 330px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .video{
    .text{
      &_1{
      max-width: 260px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .video{
    margin-bottom: 60px;
  }
}
</style>