<script setup lang="ts">
import NewsItems from './NewsItems.vue'
import BlogFilter from './BlogFilter.vue';
import { btnsFilterBlog } from '@/mocks/ui/btnsFilter';
import useNews from '@/hooks/useNews';
import { onMounted, ref, computed } from 'vue';
import type { INews } from '@/types/index';

const { news, getAllNews, newsRec, newsTop, newsComparison, getNewsComparison, getNewsRecomendation, getNewsTop } = useNews()
const refNews = ref<INews[]>([])

const filterCards = computed(() => {
  return async (id: number) => {
    btnsFilterBlog.value.forEach((btn, i) => {
      btn.active = i === id;
    });
    switch (id) {
      case 0:
        refNews.value = news.value;
        break;
      case 1:
        await getNewsRecomendation();
        refNews.value = newsRec.value;
        break;
      case 2:
        await getNewsComparison();
        refNews.value = newsComparison.value;
        break;
      case 3:
        await getNewsTop();
        refNews.value = newsTop.value;
        break;
      default:
        break;
    }
  }
})
onMounted(async () => {
  await getAllNews();
  refNews.value = news.value;
});
</script>

<template>
  <div>
    <BlogFilter :btns-filter-blog="btnsFilterBlog" @filter-cards="filterCards" />
    <div class="news">
      <NewsItems :news="refNews" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 100px;
}

@media screen and (max-width: 890px) {
  .news {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
  }
}
</style>