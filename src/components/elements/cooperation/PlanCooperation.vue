<script setup lang="ts">
import PriceListForm from './PriceListForm.vue';
import { ref } from 'vue';
const style = ref([
  'background-color: var(--green-color)'
])
const items = [
  { id: 1, img: '/icons/cooperation/checkwhite.svg', title: 'индивидуальный прайс-лист' },
  { id: 2, img: '/icons/cooperation/checkwhite.svg', title: 'расчет прогнозируемой прибыли и сроков окупаемости' },
  { id: 3, img: '/icons/cooperation/checkwhite.svg', title: 'бренд-зону Kugoo' },
  { id: 4, img: '/icons/cooperation/checkwhite.svg', title: 'разработку сайта' },
  { id: 5, img: '/icons/cooperation/checkwhite.svg', title: 'и еще +15 услуг под ключ' },
]
</script>

<template>
  <div class="plan">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="blocks">
            <div class="text">
              <BtnBanner class="banner_btn" :style="style" style="margin-bottom: 17px;">Бесплатно</BtnBanner>
              <h1 class="size_1">Получите готовый план развития бизнеса по продаже товаров Kugoo</h1>
              <p class="size_5">Подготовим для вас бизнес-план, который включает:</p>
              <div class="list">
                <div v-for="item in items" :key="item.id" class="item">
                  <img :src="item.img" alt="">
                  <span class="size_6">{{ item.title }}</span>
                </div>
              </div>
            </div>
            <PriceListForm style="background: transparent; border: 1.5px solid rgba(255, 255, 255, 0.2);" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plan {
  margin-bottom: 100px;
}

.content {
  border-radius: 10px;
  background: radial-gradient(202.55% 104.39% at 82.43% 76.38%, #8185FF 0%, #6F73EE 100%);
  padding: 52px 0;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--white-color);

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 21px;
        max-width: 510px;
      }

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 13px;
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

@media screen and (max-width: 1200px) {
  .plan {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 900px) {
  .content{
    padding: 40px 0;
    .blocks{
      flex-direction: column;
      gap: 30px;
      .text{
        align-items: center;
        .banner_btn{
          align-self: center;
        }
        & h1{
          max-width: 600px;
          text-align: center;
        }
        .list{
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
}
</style>