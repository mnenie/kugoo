<script setup lang="ts">
import GrayBlocksCertificate from './GrayBlocksCertificate.vue';

const items = [
  { id: 1, icon: '/icons/cooperation/check.svg', strong: 'Гарантию на товары 1 месяц', span: 'и возможность приобрести годовую гарантию' },
  { id: 2, icon: '/icons/cooperation/check.svg', strong: 'Медиаконтент, ', span: 'который можно разместить на своем сайте и соцсетях' },
  { id: 3, icon: '/icons/cooperation/check.svg', strong: 'Удобные способы оплаты ', span: '— наличный и безналичный расчет' },
  { id: 4, icon: '/icons/cooperation/check.svg', strong: 'Отсутствие демпинга ', span: 'на рынке за счет контролируемой МРЦ' },
]
</script>

<template>
  <div class="text">
    <div class="main_text">
      <h1 class="size_1">Предлагаем оптовым клиентам лучшие условия</h1>
      <div class="scale_block">
        <span class="size_big">93%</span>
        <span class="size_8">партнеров становятся постоянными, благодаря нашему подходу</span>
      </div>
    </div>
    <div class="column_main">
      <div class="text_column">
        <p class="size_5 main_p">являясь официальным дилером Kugoo в России</p>
        <div class="list">
          <p class="size_5">Сотрудничая с нами, вы получите:</p>
          <div class="list_items">
            <div v-for="item in items" :key="item.id" class="list_item">
              <img :src="item.icon" alt="">
              <span class="size_7">{{ item.strong }} <span class="inside">{{ item.span }}</span></span>
            </div>
          </div>
        </div>
        <GrayBlocksCertificate />
      </div>
      <img class="certificate" src="/img/cooperation/certificate.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  display: flex;
  flex-direction: column;

  .main_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    gap: 20px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      max-width: 599px;
    }

    .scale_block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 293px;
      width: 100%;
      height: 82px;
      padding: 0 20px;
      border-radius: 10px;
      border: 1px solid var(--gray-200-color);
      gap: 12px;

      .span_big {
        font-size: 48px;
      }

      & span {
        &:first-child {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--purple-color);
        }

        &:last-child {
          font-style: normal;
          font-weight: 400;
          line-height: 15px;
          color: var(--black-color);
          width: 135px;
        }
      }
    }
  }

  .column_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .certificate {
      border-radius: 5px;
      border: 10px solid var(--gray-600-color);
      width: 452px;
      height: 322px;
    }

    .text_column {
      display: flex;
      flex-direction: column;

      .main_p {
        margin-bottom: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }

      .list {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;

        & p {
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--black-color);
          margin-bottom: 16px;
        }

        .list_items {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .list_item {
            display: flex;
            align-items: center;
            gap: 10px;

            & img {
              width: 17px;
              height: 17px;
            }

            & span {
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              color: var(--black-color);

              .inside {
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .text {
    .main_text {
      .scale_block {
        max-width: 270px;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .text {
    .column_main {
      .certificate {
        width: 352px;
        height: 222px;
      }
    }
  }
}

@media screen and (max-width: 790px) {
  .text {
    align-items: center;
    .main_text{
      flex-direction: column;
      & h1{
        max-width: unset;
        text-align: center;
      }
    }

    .column_main {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      .text_column{
        align-items: center;
        .list{
          align-items: center;
          .list_items{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }

      .certificate {
        width: 452px;
        height: 310px;
        // margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .text {
    .main_text {
      .scale_block {
        max-width: 230px;
        & span{
          &:last-child{
            width: 122px;
          }
        }
      }
    }
  }
}
</style>