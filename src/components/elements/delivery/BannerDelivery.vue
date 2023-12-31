<script setup lang="ts">

</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <div class="content">
          <h1 class="size_1">Оплата и доставка любыми удобными способами</h1>
          <!-- <img src="/img/delivery/2.png" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 100px;
  border-radius: 10px;
  padding: 50px 0;
  width: 100%;
  background: radial-gradient(544.32% 83.35% at 75.14% 62.23%, #979aec 0%, #6F73EE 100%);
  overflow: hidden;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: url('/img/delivery/2.png') no-repeat right bottom;
    background-size: contain;
  }

  .content {
    position: relative;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
      max-width: 569px;
    }

    & img {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

@media screen and (max-width: 1200px){
  .banner{
    &::after{
      right: -140px;
    }
  }
}
@media screen and (max-width: 900px){
  .banner{
    &::after{
      right: -200px;
    }
  }
}
@media screen and (max-width: 840px){
  .banner{
    padding: 30px 0;
    &::after{
      right: -200px;
    }
    .content{
      & h1{
        max-width: 450px;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .banner{
    padding: 50px 0;
    &::after{
      right: -270px;
    }
    .content{
      & h1{
        max-width: 450px;
      }
    }
  }
}
@media screen and (max-width: 650px){
  .banner{
    padding: 30px 0;
    &::after{
      right: -230px;
    }
    .content{
      & h1{
        max-width: 320px;
      }
    }
  }
}
@media screen and (max-width: 540px){
  .banner{
    padding: 50px 0;
    &::after{
      right: -180px;
    }
    .content{
      & h1{
        max-width: 320px;
      }
    }
  }
}
@media screen and (max-width: 436px){
  .banner{
    padding: 30px 0;
    &::after{
      right: -160px;
    }
    .content{
      & h1{
        max-width: 320px;
      }
    }
  }
}
</style>