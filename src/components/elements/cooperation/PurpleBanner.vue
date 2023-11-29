<script setup lang="ts">
import ConnectFormList from './ConnectFormList.vue';
</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="blocks">
        <div class="container">
          <div class="content">
            <div class="text">
              <h2 class="size_3">Станьте частью самой популярной сети по продаже и ремонту электротранспорта в России и
                зарабатывайте от 2 100 000 RUB в год
              </h2>
              <div class="img">
                <img src="/icons/cooperation/calendar.svg" alt="">
                <span class="size_5">Франшиза с окупаемостью от 6 месяцев</span>
              </div>
            </div>
            <ConnectFormList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 100px;

  .blocks {
    padding: 50px 0 43px 0;
    border-radius: 10px;
    background: radial-gradient(202.55% 104.39% at 82.43% 76.38%, #8185FF 0%, #6F73EE 100%);

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .text {
        max-width: 570px;
        display: flex;
        flex-direction: column;
        gap: 22px;

        & h2 {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--white-color);
        }

        .img {
          display: flex;
          align-items: center;
          gap: 12px;

          & img {
            width: 22px;
            height: 22px;
          }

          & span {
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--white-color);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .banner {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 840px) {
  .banner {
    .blocks {
      .content {
        flex-direction: column;
        align-items: center;

        .text {
          text-align: center;

          .img {
            justify-content: center;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 540px) {
  .banner {
    .blocks {
      padding: 40px 0;
    }
  }
}</style>