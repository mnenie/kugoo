<script setup lang="ts">
import CardBanner from './CardBanner.vue';
</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <div class="content">
          <h1 class="size_1">Блог Kugoo</h1>
          <div style="position: relative; height: 100%; display: flex; align-items: center;" class="imgs">
            <CardBanner class="card_banner" />
            <img class="img_1" src="/img/blog/banner1.jpeg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background: radial-gradient(544.32% 83.35% at 75.14% 62.23%, #A6A9FF 0%, #6F73EE 100%), #F4F7FB;
  padding: 20px 0;
  overflow: hidden;
  margin-bottom: 100px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
    }

    .card_banner {
      position: absolute;
      left: -300px;
      z-index: 97;
      top: 10px;
    }

    .img_1 {
      position: relative;
      width: 275.836px;
      height: 160px;
      border-radius: 6px;
      right: 116px;
    }
  }
}

@media screen and (max-width: 1200px){
  .banner{
    .content{
      .img_1{
        right: 0;
      }
      .card_banner{
        left: -170px;
      }
    }
  }
}
@media screen and (max-width: 992px){
  .banner{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 768px){
  .banner{
    padding: 0;
    .content{
      .img_1{
        right: -110px;
      }
      .card_banner{
        left: -60px;
        top: 8px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .banner{
    margin-bottom: 60px;
  }
}
</style>