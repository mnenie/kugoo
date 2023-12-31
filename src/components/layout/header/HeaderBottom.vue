<script setup lang="ts">
import { ref } from 'vue';
import type { IMenu } from '@/types/ui.interface'
defineProps<{
  menuItems: IMenu[]
}>()
const styleSpan = ref({})

</script>

<template>
  <div class="menu_display">
    <div class="container">
      <div class="menu_display-content">
        <router-link class="routes_pages" v-for="menuItem in menuItems" :to="{path: menuItem.routeTo}" :key="menuItem.id">
          <div class="more_cont" v-if="menuItem.id === 2">
            <span :style="styleSpan">{{ menuItem.about }}</span>
            <span id="more">{{ menuItem.more }}</span>
          </div>
          <div class="more_svg_cont" v-else-if="menuItem.id === 6">
            <span>{{ menuItem.about }}</span>
            <div id='svg_more'><img :src="menuItem.svg" alt=""></div>
          </div>
          <div v-else>
            <span>{{ menuItem.about }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu_display {
  background: var(--btn-gray-color);
  min-height: 40px;
  padding: 10px 0;

  &-content {
    display: flex;
    justify-content: space-between;
    width: 776px;

    .routes_pages {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
      transition: 0.15s ease;

      .more_cont {
        display: flex;
        gap: 8px;

        #more {
          display: flex;
          justify-content: center;
          height: 20px;
          padding: 2.4px 0px 2px 0px;
          width: 106px;
          border-radius: 300px;
          background: #6F73EE;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--white-color);
          cursor: pointer;
        }
      }

      &:hover {
        color: var(--purple-color);
      }

      .more_svg_cont {
        display: flex;
        gap: 8px;

        #svg_more {
          height: 20px;
          width: 20px;
          border-radius: 300px;
          background: #6F73EE;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 834px){
  .menu_display{
    &-content{
      width: unset;
    }
  }
}
@media screen and (max-width: 670px){
  .menu_display{
    &-content{
      flex-wrap: wrap;
    }
  }
  #more{
    display: none !important;
  }
}

@media screen and (max-width: 650px){
  .menu_display{
    &-content{
      .routes_pages{
        font-size: 12px;
      }
    }
  }
}
</style>