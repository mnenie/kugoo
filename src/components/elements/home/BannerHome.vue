<script setup lang="ts">
import { useRouter } from 'vue-router';
import { DELIVERY_ROUTE } from '@/utils/consts'
const router = useRouter()

const props = defineProps<{
  style?: string
}>()
</script>

<template>
  <div class="container_lg">
    <div :style="style" class="banner">
      <div class="container">
        <div class="banner_block">
          <div class="news catalog_2">
            Акция
          </div>
          <h1 class="size_1">Бесплатная доставка электросамокатов по России до 01.12</h1>
          <ButtonLargeBanner @click="router.push(DELIVERY_ROUTE)"
            style="align-self: flex-start; position: relative; z-index: 99;">Подробнее</ButtonLargeBanner>
        </div>
      </div>
      <img src="/img/dron.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  margin-bottom: 87px;
  border-radius: 10px;
  background: radial-gradient(708.28% 82.86% at 23.3% 72.57%, #595959 0%, #3B3E46 100%);
  min-height: 421px;

  & img {
    position: absolute;
    top: -45px;
    left: -85px;
    width: 914.36px;
    height: 654.021px;
    transform: rotate(-6.377deg);
  }

  .banner_block {
    display: flex;
    flex-direction: column;
    padding: 67px 37px 67px 632px;
    position: relative;
    z-index: 99;

    .news {
      border-radius: 5px;
      border: 1px solid var(--pink-color);
      background: var(--pink-color);
      padding: 4px 11px;
      align-self: flex-start;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--white-color);
      margin-bottom: 27px;
    }

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
      max-width: 441px;
      margin-bottom: 27px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .banner {
    & img {
      bottom: -120px;
      top: unset;
      width: 814px;
      height: 554px;
      left: unset;
      right: -100px;
    }

    .banner_block {
      padding: 45px 0 0 45px;
    }
  }
}

@media screen and (max-width: 992px) {
  .banner {
    min-height: unset;

    & img {
      bottom: -100px;
      top: unset;
      width: 614px;
      height: 454px;
      left: unset;
      right: -100px;
    }

    .banner_block {
      padding: 45px 45px 45px 45px;
    }
  }
}

@media screen and (max-width: 890px) {
  .banner {
    & img {
      bottom: -42px;
      top: unset;
      width: 514px;
      height: 354px;
      left: unset;
      right: -100px;
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    .banner_block {
      padding: 30px 30px 30px 10px;

      & h1 {
        max-width: 302px;
      }
    }

    & img {
      bottom: -56px;
      right: -200px;
    }
  }
}

@media screen and (max-width: 600px) {
  .banner {
    margin-bottom: 60px;
    & img {
      bottom: -23px;
      right: -78px;
      width: 360px;
      height: 260px;
    }
    .banner_block{
      & h1{
        margin-bottom: 20px;
      }
      .news{
        margin-bottom: 20px;
      }
    }
  }
}
</style>