<script setup lang="ts">
import SettingsPricelist from './SettingsPricelist.vue';
</script>

<template>
  <div class="settings">
    <div class="container">
      <div class="block">
        <h1 class="size_1">Стоимость гидроизоляции и настройки</h1>
        <p class="size_6">Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
        <SettingsPricelist />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 100px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--balck-color);
    text-align: center;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    text-align: center;
  }
}
@media screen and (max-width: 1200px){
  .block{
    margin-bottom: 80px;
    & p{
      margin-bottom: 20px;
    }
  }
}
</style>