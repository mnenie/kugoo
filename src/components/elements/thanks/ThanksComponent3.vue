<script setup lang="ts">
import linkToYoutubeHelper from '@/helpers/linkToYoutubeHelper';
const { goToYouTube } = linkToYoutubeHelper()
</script>

<template>
  <div class="thanks_block">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="text">
            <h1 class="size_1">Мы получили Вашу заявку!</h1>
            <p class="size_7 p_1">Менеджер свяжется с Вами в течение 5 минут в рабочее время. Если Вы оставили заявку в
              нерабочее время — начнем следующий день со звонка Вам.</p>
            <p class="size_7 p_2">А пока ожидаете — подписывайтесь
              на наш YouTube-канал с обзорами новинок электротранспорта.
              В рублике #советыэксперта вы найдете рекомендации по правильной эксплуатации элетротранспорта.
            </p>
            <ButtonThanks @click="goToYouTube">Перейти на YouTube</ButtonThanks>
          </div>
        </div>
        <img src="/img/thanks/youtube.png" alt="">
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
    overflow: hidden;

    & img {
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
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
        margin-bottom: 20px;
        max-width: 498px;
      }

      .p_2 {
        margin-bottom: 28px;
        max-width: 515px;
      }
    }
  }
}
@media screen and (max-width: 1340px){
  .thanks_block{
    .content{
      .text{
        & h1{
          max-width: 400px;
        }
        .p_1{
          max-width: 400px;
        }
        .p_2{
          max-width: 400px;
        }
      }
    }
  }
}
@media screen and (max-width: 1250px){
  .thanks_block{
    .content{
      & img{
        right: -50px;
      }
    }
  }
}
@media screen and (max-width: 992px){
  .thanks_block{
    .content{
      & img{
        width: 474px;
        right: -50px;
        height: 278px;
      }
    }
  }
}
@media screen and (max-width: 890px){
  .thanks_block{
    .content{
      .text{
        & h1{
          max-width: 400px;
        }
        .p_1{
          max-width: 326px;
        }
        .p_2{
          max-width: 300px;
        }
      }
    }
  }
}
@media screen and (max-width: 820px){
  .thanks_block{
    .content{
      padding: 40px 0;
      & img{
        width: 420px;
        right: -100px;
        height: 230px;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .thanks_block{
    .content{
      .text{
        & h1{
          max-width: 370px;
        }
      }
    }
  }
}
@media screen and (max-width: 700px){
  .thanks_block{
    .content{
      & img{
        right: -150px;
      }
    }
  }
}
@media screen and (max-width: 650px){
  .thanks_block{
    .content{
      & img{
        right: -100px;
        width: 360px;
        height: 212px;
      }
      .text{
        & h1{
          max-width: 300px;
        }
        .p_1{
          max-width: 220px;
        }
        .p_2{
          max-width: 220px;
        }
      }
    }
  }
}
@media screen and (max-width: 540px){
  .thanks_block{
    .content{
      & img{
        right: -50px;
        width: 360px;
        height: 212px;
      }
      .text{
        & h1{
          max-width: 350px;
        }
        .p_1{
          max-width: 230px;
        }
        .p_2{
          max-width: 300px;
        }
      }
    }
  }
}
@media screen and (max-width: 440px){
  .thanks_block{
    .content{
      & img{
        right: -100px;
        width: 360px;
        height: 212px;
      }
      .text{
        & h1{
          max-width: 280px;
        }
        .p_1{
          max-width: 215px;
        }
        .p_2{
          max-width: 215px;
        }
      }
    }
  }
}
</style>