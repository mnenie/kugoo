<script setup lang="ts">
import FormComparison from './FormComparison.vue';
</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="block">
            <h1 class="size_1">Сравнили, но остались вопросы?</h1>
            <p class="size_6">Оставьте номер, менеджер перезвонит вам в течение 5 минут</p>
            <FormComparison />
          </div>
        </div>
        <img class="img" src="/img/testdrive/wooman3.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 100px;

  .content {
    border-radius: 10px;
    background: var(--btn-gray-color);
    padding: 88px 0 78px 0;
    position: relative;
    overflow-y: visible;


    .block {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 99;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        max-width: 613px;
        margin-bottom: 40px;
      }

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
        margin-bottom: 20px;
      }
    }
  }

  .img {
    position: absolute;
    position: absolute;
    right: 70px;
    bottom: 0px;
    z-index: 1;
    width: 440px;
    height: 530px;
  }
}

@media screen and (max-width: 1200px) {
  .banner {
    .content {
      overflow: hidden;
    }

    .img {
      width: 370px;
      height: 450px;
      right: 10px;
    }
  }
}
@media screen and (max-width: 992px) {
  .banner{
    margin-bottom: 80px;
    .content{
      padding: 60px 0;
      .block{
        & h1{
          max-width: 590px;
        }
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .banner {
    .img {
      width: 320px;
      height: 390px;
      right: 0px;
    }
  }
}
@media screen and (max-width: 768px) {
  .banner{
    .content{
      padding: 50px 0;
      .block{
        & h1{
          max-width: 490px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .banner{
    .content{
      .block{
        & h1{
          max-width: 387px;
        }
      }
    }
    .img{
      width: 300px;
      height: 364px;
      right: -60px;
    }
  }
}
@media screen and (max-width: 600px){
  .banner{
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 580px) {
  .banner{
    .img{

      right: -70px;
    }
  }
}
@media screen and (max-width: 540px) {
  .banner{
    .content{
      .block{
        & h1{
          max-width: 490px;
        }
      }
    }
    .img{
      right: 10px;
    }
  }
}
@media screen and (max-width: 428px) {
  .banner{
    .content{
      .block{
        & h1{
          max-width: 370px;
        }
      }
    }
    .img{
      right: -70px;
    }
  }
}
@media screen and (max-width: 600px) {
  .banner {
    margin-bottom: 80px;
  }
}
</style>