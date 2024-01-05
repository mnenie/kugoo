<script setup lang="ts">
import FormTestDrive from './FormTestDrive.vue';
</script>

<template>
  <div class="block_request">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="block">
            <h1 class="size_1">Нет нужной модели, которую хотите протестировать?</h1>
            <p class="size_6">Оставьте заявку, и менеджер подберет нужный самокат</p>
            <FormTestDrive />
          </div>
        </div>
        <img class="img" src="/img/testdrive/wooman3.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block_request {
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
  .block_request {
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
  .block_request{
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
  .block_request {
    .img {
      width: 320px;
      height: 390px;
      right: 0px;
    }
  }
}
@media screen and (max-width: 768px) {
  .block_request{
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
  .block_request{
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
  .block_request{
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 580px) {
  .block_request{
    .img{

      right: -70px;
    }
  }
}
@media screen and (max-width: 540px) {
  .block_request{
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
  .block_request{
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

</style>