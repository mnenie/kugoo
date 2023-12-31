<script setup lang="ts">
import FillterAboutProduct from './FillterAboutProduct.vue';
import AboutProduct from './AboutProduct.vue';
import { ref } from 'vue';
import type { ICards } from '@/types/cards.interface';
import DeliveryProduct from './DeliveryProduct.vue';
import GuaranteesBottom from './GuaranteesBottom.vue';
import PropertyBottom from './PropertyBottom.vue'
import MaxVersion from './MaxVersion.vue';

const props = defineProps<{
  card: ICards | null
}>()
const filters = ref([
  { id: 1, name: 'О товаре', active: true },
  { id: 2, name: 'Характеристики', active: false },
  { id: 3, name: 'Доставка и оплата', active: false },
  { id: 4, name: 'Гарантии', active: false },
  { id: 5, name: 'Версия MAX', active: false },
])
const changeItems = (id: number) => {}
</script>

<template>
  <div class="bottom_description">
    <FillterAboutProduct @change-items="changeItems" :filters="filters" />
    <div class="container">
      <AboutProduct :card="card" v-show="filters[0].active" />
      <DeliveryProduct v-show="filters[2].active" />
      <GuaranteesBottom v-show="filters[3].active" />
      <PropertyBottom :card="card" v-show="filters[1].active" />
      <MaxVersion v-show="filters[4].active" />
    </div>
  </div>
</template>

<style scoped>
.bottom_description {
  margin-bottom: 80px;
}
</style>