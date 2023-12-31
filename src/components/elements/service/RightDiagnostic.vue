<script setup lang="ts">
import type { IDiagnostic } from '@/types/ui.interface'

const items: IDiagnostic[] = ([
  {
    id: 1,
    title: 'Гарантия',
    body: '14 дней на ремонт'
  },
  {
    id: 2,
    title: 'бесплатный ремонт',
    body: 'в течение 1 года после покупки'
  },
  {
    id: 3,
    title: 'расширенная гарантия',
    body: 'до 36 месяцев'
  },
])
</script>

<template>
  <div class="right_block_diagnostic">
    <div v-for="item in items" :key="item.id" class="item_diagnostic_right">
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
.right_block_diagnostic {
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 297px;
  height: 352px;
  margin-top: 20px;

  .item_diagnostic_right {
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
  .right_block_diagnostic {
    max-width: unset;
    height: unset;
    text-align: unset;
    margin-top: 0;
    flex-direction: row;
    .item_diagnostic_right{
      text-align: center;
      align-items: center;
    }
  }
}
@media screen and (max-width: 768px){
  .right_block_diagnostic {
    gap: 30px;
  }
}
</style>