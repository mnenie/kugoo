<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import ProductImgBlock from './ProductImgBlock.vue';
import MainInfoProduct from './MainInfoProduct.vue';
import EquipmentItem from './EquipmentItem.vue';
import TireItems from './TireItems.vue';
import GuaranteeItem from './GuaranteeItem.vue';
import AdditionalItems from './AdditionalItems.vue';
defineProps<{
  card: ICards
}>()
const emit = defineEmits<{
  (e: 'changeImg', img: string): void
}>()
</script>

<template>
  <div class="content">
    <div class="img">
      <ProductImgBlock :card="card" @change-img="emit('changeImg', $event)" />
    </div>
    <div class="main_info">
      <MainInfoProduct :card="card" />
      <EquipmentItem />
      <TireItems />
      <GuaranteeItem />
      <AdditionalItems />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 64px;
  .main_info{
    display: flex;
    flex-direction: column;
  }
}
</style>