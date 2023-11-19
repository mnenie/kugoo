<script setup lang="ts">
import { CATALOG_ROUTE } from '@/utils/consts'
// import { catalogMenu1 } from '../mocks/catalogMenu';
interface IBlock {
  id: number
  title: string
  body: string
  img: string
}
defineProps<{
  blocks: IBlock[]
}>()
</script>

<template>
  <div v-for="block in blocks" :key="block.id" class="block">
    <div class="text">
      <h1 class="size_3">{{ block.title }}</h1>
      <p class="size_7">{{ block.body }}</p>
      <router-link class="router size_7" :to="CATALOG_ROUTE">
        Подобрать модель
        <img src="/icons/arrowpurple.svg" alt="">
      </router-link>
    </div>
    <img class="img" :src="block.img">
  </div>
</template>

<style lang="scss" scoped>
.block {
  padding: 32px 242px 33px 40px;
  position: relative;
  border-radius: 10px;
  background: var(--btn-gray-color);
  max-width: 540px;
  width: 100%;
  height: 235px;
  overflow: hidden;
  color: var(--black-color);

  &::after {
    content: '';
    position: absolute;
    right: -290px;
    top: -106px;
    width: 446px;
    height: 446px;
    border-radius: 446px;
    background: var(--Purple, #6F73EE);
    z-index: 0;
  }

  .text {
    position: relative;
    z-index: 2;
  }

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 22px;
  }

  .router {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--purple-color);
    transition: gap 0.15s ease-in;

    &:hover {
      gap: 12px;
    }
  }

  .img {
    position: absolute;
    z-index: 1;
  }

  &:first-child {
    .img {
      top: 0;
      right: -80px;
      width: 310px;
      height: 235px;
    }
  }

  &:last-child {
    .img {
      top: 0;
      right: 39px;
    }
  }
}


@media screen and (max-width: 1110px) {
  .block {
    padding: 32px 200px 33px 40px;
  }
}

@media screen and (max-width: 992px) {
  .block {
    padding: 32px 40px 33px 40px;
    &::after{
      right: -350px;
      top: unset;
      bottom: -300px;
    }

    &:first-child {
      .img {
        display: none;
      }

    }
    &:last-child {
      .img {
        display: none;
      }

    }
  }
}

@media screen and (max-width: 600px){
  .block {
    padding: 30px;
  }
}
</style>