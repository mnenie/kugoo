<script setup lang="ts">
import EmptyBasket from '@/components/elements/basket/EmptyBasket.vue';
</script>

<template>
  <div class="container">
    <div class="empty">
      <h1 class="size_1">Сравнение</h1>
      <EmptyBasket :empty-title="'Ваш список сравниваемых товаров пуст'"
        :empty-body="'Добавьте в него товары из каталога'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  gap: 37px;

  & h1 {
    margin-top: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
}
</style>