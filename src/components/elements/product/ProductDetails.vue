<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import ProductImgBlock from './ProductImgBlock.vue';
import MainInfoProduct from './MainInfoProduct.vue';
import EquipmentItem from './EquipmentItem.vue';
import TireItems from './TireItems.vue';
import GuaranteeItem from './GuaranteeItem.vue';
import AdditionalItems from './AdditionalItems.vue';
import GiftBlock from './GiftBlock.vue';
import PayBanner from './PayBanner.vue';
const props = defineProps<{
  card: ICards,
  active: boolean
}>()
const emit = defineEmits<{
  (e: 'changeImg', img: string): void
}>()
</script>

<template>
  <div class="content">
    <div class="img">
      <ProductImgBlock :card="card" @change-img="emit('changeImg', $event)" :active="active" />
    </div>
    <div class="main_info">
      <MainInfoProduct :card="card" />
      <EquipmentItem />
      <TireItems />
      <GuaranteeItem />
      <AdditionalItems />
      <GiftBlock />
      <PayBanner :card="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 100px;
  .main_info{
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 1244px){
  .content{
    gap: 50px;
  }
}
@media screen and (max-width: 1200px){
  .content{
    flex-direction: column;
    align-items: center;
    .img{
      width: 100%;
    }
    .main_info{
      width: 100%;
    }
  }
}
</style>