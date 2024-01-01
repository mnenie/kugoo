<script setup lang="ts">
import type { IBtns } from '@/types/ui.interface';
import { ref } from 'vue';

const props = defineProps<{
  btnsFilterBlog: IBtns[]
}>()

const emit = defineEmits<{
  (e: 'filterCards', id: number): void
}>()

const icons = ref([
  { id: 1, svg: '/icons/blog/vk.svg' },
  { id: 2, svg: '/icons/blog/inst.svg' },
  { id: 3, svg: '/icons/blog/youtube.svg' },
  { id: 4, svg: '/icons/blog/tg.svg' },
])

</script>

<template>
  <div class="filter_blog">
    <FilterItems :btns-filter="btnsFilterBlog" @filter-cards="emit('filterCards', $event)" />
    <div class="imgs">
      <div v-for="item in icons" :key="item.id" class="item">
        <img :src="item.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter_blog {
  margin-bottom: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .imgs {
    display: flex;
    align-items: center;
    gap: 10px;

    .item {
      border-radius: 5px;
      border: 1px solid var(--gray-200-color);
      width: 37px;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 650px) {
  .filter_blog {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    

    .btn_section {
      grid-template-columns: repeat(4, 1fr) !important;
    }
  }
}
</style>