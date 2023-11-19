<script setup lang="ts">
import ButtonPurpleLg from '@/components/UI/ButtonPurpleLg.vue';
import FilterItems from '@/components/UI/FilterItems.vue';
import { btnsFilter3 } from '@/mocks/ui/btnsFilter';
import { onMounted, ref } from 'vue';
interface IItems {
  id: number;
  title: string;
  price: string;
}
const items = ref<IItems[]>([])
const getPrice = async () => {
  try {
    const response = await fetch('data/scooters.json')
    const data = await response.json()
    items.value = [...data.cards1, ...data.cards2]
  }
  catch (e) {
    console.log(e)
  }
}
onMounted(() => {
  getPrice()
})
const filterPrice = () => {

}
</script>
<template>
  <div class="price_list">
    <FilterItems class="btns" @filter-cards="filterPrice" :btns-filter="btnsFilter3" />
    <div class="blocks">
      <div v-for="item in items" :key="item.id" class="block">
        <span>{{ item.title }}</span>
        2990Р
      </div>
    </div>
    <ButtonPurpleLg style="margin-top: -20px;">Заказать гидроизоляцию</ButtonPurpleLg>
  </div>
</template>

<style lang="scss" scoped>
.price_list {
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;

  .blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .block {
      max-width: 475px;
      width: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--gray-200-color);
    }
  }
}
@media screen and (max-width: 1200px){
  .price_list{
    gap: 60px;
  }
}
@media screen and (max-width: 1020px){
  .price_list{
    .blocks{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: 30px;
      .block{
      }
    }
  }
}
@media screen and (max-width: 890px){
  .price_list{
    .blocks{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      justify-items: center;
      .block{
        max-width: 100%;
      }
    }
  }
}
</style>