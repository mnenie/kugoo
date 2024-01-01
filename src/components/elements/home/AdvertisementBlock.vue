<script setup lang="ts">
import type { IAdvertisement } from '@/types/index';
const props = defineProps<{
  blocks: IAdvertisement[]
  blocks1: IAdvertisement[]
  flag: boolean
  route: string
}>()

</script>

<template>
  <div class="blocks_market">
    <div v-for="block in (flag ? blocks : blocks1)" :key="block.id" class="market_block">
      <div v-if="!(block.id === 6)" class="block_inside">
        <img :src="block.svg" alt="">
        <h1 class="size_5">{{ block.title }}</h1>
        <p class="size_7">{{ block.body }}</p>
      </div>
      <div v-else class="block_inside_new">
        <span class="size_5">{{ block.newTitle }}</span>
        <router-link :to="route" class="route catalog_2">
          {{ block.link }}
          <img :src="block.svglink" alt="">
        </router-link>
        <img class="img" :src="block.img" v-if="flag" alt="">
        <img class="img1" :src="block.img" v-if="!flag" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks_market {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .market_block {
    border-radius: 10px;
    border: 1px solid var(--gray-200-color);

    .block_inside {
      padding: 26px 25px 26px 20px;
      display: flex;
      flex-direction: column;
      max-width: 350px;
      min-height: 185px;

      & img {
        width: 25px;
        height: 25px;
        margin-bottom: 20px;
      }

      & h1 {
        color: var(--black-color);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 8px;
      }

      & p {
        color: var(--black-color);
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }
    }

    .block_inside_new {
      max-width: 350px;
      height: 185px;
      background: var(--btn-gray-color);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      justify-content: center;
      padding-left: 33px;

      & span {
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        color: var(--black-color);
        margin-bottom: 6px;
      }

      .img {
        position: absolute;
        bottom: 0;
        right: -74px;
        width: 278px;
        height: 209px;
      }

      .img1 {
        width: 214px;
        height: 214px;
        transform: rotate(11.419deg);
        position: absolute;
        bottom: -45px;
        right: -35px;
      }

      .route {
        display: flex;
        gap: 8px;
        align-items: center;
        text-decoration: none;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--purple-color);
        transition: gap 0.15s ease-in;
        &:hover{
          gap: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .blocks_market {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    .market_block {
      .block_inside{
        max-width: 100%;
      }
      .block_inside_new{
        max-width: 100%;
      }
    }
  }
}
@media screen and (max-width: 890px){
  .blocks_market {
    .market_block {
      .block_inside_new{
        .img{
          display: none;
        }
        .img1{
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 540px){
  .blocks_market {
    gap: 15px;
  }
}
</style>