<script setup lang="ts">
import FilterItems from '@/components/UI/FilterItems.vue';
import PriceList from './PriceList.vue';
import { btnsFilter2 } from '@/mocks/ui/btnsFilter';
const filterPrice = () => {

}

</script>

<template>
  <div class="price_service">
    <div class="container">
      <h1 class="size_1">Стоимость ремонта</h1>
      <p class="size_5">Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены
        на ремонт без учета запчастей смотрите ниже.</p>
      <FilterItems class="btns" @filter-cards="filterPrice" :btns-filter="btnsFilter2" />
      <PriceList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price_service {
  margin-bottom: 100px;
  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 15px;
    text-align: center;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
    text-align: center;
    max-width: 780px;
    margin: 0 auto 45px auto;
  }
  .btns{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 87px;
  }
}


@media screen and (max-width: 1200px){
  .price_service{
    margin-bottom: 80px;
    & p{
      margin-bottom: 50px;
    }
    .btns{
      margin-bottom: 60px;
    }
  }
}
@media screen and (max-width: 890px){
  .price_service{
    & p{
      margin: 0 auto 30px auto;
    }
    .btns{
      margin-bottom: 40px;
    }
  }
}
@media screen and (max-width: 600px){
  .price_service{
    margin-bottom: 60px;
  }
}
</style>