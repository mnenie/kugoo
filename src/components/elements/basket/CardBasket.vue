<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import TopPartCard from './TopPartCard.vue';
import BottomPartCard from './BottomPartCard.vue';
defineProps<{
  cards: ICards[]
}>()
</script>

<template>
  <div v-for="card in cards" :key="card.id" class="card_item">
    <TopPartCard :card="card" />
    <BottomPartCard />
  </div>
</template>

<style lang="scss" scoped>
.card_item {
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(92, 107, 122, 0.2);

  &:last-child {
    margin-bottom: 0;
    border-bottom: unset;
  }
}
</style>