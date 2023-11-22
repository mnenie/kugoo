<script setup lang="ts">
import type { IDiagnostic } from '@/types/ui.interface'
import { ref } from 'vue';

const items = ref<IDiagnostic[]>([
  {
    id: 1,
    title: 'Ремонт от 1 дня',
    body: 'Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.'
  },
  {
    id: 2,
    title: 'Ремонтируем только то, что сломалось',
    body: 'Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.'
  },
  {
    id: 3,
    title: 'Оригинальные запчасти',
    body: 'Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.'
  },
])
</script>

<template>
  <div class="left_block_diagnostic">
    <div v-for="item in items" :key="item.id" class="item_diagnostic_left">
      <p class="size_4">
        {{ item.title }}
      </p>
      <span class="size_7">
        {{ item.body }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left_block_diagnostic {
  max-width: 297px;
  height: 392px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: right;
  margin-top: 20px;

  .item_diagnostic_left {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & p {
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
    }

    & span {
      color: var(--black-color);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
@media screen and (max-width: 1056px){
  .left_block_diagnostic {
    max-width: unset;
    height: unset;
    text-align: unset;
    margin-top: 0;
  }
}
@media screen and (max-width: 768px){
  .left_block_diagnostic {
    text-align: center;
  }
}
</style>