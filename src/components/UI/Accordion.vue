<script setup lang="ts">
import { useRoute } from 'vue-router';
import AccordionItem from './AccordionItem.vue';
import { HOME_ROUTE } from '@/utils/consts';
import { accordion2, accordion } from '@/mocks/accordion';
const route = useRoute()

</script>

<template>
  <div class="accordion_block">
    <div class="container">
      <div class="accordion_items">
        <h1 class="size_1">Отвечаем на вопросы покупателей</h1>
        <AccordionItem :accordion="route.path === HOME_ROUTE ? accordion : accordion2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion_block {
  padding-bottom: 100px;

  .accordion_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      max-width: 456px;
      text-align: center;
      margin-bottom: 60px;
    }
  }
}

@media screen and (max-width: 992px){
  .accordion_block{
    padding-bottom: 80px;
    .accordion_items{
      & h1{
        margin-bottom: 50px;
      }
    }
  }
}
@media screen and (max-width: 600px){
  .accordion_block{
    padding-bottom: 60px;
    .accordion_items{
      & h1{
        margin-bottom: 40px;
      }
    }
  }
}
</style>