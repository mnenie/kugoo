<script setup lang="ts">
import ButtonThanks from '@/components/UI/ButtonThanks.vue';
import linkToTelegramHelper from '@/helpers/linkToTelegramHelper';
import ThanksCheck from './ThanksCheck.vue';
const { goToTg } = linkToTelegramHelper()
interface ICheck {
  id: number;
  title: string;
  icon: string;
}
const items: ICheck[] = [
  { id: 1, title: 'Чек-лист «ТОП-5 городских электросамокатов  2021 г.»', icon: '/icons/thanks/check.svg' },
  { id: 2, title: 'Инструкция «Как правильно подготовить самокат к первой поездке.»', icon: '/icons/thanks/check.svg' }
]
</script>

<template>
  <div class="thanks_block">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="text">
            <h1 class="size_1">спасибо, Мы получили Вашу заявку!</h1>
            <p class="size_7 p_1">Менеджер свяжется с Вами в течение 5 минут в рабочее время, вышлет подборку
              электросамокатов по Вашим критериям и ответит на все вопросы.</p>
            <p class="size_8 p_3">Если Вы оставили заявку в нерабочее время — начнем следующий день со звонка Вам</p>
            <p class="size_7 p_2">А пока ожидаете — получите обещанные бонусы в Telegram.</p>
            <ThanksCheck :items="items" />
            <ButtonThanks @click="goToTg">Перейти в Telegram</ButtonThanks>
          </div>
        </div>
        <img src="/img/thanks/iphonetg.png" alt="">
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
        max-width: 486px;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--white-color);
      }

      .p_1 {
        margin-bottom: 11px;
        max-width: 468px;
      }

      .p_3 {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--white-color);
        opacity: 0.7;
        margin-bottom: 20px;
      }

      .p_2 {
        margin-bottom: 15px;
        font-weight: 500;
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

        .p_3 {
          max-width: 250px;
        }

        .p_1 {
          max-width: 350px;
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

      .text {}

      & img {
        right: 10px;
        width: 222px;
        height: 336px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .thanks_block {
    .content {

      .text {
        .p_2 {
          max-width: 300px;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .thanks_block {
    .content {

      .text {
        & h1 {
          max-width: 376px;
        }

        .p_1 {
          max-width: 283px;
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
        bottom: 0px;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .thanks_block {
    .content {
      & img {
        right: 10px;
        bottom: 0px;
      }

      .text {
        & h1 {
          max-width: 386px;
        }

        .p_3 {
          max-width: 250px;
        }

        .p_1 {
          max-width: 300px;
        }
      }
    }
  }
}

@media screen and (max-width: 398px) {
  .thanks_block {
    .content {
      & img {
        right: -30px;
        bottom: 0px;
      }

      .text {
        & h1 {
          max-width: 376px;
        }

        .p_1 {
          max-width: 283px;
        }
      }
    }
  }
}
</style>