<script setup lang="ts">
import PriceListForm from './PriceListForm.vue';

const items = [
  { id: 1, title: 'Ознакомитесь с актуальным каталогом;', icons: '/icons/cooperation/check.svg' },
  { id: 2, title: 'Узнаете, какие категории товаров пользуются наибольшим спросом;', icons: '/icons/cooperation/check.svg' },
  { id: 3, title: 'Получите доступ к выгодным ценам на закупку оптом.', icons: '/icons/cooperation/check.svg' }
]
</script>

<template>
  <div class="commercial">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="blocks">
            <div class="text">
              <h1 class="size_1">Обсудите индивидуальное коммерческое предложение
                с личным менеджером</h1>
              <div class="list">
                <div v-for="item in items" :key="item.id" class="item">
                  <img :src="item.icons" alt="">
                  <span class="size_7">
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
            <PriceListForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.commercial {
  margin-bottom: 100px;

  .content {
    border-radius: 10px;
    background: var(--btn-gray-color);
    padding: 49px 0;

    .blocks {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;

      .text {
        display: flex;
        flex-direction: column;
        gap: 27px;
        color: var(--black-color);

        & h1 {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          max-width: 595px;
        }

        .list {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .item {
            display: flex;
            align-items: center;
            gap: 10px;

            & img {
              width: 18px;
              height: 18px;
            }

            & span {
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

@media screen and (max-width: 1200px) {
  .commercial {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 900px) {
  .commercial{
    .content{
      .blocks {
        flex-direction: column;
        gap: 30px;
        .text{
          align-items: center;
          & h1{
            text-align: center;
            max-width: 700px;
          }
          .list{
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .commercial {
    margin-bottom: 60px;
  }
}
</style>