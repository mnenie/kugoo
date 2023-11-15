<script setup lang="ts">
import { ref } from 'vue';

interface IBanner {
  id: number
  img: string
  title: string
}
const items = ref<IBanner[]>([
  {
    id: 1,
    img: '/icons/bannerService/pin.svg',
    title: 'Сервисные центры в Москве, Санкт-Петербурге и Краснодаре'
  },
  {
    id: 2,
    img: '/icons/bannerService/shield.svg',
    title: 'Гарантия 14 дней на ремонт'
  },
  {
    id: 3,
    img: '/icons/bannerService/gear.svg',
    title: 'Всегда в наличии оригинальные запчасти от производителя'
  },
])
</script>

<template>
  <div class="container_lg">
    <div class="banner_service">
      <div class="container">
        <div class="block_banner">
          <h1 class="h1_banner size_1">Ремонт и обслуживание товаров Kugoo Kirin</h1>
          <p class="p_banner size_4">в фирменных сервисых центрах</p>
          <div class="blocks_in_banner">
            <div v-for="item in items" :key="item.id" class="block_element">
              <div class="img_block">
                <img :src="item.img" alt="">
              </div>
              <span class="size_7">{{ item.title }}</span>
            </div>
          </div>
          <btn-yellow-large class="btn_yellow" style="align-self: flex-start;">Записаться</btn-yellow-large>
        </div>
      </div>
      <img class="img" src="/img/service/banner.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner_service {
  background: radial-gradient(245.31% 105.59% at 75.04% 76.25%, #FFC960 0%, #F3A712 100%);
  padding: 60px 0;
  // min-height: 421px;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;
  margin-top: 30px;
  z-index: 1;
  border-radius: 10px;

  .block_banner {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    .h1_banner,
    .p_banner {
      max-width: 504px;
    }

    .h1_banner {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
      margin-bottom: 4px;
    }

    .p_banner {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--white-color);
      margin-bottom: 30px;
    }

    .blocks_in_banner {
      display: flex;
      align-items: center;
      gap: 35px;
      margin-bottom: 42px;

      .block_element {
        display: flex;
        align-items: center;
        gap: 15px;

        &:first-child {
          & span {
            width: 212px;
          }
        }

        &:nth-child(2) {
          & span {
            width: 112px;
          }
        }

        &:last-child {
          & span {
            width: 210px;
          }
        }

        & span {
          font-style: normal;
          font-weight: 500;
          line-height: 18px;
          color: var(--white-color);
        }

        .img_block {
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.20);
          width: 40px;
          height: 40px;
          padding: 12px;
        }
      }
    }
  }
}

.img {
  position: absolute;
  width: 840px;
  height: 559px;
  bottom: -53px;
  right: -150px;
  z-index: 0;
}

@media screen and (max-width: 1248px) {
  .banner_service {
    padding: 30px 0;

    .block_banner {
      .blocks_in_banner {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        max-width: 550px;
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .banner_service{
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 992px) {
  .banner_service {
    .img {
      width: 794px;
      height: 526px;
      right: -170px;
    }
  }
}
@media screen and (max-width: 890px) {
  .banner_service{
    .block_banner{
      .blocks_in_banner{
        gap: 20px;
        margin-bottom: 30px;
        max-width: 500px;
      }
    }
    .img{
      width: 694px;
      height: 454px;
    }
  }
}
@media screen and (max-width: 768px) {
  .banner_service{
    .btn_yellow{
      display: none;
    }
    .block_banner{
      .h1_banner {
        max-width: 440px;
      }
      .blocks_in_banner{
        gap: 15px;
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .banner_service{
    .block_banner{
      .h1_banner{
        max-width: 386px;
      }
    }
    .img{
      width: 600px;
      height: 404px;
    }
  }
}
@media screen and (max-width: 600px) {
  .banner_service{
    margin-bottom: 60px;
    .block_banner{
      .h1_banner{
        max-width: 384px;
      }
    }
    .img{
      width: 542px;
      height: 370px;
    }
  }
}
@media screen and (max-width:520px) {
  .banner_service{
    margin-top: 0;
  }
}
</style>