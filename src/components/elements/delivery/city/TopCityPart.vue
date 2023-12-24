<script setup lang="ts">
import CourierPart from './CourierPart.vue';
import ImmediateDelivery from './ImmediateDelivery.vue';
import type { IBtns } from '@/types/ui.interface';

const props = defineProps<{
  filters: IBtns[]
}>()
</script>

<template>
  <div class="top_part">
    <CourierPart :filters="filters" />
    <ImmediateDelivery v-show="filters[0].active" />
  </div>
</template>

<style lang="scss" scoped></style>