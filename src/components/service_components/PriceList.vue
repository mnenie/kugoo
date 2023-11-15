<script setup lang="ts">
import LeftPriceList from './LeftPriceList.vue';
import RightPriceList from './RightPriceList.vue';
</script>

<template>
  <div class="price_list">
    <LeftPriceList />
    <RightPriceList />
  </div>
</template>

<style lang="scss" scoped>
.price_list{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
}
@media screen and (max-width: 890px){
  .price_list{
    flex-direction: column;
    align-items: center;
  }
}
</style>