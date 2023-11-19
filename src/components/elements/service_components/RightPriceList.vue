<script setup lang="ts">
import type { IRepair } from '@/types/repair.interface';
defineProps<{
  items: IRepair[]
}>()
</script>

<template>
  <div class="right">
    <div class="elements">
      <div v-for="item in items" :key="item.id">
        <div v-if="item.active">
          <div v-for="priceItem in item.prices" :key="priceItem.id" class="item">
            <span class="size_6">{{ priceItem.body }}</span>
            <span class="size_6">
              от {{
                new Intl.NumberFormat('ru-Ru', {
                  style: 'currency',
                  currency: 'rub',
                }).format(priceItem.price)
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right {
  min-height: 439px;
  max-width: 730px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--gray-200-color);

  .elements {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;
      border-bottom: 1px solid var(--gray-200-color);

      &:last-child {
        border-bottom: unset;
      }

      & span {
        &:first-child {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }

        &:last-child {
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--black-color);
        }
      }
    }
  }
}
</style>