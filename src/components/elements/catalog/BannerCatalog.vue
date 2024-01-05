<script setup lang="ts">

</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <h1 class="size_1">Каталог товаров</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 100px;

  .content {
    padding: 75px 0;
    border-radius: 10px;
    background: linear-gradient(88deg, #6F73EE 24.95%, rgba(111, 115, 238, 0.00) 59.45%);
    overflow: hidden;
    position: relative;
    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/img/catalog/banner.png') no-repeat right top;
      z-index: -1;
    }

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
    }
  }
}
@media screen and (max-width: 1200px) {
  .banner{
    .content{
      &::after{
        right: -100px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .banner{
    margin-bottom: 80px;
    .content{
      &::after{
        right: -200px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .banner{
    .content{
      &::after{
        right: -240px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .banner{
    margin-bottom: 60px;
    .content{
      padding: 70px 0;
    }
  }
}
</style>