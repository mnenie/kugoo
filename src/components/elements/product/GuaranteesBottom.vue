<script setup lang="ts">
import GuaranteesBlockBottom from './GuaranteesBlockBottom.vue';


</script>

<template>
  <div class="guarantees">
    <GuaranteesBlockBottom />
  </div>
</template>

<style lang="scss" scoped>
.guarantees{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

@media screen and (max-width: 1040px){
  .guarantees{
    display: flex;
    flex-direction: column;
  }
}
</style>