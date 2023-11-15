<script setup lang="ts">
import { ref } from 'vue';
import BlockAfterCards from './BlockAfterCards.vue';
const block = ref([
  {
    id: 1, 
    title: 'Подбор модели электросамоката',
    body: 'Пройдите тест и выберите электросамокат по своим критериям',
    img: '/img/block1.png'
  },
  {
    id: 2, 
    title: 'Сервисное обслуживание',
    body: 'Крупнейший сервисный центр в России для продуктов Kugoo',
    img: '/img/block2.png'
  }
])

</script>

<template>
  <div class="blocks_display">
    <div class="container">
      <div class="blocks">
        <BlockAfterCards :blocks="block" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks_display {
  padding-bottom: 110px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
}
@media screen and (max-width: 1200px){
  .blocks_display{
    .blocks{
      gap: 20px;
    }
  }
}
@media screen and (max-width: 1200px){
  .blocks_display{
    padding-bottom: 80px;
  }
}
@media screen and (max-width: 600px){
  .blocks_display{
    padding-bottom: 60px;
  }
}
</style>