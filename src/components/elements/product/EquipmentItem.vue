<script setup lang="ts">
import { ref } from 'vue';
import type { IEquipment } from '@/types/equipment.interface';

const items = ref<IEquipment[]>([
  { id: 1, title: 'Базовая', active: true },
  { id: 2, title: 'Версия MAX', active: false },
  { id: 3, title: 'VIP-версия', active: false },
])
</script>

<template>
  <div class="equipment">
    <div class="text">
      <p class="size_6">Комплектация</p>
      <img src="/icons/scooters/question.svg" alt="">
    </div>
    <div class="items">
      <div v-for="item in items" :key="item.id" :class="['item', item.active ? 'active' : '']">
        <span class="size_5">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.equipment {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .text {
    display: flex;
    align-items: center;
    gap: 6px;

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }

    & img {
      width: 16px;
      height: 16px;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .item {
      max-width: 220px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      border-radius: 10px;
      border: 1.5px solid var(--gray-200-color);

      &.active {
        border-radius: 10px;
        border: 2px solid var(--purple-color);
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }
}
</style>