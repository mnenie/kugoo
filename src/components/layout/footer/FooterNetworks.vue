<script setup lang="ts">
import { ref } from 'vue';
import type { IFooterNetwork } from '@/types/index';
defineProps<{
  network: IFooterNetwork[]
}>()
const svgItems = ref([
  {
    id: 1,
    svg: '/icons/googleplay.svg',
    link: 'https://play.google.com/store/apps/details?id=com.vehicle.kugooa&hl=ru&gl=US'
  },
  {
    id: 2,
    svg: '/icons/appstore.svg',
    link: 'https://apps.apple.com/ru/app/kugoo-russia-ru/id1539136862'
  }
])
</script>

<template>
  <div class="network_display">
    <div class="network_1">
      <h1 class="size_2">Kugoo</h1>
    </div>
    <div class="section_2">
      <div class="network_display_market">
        <a v-for="svgItem in svgItems" :key="svgItem.id" :href="svgItem.link" target="_blank"><img  :src="svgItem.svg" alt=""></a>
      </div>
      <div class="networks_blocks">
        <div v-for="item in network" class="network-item" :key="item.id">
          <img :src="item.svg" alt="">
          <div class="network-item-about">
            <span>{{ item.title }}</span>
            <span>{{ item.num }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.network_display {
  margin-top: 49px;
  padding: 36px 0;
  border-top: 1px solid rgba(93, 108, 123, 0.15);
  border-bottom: 1px solid rgba(93, 108, 123, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .section_2 {
    display: flex;
    align-items: center;
    gap: 117px;

    .network_display_market {
      display: flex;
      align-items: center;
      gap: 10px;
      & a{
        height: 45px;
      }
    }
  }

  .network_1 {
    display: flex;
    align-items: center;

    & h1 {
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      margin-right: 60px;
    }
  }

  .networks_blocks {
    display: flex;
    align-items: center;
    gap: 10px;

    .network-item {
      border-radius: 5px;
      background: var(--white-color);
      width: 123px;
      height: 45px;
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 5px 16px 7px 12px;

      & img {
        width: 20px;
        height: 20px;
      }

      &-about {
        display: flex;
        flex-direction: column;

        & span {
          &:first-child {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
          }

          &:last-child {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .network_display {
    .section_2 {
      gap: 30px;
    }
  }
}

@media screen and (max-width: 1064px) {
  .network_display {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .network_1 {
      & h1 {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .network_display {
    align-items: flex-start;

    .section_2 {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .network_display {
    align-items: flex-start;

    .section_2 {
      align-items: flex-start;
    }
  }
}

@media screen and (max-width: 600px) {
  .network_display {
    align-items: flex-start;

    .networks_blocks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}</style>