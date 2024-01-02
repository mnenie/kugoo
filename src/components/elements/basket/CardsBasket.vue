<script setup lang="ts">
import useGetAllScooters from '@/hooks/useGetAllScooters';
import CardBasket from './CardBasket.vue';
const {items} = useGetAllScooters()
</script>

<template>
  <div class="cards">
    <CardBasket :cards="items" />
  </div>  
</template>

<style lang="scss" scoped>
.cards{
  display: flex;
  flex-direction: column;
  max-width: 760px;
  width: 100%;
}
@media screen and (max-width: 1100px){
  .cards{
    max-width: 100%;
  }
}
</style>