<script setup lang="ts">
import FormUser from './FormUser.vue';
import WayCard from './WayCard.vue';
import WayDelivery from './WayDelivery.vue';


</script>

<template>
  <div class="blocks_col">
    <WayDelivery />
    <FormUser />
    <WayCard />
  </div>
</template>

<style lang="scss" scoped>
.blocks_col{
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 760px;
  width: 100%;
}

@media screen and (max-width: 1100px){
  .blocks{
    max-width: 100%;
  }
}
</style>