<script setup lang="ts">
import ScootersCards from '../home/ScootersCards.vue';
import { useFav } from '@/stores/fav';
const fav = useFav()
</script>

<template>
  <ScootersCards :cards="fav.products" :style="'margin-bottom: 0px'" />
</template>

<style lang="scss" scoped></style>