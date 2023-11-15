<script setup lang="ts">
import BtnBanner from '@/components/UI/BtnBanner.vue'
import { ref } from 'vue';
const style = ref<string[]>([
  'background: var(--green-color)',
  'border: 1px solid var(--green-color)'
])


</script>

<template>
  <div class="meet_content">
    <BtnBanner class="banner" :style="style">Услуга</BtnBanner>
    <h1 class="size_1">Определим причину неисправности удаленно или на диагностике!</h1>
    <button>Записаться на диагностику</button>
  </div>
</template>

<style lang="scss" scoped>
.meet_content {
  display: flex;
  flex-direction: column;

  & h1 {
    margin-bottom: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--white-color);
    max-width: 550px;
  }

  & button {
    padding: 15px 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    background: var(--white-color);
    color: var(--blue-color);
    align-self: flex-start;
    border: none;
  }
}
@media screen and (max-width: 992px){
  .meet_content{
    & h1{
      max-width: 475px;
    }
  }
}
@media screen and (max-width: 840px){
  .meet_content{
    & h1{
      max-width: unset;
      text-align: center;
    }
    & button{
      align-self: unset;
      width: 240px;
      display: block;
      margin: 0 auto;
    }
  }
  .banner{
    align-self: center !important;
  }
}
@media screen and (max-width: 600px){
  .meet_content{
    & h1{
      margin-bottom: 15px;
    }
  }
}
</style>