<script setup lang="ts">
import { ProductBottomBlocks } from '@/mocks/product.bottom'
</script>

<template>
  <div v-for="block in ProductBottomBlocks" :key="block.id" class="block">
    <div class="text">
      <h2 class="size_3">{{ block.title }}</h2>
      <p v-if="block.body" class="size_6">{{ block.body }}</p>
    </div>
    <img class="img" :src="block.img" alt="">
  </div>
</template>

<style lang="scss" scoped>
.block {
  border-radius: 10px;
  background: var(--btn-gray-color);
  max-width: 540px;
  width: 100%;
  padding: 30px 40px;
  position: relative;
  overflow: hidden;

  ::after {
    position: absolute;
    content: '';
    width: 446px;
    height: 446px;
    border-radius: 446px;
    background: var(--purple-color);
    right: -300px;
    top: -80px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & h2 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      max-width: 229px;
      width: 100%;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
      max-width: 280px;
      width: 100%;
    }
  }

  .img {
    position: absolute;
  }

  &:first-child {
    .img {
      right: 0;
      top: 0;
    }
  }

  &:nth-child(2) {
    .img {
      right: 0;
      top: 20px;
      width: 170.999px;
      height: 168.042px;
    }
  }

  &:nth-child(3) {
    .img {
      right: 40px;
      top: 20px;
      width: 136.999px;
      height: 134.63px;
    }
  }

  &:last-child {
    .img {
      right: 40px;
      top: 20px;
      width: 136.999px;
      height: 134.63px;
    }
  }
}

@media screen and (max-width: 1040px) {
  .block {
    max-width: 100%;

    .text {
      & h2 {
        max-width: 260px;
      }
    }

    &:nth-child(2) {
      .img {
        right: 20px;
        top: 10px;
        width: 136.999px;
        height: 134.63px;
      }
    }

    &:nth-child(3) {
      .img {
        right: 20px;
        top: 10px;
      }
    }

    &:last-child {
      .img {
        right: 20px;
        top: 10px;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .block {
    &:first-child {
      .img {
        width: 240px;
        height: 180px;
      }
    }
  }
}
</style>