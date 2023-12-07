<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
defineProps<{
  card: ICards
}>()
const emit = defineEmits<{
  (e: 'changeImg', img: string): void
}>()
</script>

<template>
  <div class="img_block">
    <div class="img">
      <img :src="card.img" alt="">
    </div>
    <div class="more">
      <div v-for="img in card.imgsMore" :key="img" class="img_more">
        <img @click="emit('changeImg', img)" style="cursor: pointer;" :src="img" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img_block {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .img {
    border-radius: 10px;
    background: #F0F1F5;
    max-width: 570px;
    min-width: 570px;
    width: 100%;
    height: 506px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 450px;
      height: 426px;
    }
  }
  .more{
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    max-width: 570px;
    min-width: 570px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    .img_more{
      border-radius: 10px;
      border: 1.3px solid #F0F1F5;
      background: #F0F1F5;
      width: 110px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img{
        width: 70px; 
        height: 70px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .img_block{
    width: 100%;
    max-width: 100%;
    .img{
      min-width: unset;
      max-width: 100%;
      width: 100%;
    }
    .more{
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>