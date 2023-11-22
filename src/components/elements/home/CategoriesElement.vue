<script setup lang="ts">
import type { ICategories } from '@/types/categories.interface';
import { ref } from 'vue';
defineProps<{
  categories: ICategories[]
}>()
const about = ref<boolean[]>([])
function onOver(index: number) {
  about.value[index] = true
}
function onOut(index: number) {
  about.value[index] = false
}
</script>

<template>
  <div @mouseover="onOver(index)" @mouseleave="onOut(index)" v-for="(category, index) in categories" :key="category.id"
    class="block_categories">
    <img :src="category.img" alt="">
    <div class="body_block show-more" :class="[about[index] ? 'active' : '']">
      <span class="catalog_1">{{ category.title }}</span>
      <span>{{ category.body }}</span>
      <span v-if="about[index] === true" style="margin-top: 10px;">{{ category.more }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block_categories {
  overflow: hidden;
  position: relative;
  width: 255px;
  height: 255px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 420px;
    height: 260px;
  }


  .body_block {
    transition: 0.15s ease;
    width: 100%;
    padding: 10px 0 10px 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(5px);

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--white-color);

      &:first-child {}

      &:nth-child(2) {
        font-size: 14px;
      }

      &:last-child {
        font-size: 14px;
      }
    }
  }
}

.show-more {
  opacity: 1;
  transform: translateY(0);
  transition: transform 1s ease-in;
}

.active {
  opacity: 1;
  transform: translateY(-5px);
}

@media screen and (max-width: 1200px) {
  .block_categories {
    max-width: 350px;
    width: 100%;

    & img {
      width: 380px !important;
    }
  }
}

@media screen and (max-width: 992px) {
  .block_categories {

    & img {
      width: 400px !important;
    }
  }
}

@media screen and (max-width: 820px) {
  .block_categories {
    max-width: 100%;
    width: 100%;

    & img {
      width: 130% !important;
      height: 312px;
    }
  }
}

@media screen and (max-width: 768px) {
  .block_categories {

    & img {
      height: 260px;
    }
  }
}

@media screen and (max-width: 650px) {
  .block_categories {

    & img {
      width: 400px !important;
    }
  }
}

// @media screen and (max-width: 540px) {
//   .block_categories {

//     & img {
//       &:first-child {
//         width: 295px !important;
//       }
//     }
//   }
// }
</style>