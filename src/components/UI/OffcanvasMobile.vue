<script setup lang="ts">
import MarketHeader from '@/components/layout/header/MarketHeader.vue';
import type { IMenu } from '@/types/ui.interface';
import { ABOUT_ROUTE, BLOG_ROUTE, CONTACTS_ROUTE, COOPERATION_ROUTE, DELIVERY_ROUTE, SERVICE_ROUTE, STOCKS_ROUTE, TEST_ROUTE } from '@/utils/consts';
import { ref } from 'vue';
import { useBurger } from '@/stores/burger';
import ModalPhone from './ModalPhone.vue';
import { useModal, ModalsContainer } from 'vue-final-modal';

const menuItems = ref<IMenu[]>([
  {
    id: 1,
    routeTo: ABOUT_ROUTE,
    about: 'О магазине'
  },
  {
    id: 2,
    routeTo: DELIVERY_ROUTE,
    about: 'Доставка и оплата',
    more: 'Доступна рассрочка'
  },
  {
    id: 3,
    routeTo: TEST_ROUTE,
    about: 'Тест-драйв'
  },
  {
    id: 4,
    routeTo: BLOG_ROUTE,
    about: 'Блог'
  },
  {
    id: 5,
    routeTo: CONTACTS_ROUTE,
    about: 'Контакты'
  },
  {
    id: 6,
    routeTo: STOCKS_ROUTE,
    about: 'Акции',
    svg: '/icons/%.svg'
  },
])
const items = ref([
  {
    itemTo: 'Сервис',
    pathTo: SERVICE_ROUTE
  },
  {
    itemTo: 'Сотрудничество',
    pathTo: COOPERATION_ROUTE
  },
])
const svg = ref([
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/viber.svg'
  },
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/whatsapp.svg'
  },
  {
    pathSvg: 'https://vk.com/mnenie_mozhno',
    svgItem: '/icons/telegram.svg'
  },
])

const { open, close } = useModal({
  component: ModalPhone,
  attrs:{
    onClose(){
      close()
    },
    onConfirm(){
      close();
    }
  }
})

const burger = useBurger()
const openModal = () => {
  burger.closeModal()
  open()
}
</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="burger" aria-labelledby="burger">
    <div class="offcanvas-header">
      <MarketHeader />
    </div>
    <div style="padding: 17px 15px 0 15px;" class="offcanvas-body">
      <div class="logo">
        <img src="/icons/Kugoo.svg" alt="">
        <div class="navi">
          <a style="text-decoration: none; height: 16px;" href="tel: +78005055461"><img src="/icons/call.svg" alt=""></a>
          <img data-bs-dismiss="offcanvas" src="/icons/close.svg" alt="">
        </div>
      </div>
      <div class="routes">
        <div class="routes_pages" data-bs-dismiss="offcanvas" v-for="menuItem in menuItems" :key="menuItem.id">
          <router-link class="routes_pages" :to="{ path: menuItem.routeTo }">
            <div class="more_cont" v-if="menuItem.id === 2">
              <span>{{ menuItem.about }}</span>
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
      <div class="bottom_menu">
        <div v-for="item in items" data-bs-dismiss="offcanvas" :key="item.pathTo" class="router_item">
          <router-link class="router_item size_8" :to="{ path: item.pathTo }">
            {{ item.itemTo }}
          </router-link>
        </div>
        <div data-bs-dismiss="offcanvas">
          <a @click="openModal" style="cursor: pointer;"
            class="router_item size_8">Заказать звонок</a>
        </div>
      </div>
      <div class="svg_items">
        <span>Online чат:</span>
        <div class="svg_header">
          <div v-for="itemSvg in svg" :key="itemSvg.svgItem">
            <a class="img_to" target="_blank" :href="itemSvg.pathSvg" :key="itemSvg.svgItem">
              <img :src="itemSvg.svgItem" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <ModalsContainer />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 33px;

  .navi {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}

.routes {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 27px;

  &_pages {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
    transition: 0.15s ease;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-200-color);

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    .more_cont {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;

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
      flex-direction: column;
      gap: 5px;
      align-items: center;

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

.bottom_menu {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  .router_item {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    transition: 0.15s ease;

    &:hover {
      color: var(--purple-color);
    }
  }
}

.svg_items {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  justify-content: center;

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }

  .svg_header {
    display: flex;
    width: 81px;
    justify-content: space-between;
    align-items: center;

    .img_to {
      height: 18px !important;
      display: block;
      text-decoration: none;
      width: 18px;
    }

    & img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>