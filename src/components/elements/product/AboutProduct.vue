<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
const props = defineProps<{
  card: ICards | null
}>()

const items = [
  { id: 1, title: 'Инструкция', icon: '/icons/product/file.svg' },
  { id: 2, title: 'Зарядное устройство', icon: '/icons/product/charger.svg' },
  { id: 3, title: 'Чехол', icon: '/icons/product/scooter.svg' },
  { id: 4, title: 'Гарантийный талон', icon: '/icons/product/check.svg' }
]
</script>

<template>
  <div class="about_product">
    <div class="text">
      <h2 class="size_3">Электросамокат {{ card?.title }} c мощными характеристиками и стильным дизайном</h2>
      <span class="size_7">Приобретая самокат {{ card?.title }}, вы получите множество положительных эмоций и сможете
        беспрепятственно
        передвигаться по {{ card?.speed! <= '45км/ч' ? 'городу' : 'городу и бездорожью' }}.
        <br><br>
        Самокат может набирать скорость до {{card?.speed}} благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет
        легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный
        путь за все время и за текущую поездку в километрах.</span>
    </div>
    <div class="complectation">
      <div class="block_1">
        <p class="size_4">Что в комплекте</p>
        <div class="items">
          <div v-for="item in items" :key="item.id" class="item">
            <img :src="item.icon" alt="">
            <span class="size_7">{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="block_2">
        <p class="size_4">Ключевые особенности {{ card?.title }}</p>
        <div class="tags">
          <div v-for="tag in card?.tags" :key="tag" class="tag">{{ tag }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about_product {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    display: flex;
    flex-direction: column;

    & h2 {
      margin-bottom: 20px;
      max-width: 475px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 482px;
    }
  }

  .complectation {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .block_1 {
      display: flex;
      flex-direction: column;
      gap: 23px;

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
      }

      .items {
        display: grid;
        grid-template-columns: repeat(2, 171px);
        gap: 35px;

        .item {
          display: flex;
          gap: 15px;
          align-items: center;
          max-width: 171px;
        }
      }
    }

    .block_2 {
      & p {
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
        margin-bottom: 20px;
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 20px;

        .tag {
          display: flex;
          padding: 14px 22px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 5px;
          background: var(--btn-gray-color);
        }
      }
    }
  }
}
@media screen and (max-width: 1040px){
  .about_product{
    flex-direction: column;
    width: 100%;
    gap: 40px;
    .text{
      width: 100%;
      & h2{
        max-width: unset;
        text-align: center;
      }
      & span{
        max-width: unset;
        text-align: center;
      }
    }
    .complectation{
      .block_1{
        align-items: center;
        .items{
          display: flex;
        }
      }
      .block_2{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>