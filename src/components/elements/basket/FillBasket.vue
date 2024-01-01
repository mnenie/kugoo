<script setup lang="ts">
import TableLine from './TableLine.vue';
import CardsBasket from './CardsBasket.vue';
import PayBlockTotal from './PayBlockTotal.vue';
</script>

<template>
  <div class="fill_basket">
    <div class="elements">
      <div class="elements_1">
        <TableLine />
        <CardsBasket />
      </div>
      <PayBlockTotal />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fill_basket {

  .elements {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    &_1 {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>