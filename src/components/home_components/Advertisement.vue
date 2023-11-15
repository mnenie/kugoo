<script setup lang="ts">
import { advertisement1, advertisement2 } from '@/mocks/homeAdvertisement';
import AdvertisementBlock from './AdvertisementBlock.vue';
import { computed, ref } from 'vue';
import {CATALOG_ROUTE, SERVICE_ROUTE} from '@/utils/consts';

const btns = ref<any[]>([
  {
    id: 1,
    title: 'Интернет-магазин', 
    active: true
  },
  {
    id: 2,
    title: 'Сервисный центр', 
    active: false
  },
])
const flag = ref<boolean>(true)
function btnUpdate(index: number) {
  btns.value.forEach((btn, i) => {
    btn.active = i === index;
  });
  if(index === 0) {
    flag.value = true
  } else {
    flag.value = false
  }
}
const route = computed(() => {
  if(flag.value) {
    return CATALOG_ROUTE
  } else {
    return SERVICE_ROUTE
  }
})
</script>

<template>
  <div class="advertisement">
    <div class="container">
      <div class="advertisement_block">
        <h1 class="size_1">Предлагаем самые выгодные цены на продукты Kugoo за счет прямых поставок</h1>
        <p class="size_4">и заботимся об удобстве покупателей</p>
        <div class="btns_section">
          <btn-choose v-for="(btn, index) in btns" :key="btn.id" @click="btnUpdate(index)" :class="[btn.active === true ? 'active' : '']">{{ btn.title }}</btn-choose>
        </div>
        <AdvertisementBlock :route="route" :blocks1="advertisement2" :flag="flag" :blocks="advertisement1" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advertisement {
  padding-bottom: 100px;

  .advertisement_block {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      text-align: center;
      margin-bottom: 18px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
      margin-bottom: 50px;
    }

    .btns_section {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 58px;
    }
  }
}

.active {
  border: 1.3px solid var(--purple-color);
  color: var(--purple-color);
  background: transparent;
}

@media screen and (max-width: 992px){
  .advertisement{
    padding-bottom: 80px;
    .advertisement_block{
      & p{
        margin-bottom: 40px;
      }
      .btns_section{
        margin-bottom: 50px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .advertisement{
    padding-bottom: 60px;
    .advertisement_block{
      & p{
        margin-bottom: 30px;
      }
      .btns_section{
        margin-bottom: 40px;
      }
    }
  }
}
</style>