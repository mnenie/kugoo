<script setup lang="ts">
import NewsBlock from './NewsBlock.vue';
import Preloader from '@/components/UI/preloader/Preloader.vue';

import useNews from '@/hooks/useNews';
import { onMounted } from 'vue';
const {newsTop, getNewsTop, loader} = useNews()

onMounted(async () => {
  await getNewsTop()
})
</script>

<template>
  <div class="news_block">
    <div class="container">
      <div class="news">
        <h1 class="size_1">Новые статьи в блоге</h1>
        <div class="news_blocks">
          <Preloader v-if="loader" :len="3" :style="'height: 390px'" :loader="loader" />
          <NewsBlock v-else :news-top="newsTop" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news_block {
  padding-bottom: 100px;

  .news {
    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      margin-bottom: 50px;
    }

    &_blocks {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 20px;
    }
  }
}

@media screen and (max-width: 992px){
  .news_block{
    padding-bottom: 80px;
    .news{
      & h1{
      margin-bottom: 40px;
    }
    }
  }
}
@media screen and (max-width: 890px){
  .news_block{
    padding-bottom: 80px;
    .news{
      &_blocks{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: stretch;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .news_block{
    padding-bottom: 60px;
  }
}
</style>