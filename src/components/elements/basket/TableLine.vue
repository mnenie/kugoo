<script setup lang="ts">
import { useCart } from '@/stores/cart';

const cart = useCart()
</script>

<template>
  <div class="table">
    <span class="size_8">Товар</span>
    <div class="blocks_2">
      <span style="margin-right: 30px;" class="size_8">Количество</span>
      <span style=";" class="size_8">Сумма</span>
      <span @click="cart.removeAllProducts" class="size_8 delete_all">Удалить все</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  max-width: 760px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 5px;
  background: var(--btn-gray-color);
  margin-bottom: 40px;

  & span {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .blocks_2 {
    display: flex;
    align-items: center;
    gap: 70px;
  }
}
.delete_all{
  color: var(--gray-600-color);
  cursor: pointer;
  &:hover{
    color: var(--purple-color);
  }
}
@media screen and (max-width: 1100px){
  .table{
    max-width: 100%;
  }
}
@media screen and (max-width: 800px){
  .table{
    display: none;
  }
}
</style>