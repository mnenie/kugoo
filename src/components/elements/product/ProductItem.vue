<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import ProductDetails from './ProductDetails.vue';
import { ref } from 'vue';

const title = ref<string>('Каталог')
const title2 = ref<string>('Электросамокаты')
defineProps<{
  card: ICards | null
}>()
const emit = defineEmits<{
  (e: 'changeImg', img: string): void
}>()
</script>

<template>
  <div>
    <div v-if="card">
      <NavigationTopPage :title="title" :title2="title2" :title3="card.title" />
      <div class="container">
        <ProductDetails :card="card" @change-img="emit('changeImg', $event)" />
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin: 50px 0;" v-else>
      <span style="color: var(--pink-color); text-align: center;" class="size_6">Информация о товаре не найдена</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>