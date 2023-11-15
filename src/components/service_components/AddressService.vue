<script setup lang="ts">
import { ref } from 'vue';
import type { IAddress } from '@/types/address.interface';
import { CONTACTS_ROUTE } from '@/utils/consts'
const items = ref<IAddress[]>([
  {
    id: 1,
    svg: '/icons/service/pin.svg',
    title: 'Москва',
    name: 'Ткацкая улица, 5с16',
    date: 'Пн - Вс 10:00 - 19:00',
    link: 'Смотреть на карте',
    svg1: '/icons/service/call.svg',
    tel: '+7 (499) 350-76-92',
    svg2: '/icons/service/warning.svg',
    attention: 'При себе иметь паспорт для прохождения через пропускной пункт'
  },
  {
    id: 2,
    svg: '/icons/service/pin.svg',
    title: 'Санкт-Петербург',
    name: 'Фрунзе улица, 2',
    date: 'Пн - Вс  10:00 - 20:00',
    link: 'Смотреть на карте',
    svg1: '/icons/service/call.svg',
    tel: '+7 (499) 350-76-92'
  },
  {
    id: 3,
    svg: '/icons/service/pin.svg',
    title: 'Краснодар',
    name: 'Восточно-Кругликовская улица, 86',
    date: 'Вт - Сб 10:00 - 20:00',
    link: 'Смотреть на карте',
    svg1: '/icons/service/call.svg',
    tel: '+7 (499) 350-76-92'
  },
])
</script>

<template>
  <div class="address">
    <h1 class="size_1">Адреса сервисных центров</h1>
    <div class="container_lg">
      <div class="blocks">
        <div class="container">
          <div class="items">
            <div v-for="item in items" :key="item.id" class="item">
              <h2 class="size_4">{{ item.title }}</h2>
              <div class="pin">
                <img :src="item.svg" alt="">
                <div class="text">
                  <p class="size_7">{{ item.name }}</p>
                  <span class="size_7">{{ item.date }}</span>
                  <router-link :to="CONTACTS_ROUTE" class="size_8 route">{{ item.link }}</router-link>
                </div>
              </div>
              <div class="center_content">
                <img :src="item.svg1" alt="">
                <p class="size_6">{{ item.tel }}</p>
              </div>
              <div v-if="item.attention" class="center_content">
                <img :src="item.svg2" alt="">
                <span class="size_7">{{ item.attention }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .blocks {
    border-radius: 10px;
    background: var(--btn-gray-color);
    padding: 44px 0 46px 0;

    .items {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .item {
        max-width: 276px;
        width: 100%;

        & h2 {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--black-color);
          margin-bottom: 22px;
        }

        .pin {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 16px;

          .text {
            display: flex;
            flex-direction: column;

            & p {
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              color: var(--black-color);
              margin-bottom: 2px;
            }

            & span {
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              color: var(--gray-600-color);
              margin-bottom: 6px;
            }

            .route {
              text-decoration: none;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              color: var(--purple-color);
            }
          }
        }

        .center_content {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 18px;
          &:last-child{
            margin-bottom: 0;
          }

          & p {
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
          }

          & span {
            font-style: normal;
            font-weight: 400;
            line-height: 122.5%;
            color: var(--black-color);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .address {
    margin-bottom: 73px;
  }
}
@media screen and (max-width: 650px) {
  .address {
    .blocks{
      .items{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        .item{
          max-width: 100%;
          display: flex;
          flex-direction: column;
          // align-items: center;
        }
      }
    }
  }
}
</style>