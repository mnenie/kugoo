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
      <PayBlockTotal :btn-name="'Оформить заказ'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fill_basket {
  margin-bottom: 80px;

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

@media screen and (max-width: 1100px){
  .fill_basket{
    .elements{
      flex-direction: column;
      align-items: center;
      gap: 0;
      &_1{
        width: 100%;
      }
    }
  }
}
</style>