<script setup lang="ts">
import type { INews } from '@/types/index';
import { ref } from 'vue';

const props = defineProps<{
  blog: INews | null
}>()
const icons = ref([
  { id: 1, svg: '/icons/blog/vk.svg' },
  { id: 2, svg: '/icons/blog/inst.svg' },
  { id: 3, svg: '/icons/blog/youtube.svg' },
  { id: 4, svg: '/icons/blog/tg.svg' },
])
</script>

<template>
  <div class="container_lg">
    <div :style="{ backgroundImage: `url(${blog?.img})` }" class="banner">
      <div class="container">
        <div class="text_cont">
          <div class="imgs">
            <div v-for="item in icons" :key="item.id" class="item">
              <img :src="item.svg" alt="">
            </div>
          </div>
          <div class="main_content">
            <div class="inf_block">
              <div class="calendar">
                <img src="/icons/blog/calendar1.svg" alt="">
                <span class="size_8">{{ blog?.date }}</span>
              </div>
              <div class="views">
                <img src="/icons/blog/eye.svg" alt="">
                <span class="size_8">{{ blog?.views }}</span>
              </div>
            </div>
            <h1 class="size_1">{{ blog?.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  min-height: 400px;
  padding: 26px 0;
  overflow: hidden;
  margin-bottom: 80px;
  border-radius: 10px;
  background-size: cover;
  position: relative;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: top -300px right 0;

  &::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.004);
    backdrop-filter: blur(8px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .text_cont {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 99;
    height: 100% !important;

    .imgs {
      display: flex;
      align-items: center;
      gap: 10px;

      .item {
        width: 37px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.10);
        backdrop-filter: blur(10px);
      }
    }

    .main_content {
      display: flex;
      flex-direction: column;
      gap: 18px;

      .inf_block {
        display: flex;
        align-items: center;
        gap: 15px;
        color: var(--white-color);

        .calendar {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .views {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: 50px;
        max-width: 600px;
        text-transform: uppercase;
        color: var(--white-color);
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .banner {
    background-position: top -100px right 0;
  }
}

@media screen and (max-width: 890px) {
  .banner {
    background-position: top 0px right 0;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    background-position: top 0px right 0;

    .text_cont {
      .main_content {
        & h1 {
          max-width: 500px;
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .banner {
    background-position: top 0px right -50px;
  }
}

@media screen and (max-width: 650px) {
  .banner {

    .text_cont {
      .main_content {
        & h1 {
          max-width: 420px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner {
    background-position: top 0px right -100px;
  }
}

@media screen and (max-width: 540px) {
  .banner {
    background-position: top 0px right 0;

    .text_cont {
      .main_content {
        & h1 {
          max-width: 340px;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .banner {
    background-position: top 0px right -60px;
  }
}
</style>