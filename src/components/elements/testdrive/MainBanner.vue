<script setup lang="ts">
import BannerBlocks from './BannerBlocks.vue'
</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="text">
            <div class="address">
              <img src="/icons/testdrive/pin.svg" alt="">
              <p class="size_8">Восточно-Кругликовская улица, 86</p>
              <span class="size_8">Вт - Сб 10:00 - 20:00</span>
            </div>
            <h1 class="szie_1">Запишитесь на бесплатный тест-драйв электросамокатов</h1>
            <p class="size_4 main_p">в Москве без ограничения по времени</p>
            <BannerBlocks />
            <btn-large-white>Записаться</btn-large-white>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 72px;

  .content {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    min-height: 445px;
    background-image: linear-gradient(73deg, #6F73EE 17.37%, rgba(111, 115, 238, 0.00) 67.02%);
    padding: 57px 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/img/testdrive/wooman.png') no-repeat right top;
      z-index: -1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/img/testdrive/before.png') no-repeat left top;
      z-index: -1;
    }

    .text {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .address {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 20px;

        & img {
          width: 15px;
          height: 15px;
        }

        & p {
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--white-color);
          margin-right: 2px;
        }

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--white-color);
          opacity: 0.7;
        }
      }

      & h1 {
        max-width: 500px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        margin-bottom: 7px;
      }

      .main_p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--white-color);
        margin-bottom: 28px;
      }
    }
  }
}


@media screen and (max-width: 1100px) {
  .banner {
    .content {
      &::after {
        right: -100px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .banner {
    .content {
      &::after {
        right: -200px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .banner {
    .content {
      padding: 40px 0;
      min-height: unset;

      &::after {
        right: -200px;
      }
      .text{
        & h1{
          max-width: 400px;
        }
      }
    }
  }
}
@media screen and (max-width: 600px){
  .banner{
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 580px) {
  .banner {
    .content {
      &::after {
        right: -220px;
      }
    }
  }
}
</style>