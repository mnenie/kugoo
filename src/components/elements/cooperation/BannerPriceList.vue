<script setup lang="ts">
import ItemsSvgBanner from './ItemsSvgBanner.vue';
import PriceListForm from './PriceListForm.vue';
</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="content_inside">
            <div class="text">
              <h1 class="size_1">Покупайте товары Kugoo по оптовым ценам от официального дилера</h1>
              <p class="size_4">Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
              <ItemsSvgBanner />
            </div>
            <div class="list">
              <PriceListForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-top: 30px;
  margin-bottom: 100px;

  .content {
    padding: 40px 0;
    border-radius: 10px;
    background: var(--btn-gray-color);

    .content_inside {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      .text {
        max-width: 612px;
        display: flex;
        flex-direction: column;

        & h1 {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--black-color);
          margin-bottom: 7px;
          max-width: 570px;
        }

        & p {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
          margin-bottom: 34px;
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

@media screen and (max-width: 900px) {
  .content_inside {
    flex-direction: column;

    .text {
      align-items: center;

      & h1 {
        text-align: center;
      }

      & p {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .banner {
    .content {
      padding: 30px 0;
    }
  }
}

@media screen and (max-width: 520px) {
  .banner {
    margin-top: 0;
  }
}</style>