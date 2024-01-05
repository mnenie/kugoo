<script setup lang="ts">
import ScootersCards from '../home/ScootersCards.vue';
import { useFav } from '@/stores/fav';
const fav = useFav()
</script>

<template>
  <div class="fill">
    <ScootersCards :cards="fav.products" :style="'margin-bottom: 0px'" />
  </div>
</template>

<style lang="scss" scoped>
.fill{
  margin-bottom: 80px;
}
@media screen and (max-width: 600px){
  .fill{
    margin-bottom: 60px;
  }
}
</style>