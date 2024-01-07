<script setup lang="ts">
import SwiperMain from '@/components/UI/swiper/SwiperMain.vue';
import { useRouter } from 'vue-router';
import { CATALOG_ROUTE } from '@/utils/consts';
import { useSwiperStore } from '@/stores/swiper';
const router = useRouter();
const store = useSwiperStore()

</script>

<template>
  <div class="container_lg">
    <div style="border-radius: 10px;" class="slider_block">
      <div class="container">
        <div class="content_slider">
          <div class="new_btn size_7">
            Новинка
          </div>
          <SwiperMain />
          <ButtonLargeWhite @click="router.push(CATALOG_ROUTE)" class="btn">Перейти в каталог</ButtonLargeWhite>
          <div class="navigation_slide">
            <img @click="store.prevSlide" style="cursor: pointer;" src="/icons/arrowslide1.svg" alt="">
            <div class="block-nums">
              <span class="size_6">{{ store.count }}</span>
              <div class="div_new">
                <div class="inside" :style="{ width: `${store.div}px` }"></div>
              </div>
              <span class="size_6">3</span>
            </div>
            <img @click="store.nextSlide" style="cursor: pointer;" src="/icons/slidearrow2.svg" alt="">
          </div>
        </div>
      </div>
      <img class="img_1" src="/img/1.png" alt="">
      <img class="img_2" src="/img/kirin.png" alt="">
      <div class="absolute_block">
        <img src="/icons/lightning.png" alt="">
        <span>Тест-драйв и обучение</span>
      </div>
      <div class="purple_block">
        <span>Бесплатно</span>
      </div>
      <img class=ellipse1 src="/icons/Ellipse.svg" alt="">
      <hr class="line">
      <img class="ellipse2" src="/icons/Ellipse.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider_block {
  position: relative;
  background: var(--purple-gradien-color);
  padding: 39px 0 31px 0;
  margin: 31px 0 39px 0;

  .content_slider {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 99;

    .new_btn {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--white-color);
      border-radius: 5px;
      border: 1px solid var(--white-color);
      padding: 4px 10px;
      width: 74px;
      margin-bottom: 36px;
    }

    .btn {
      align-self: flex-start;
      margin-bottom: 46px;
      position: relative;
      z-index: 999;
    }

    .navigation_slide {
      display: flex;
      align-items: center;
      gap: 15px;

      .block-nums {
        display: flex;
        align-items: center;
        gap: 11px;

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--white-color);
        }

        .div_new {
          border-radius: 5px;
          width: 33px;
          height: 2px;

          .inside {
            border-radius: 5px;
            background: var(--white-color);
            height: 2px;
          }
        }
      }
    }
  }

  .img_1 {
    position: absolute;
    right: 32px;
    width: 538px;
    height: 405px;
    z-index: 1;
    bottom: 0;
  }

  .img_2 {
    position: absolute;
    right: 42px;
    bottom: 0;
    z-index: 0;
  }

  .absolute_block {
    position: absolute;
    z-index: 3;
    bottom: 117px;
    right: 534px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    justify-content: center;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(2.5px);
    width: 207px;
    height: 46px;

    & span {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--white-color);
    }
  }

  .purple_block {
    position: absolute;
    z-index: 2;
    bottom: 98px;
    right: 551px;
    padding: 4px 10px;
    border-radius: 5px;
    background: var(--white-color);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    color: var(--purple-color);
    z-index: 4;
  }

  .ellipse1 {
    position: absolute;
    z-index: 5;
    bottom: 132px;
    right: 527px;
  }

  .ellipse2 {
    position: absolute;
    z-index: 5;
    bottom: 128px;
    right: 426px;
  }

  .line {
    position: absolute;
    z-index: 5;
    bottom: 137px;
    right: 444px;
    height: 1px;
    width: 81px;
    border: none;
    border-top: 1px dashed var(--white-color);
    transform: rotate(2.5deg);
  }
}

@media screen and (max-width: 1200px) {
  .slider_block {
    overflow: hidden;

    .content_slider {
      padding-left: 15px;

      .new_btn {
        width: 68px;
        font-size: 12px;
      }
    }

    .img_1 {
      width: 470px;
      height: 360px;
      right: -50px;
    }

    .img_2 {
      right: 30px;
    }

    .ellipse2 {
      right: 294px;
    }

    .line {
      right: 312px;
    }

    .ellipse1 {
      right: 395px;
    }

    .absolute_block {
      right: 402px;
    }

    .purple_block {
      right: 424px;
    }
  }
}

@media screen and (max-width: 992px) {
  .slider_block {
    .purple_block {
      display: none;
    }

    .absolute_block {
      display: none;
    }

    .ellipse1,
    .ellipse2,
    .line {
      display: none;
    }

    .img_1 {
      right: -100px;
    }
  }
}

@media screen and (max-width: 890px) {
  .img_2 {
    display: none;
  }

  .btn {
    display: none;
  }

  .slider_block {
    .img_1 {
      width: 390px;
      height: 280px;
    }

    .content_slider {
      .new_btn {
        margin-bottom: 25px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .slider_block {
    .content_slider {
      .navigation_slide {
        gap: 10px;
      }
    }

    .img_1 {
      width: 320px;
      height: 230px;
    }
  }
}

@media screen and (max-width: 650px) {
  .slider_block {
    .content_slider {
      .new_btn {
        margin-bottom: 15px;
        width: 60px;
        font-size: 10px;
      }
    }

    .img_1 {
      width: 280px;
      height: 210px;
      right: -80px;
    }
  }
}

@media screen and (max-width: 600px) {
  .slider_block {
    padding: 15px 0 15px 0;

    .content_slider {
      padding-left: 0;
      .new_btn{
        padding: 4px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: unset;
        align-self: flex-start;
      }
    }
    .img_1 {
      width: 260px;
      height: 192px;
      right: -82px;
    }
  }
}
@media screen and (max-width: 520px) {
  .slider_block {
    margin: 0 0 30px 0;
  }
}
</style>