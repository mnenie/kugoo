<script setup lang="ts">
import NewsItems from '../blogs/NewsItems.vue';
import useNews from '@/hooks/useNews';
import { onMounted } from 'vue';
const { newsTop, getNewsTop } = useNews()

onMounted(async () => {
  await getNewsTop()
})
</script>

<template>
  <div class="container">
    <div class="more_blog">
      <h1 class="size_1">Вам также может быть интересно</h1>
      <div class="news">
        <NewsItems :news="newsTop" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.more_blog {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  gap: 38px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .news {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
@media screen and (max-width: 992px){
  .more_blog{
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 890px) {
  .more_blog {
    .news {
      grid-template-columns: repeat(2, 1fr);
      align-items: stretch;
    }
  }
}
@media screen and (max-width: 600px){
  .more_blog{
    margin-bottom: 60px;
  }
}
</style>