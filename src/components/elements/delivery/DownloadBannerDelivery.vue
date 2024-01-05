<script setup lang="ts">
const items = [
  { id: 1, svg: '/icons/delivery/check.svg', title: 'Узнавайте первыми об акциях и спецпредложениях' },
  { id: 2, svg: '/icons/delivery/check.svg', title: 'Получите доступ к секретным распродажам и полезной информации' },
  { id: 3, svg: '/icons/delivery/check.svg', title: 'Держите наши контакты всегда под рукой' },
]
</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <div class="content">
          <div class="text">
            <h1 class="size_1">Отслеживайте свои заказы
              в фирменном приложении
              Kugoo-Russia
            </h1>
            <div class="items">
              <div v-for="item in items" :key="item.id" class="item">
                <img :src="item.svg" alt="">
                <span class="size_6">{{ item.title }}</span>
              </div>
            </div>
            <div class="btns">
              <a href="https://play.google.com/store/apps/details?id=com.vehicle.kugooa&hl=ru&gl=US" target="_blank">
                <img src="/icons/delivery/google.svg" alt="">
              </a>
              <a href="https://apps.apple.com/ru/app/kugoo-russia-ru/id1539136862" target="_blank">
                <img src="/icons/delivery/apple.svg" alt="">
              </a>
            </div>
          </div>
          <img class="iphone" src="/img/delivery/iphone.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: var(--orange-gradient);
  padding: 80px 0;
  margin-bottom: 100px;
  overflow: hidden;
  border-radius: 10px;

  .content {
    position: relative;

    .text {
      display: flex;
      flex-direction: column;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        max-width: 568px;
        margin-bottom: 27px;
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 34px;

        .item {
          display: flex;
          align-items: center;
          gap: 10px;

          & img {
            width: 22px;
            height: 22px;
          }

          & span {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--white-color);
          }
        }
      }

      .btns {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .iphone {
      position: absolute;
      right: 0;
      bottom: -88px;
      width: 348px;
      height: 456px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .banner {
    .content {
      .text {
        & h1 {
          max-width: 496px;
        }
      }

      .iphone {
        width: 318px;
        height: 410px;
      }
    }
  }
}

@media screen and (max-width: 992px){
  .banner{
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 890px) {
  .banner {
    padding: 60px 0;
    .content {
      .text {
        & h1 {
          max-width: 428px;
        }
        .item{
          max-width: 356px;
        }
      }

      .iphone {
       right: -80px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .banner {
    .content {

      .iphone {
        width: 280px;
        height: 362px;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .banner {
    padding: 50px 0;
    .content {
      .text{
        & h1{
          max-width: 412px;
        }
      }
      .iphone {
        right: -100px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .banner {
    margin-bottom: 60px;
    .content {
      .text{
        & h1{
          max-width: 356px;
        }
        .item{
          max-width: 295px;
        }
      }
      .iphone {
        right: -150px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .banner {
    .content {
      .text{
        & h1{
          max-width: 420px;
        }
        .item{
          max-width: 356px;
        }
      }
      .iphone {
        right: -80px;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .banner {
    .content {
      .text{
        & h1{
          max-width: 327px;
        }
        .item{
          max-width: 300px;
        }
      }
      .iphone {
        right: -120px;
      }
    }
  }
}
</style>