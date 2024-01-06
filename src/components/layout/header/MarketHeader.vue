<script setup lang="ts">
import { ref } from 'vue';
interface IStar {
  id: number;
  img: string;
}

const stars = ref<IStar[]>([
  {
    id: 1,
    img: '/icons/star.svg',
  },
  {
    id: 2,
    img: '/icons/star.svg',
  },
  {
    id: 3,
    img: '/icons/star.svg',
  },
  {
    id: 4,
    img: '/icons/star.svg',
  },
  {
    id: 5,
    img: '/icons/star.svg',
  }
])
</script>

<template>
  <div class="market">
    <div class="container">
      <div class="market_block">
        <div class="market_logo">
          <img style="width: 25px; height: 25px; border-radius: 5.682px;" src="/img/marketheader.png" alt="">
          <div class="reviews">
            <span>Открыть в приложении</span>
            <div class="stars">
              <div class="stars_img"><img v-for="star in stars" :src="star.img" alt="" :key="star.id"></div>
              <span>2К</span>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vehicle.kugooa&hl=ru&gl=US">Открыть</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.market {
  // height: 40px;
  border-bottom: 1px solid var(--gray-200-color);
  // padding: 3px 0;
  width: 100%;

  .market_block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .market_logo {
      display: flex;
      align-items: center;
      gap: 9px;

      .reviews {
        display: flex;
        flex-direction: column;
        gap: 1px;

        & span {
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 5px;

          &_img {
            display: flex;
            gap: 3px;
          }

          & span {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }

    & a {
      padding: 4px 15px;
      height: 27px;
      border-radius: 5px;
      background: var(--purple-color);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--white-color);
      border: none;
      text-decoration: none;
    }
  }
}
</style>