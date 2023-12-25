<script setup lang="ts">

</script>

<template>
  <div class="table">
    <span class="size_8">Товар</span>
    <div class="blocks_2">
      <span style="margin-right: 30px;" class="size_8">Количество</span>
      <span style=";" class="size_8">Сумма</span>
      <span style="color: var(--gray-600-color);" class="size_8">Удалить все</span>
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
</style>