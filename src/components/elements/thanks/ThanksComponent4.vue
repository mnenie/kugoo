<script setup lang="ts">
import linkToInstagramHelper from '@/helpers/linkToInstagramHelper';
const {goToInst} = linkToInstagramHelper()
</script>

<template>
  <div class="thanks_block">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="text">
            <h1 class="size_1">Мы получили Вашу заявку!</h1>
            <p class="size_7 p_1">Менеджер свяжется с Вами в течение 5 минут в рабочее время. Если Вы оставили заявку в нерабочее время — начнем следующий день со звонка Вам. </p>
            <p class="size_7 p_2">А пока ожидаете — присоединяйтесь к сообществу Kugoo в Instagram.
            </p>
            <ButtonThanks @click="goToInst">Перейти в Instagram</ButtonThanks>
          </div>
        </div>
        <img src="/img/thanks/iphone.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thanks_block {
  margin-bottom: 30px;

  .content {
    border-radius: 10px;
    background: radial-gradient(235.21% 120.67% at 85.58% 87.89%, #9DF474 0%, #75D14A 100%);
    padding: 50px 0;
    position: relative;
    display: flex;
    align-items: center;

    & img {
      position: absolute;
      right: 100px;
      bottom: 0;
    }

    .text {
      position: relative;
      z-index: 99;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        margin-bottom: 12px;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--white-color);
      }

      .p_1 {
        margin-bottom: 15px;
        max-width: 400px;
      }

      .p_2 {
        margin-bottom: 27px;
        max-width: 321px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .thanks_block {
    .content {
      & img {
        right: 50px;
      }

      .text {
        & h1 {
          max-width: 452px;
        }

        .p_1 {
          max-width: 260px;
        }

        .p_2 {
          max-width: 240px;
        }
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .thanks_block {
    .content {
      padding: 40px 0;
      overflow: hidden;

      & img {
        right: 10px;
        bottom: -20px;
        width: 234px;
        height: 336px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .thanks_block {
    .content {

      .text {
        & h1 {
          max-width: 320px;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .thanks_block {
    .content {
      & img {
        width: 220px;
        height: 312px;
      }

      .text {
        & h1 {
          max-width: 295px;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .thanks_block {
    .content {
      & img {
       right: -50px;
       bottom: -30px;
      }

      .text {
        .p_1{
          max-width: 247px;
        }
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .thanks_block {
    .content {
      & img {
       right: 10px;
       bottom: -25px;
      }
      .text{
        & h1{
          max-width: 304px;
        }
      }
    }
  }
}
@media screen and (max-width: 390px) {
  .thanks_block {
    .content {
      .text{
        & h1{
          max-width: 290px;
        }
      }
    }
  }
}
@media screen and (max-width: 360px) {
  .thanks_block {
    .content {
      & img {
       right: -50px;
       bottom: -30px;
      }
    }
  }
}
</style>