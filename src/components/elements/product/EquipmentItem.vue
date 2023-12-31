<script setup lang="ts">
import { choiceItems1 } from '@/mocks/ui/choiceItems';
import ChangeBlock from './ChangeBlock.vue'
import dropdownProductHelper from '@/helpers/dropdownProductHelper';
import { ref } from 'vue';
const { isItems, changeCard } = dropdownProductHelper()
const item = ref({
  title: 'Комплектация', body: 'Базовая', link: 'Изменить'
})

const changeFilter = (id: number) => {
  choiceItems1.value.forEach((btn, i) => {
    btn.active = i === id 
  })
}
</script>

<template>
  <div class="equipment">
    <ChangeBlock v-if="!isItems" @change-card="changeCard" :item="item" />
    <div v-else class="block_1">
      <div class="text">
        <p class="size_6">Комплектация</p>
        <img src="/icons/scooters/question.svg" alt="">
      </div>
      <div class="items">
        <div v-for="item in choiceItems1" :key="item.id" :class="['item', item.active ? 'active' : '']" @click="changeFilter(item.id)">
          <span class="size_5">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.equipment {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .block_1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

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
    padding-bottom: 30px;
    border-bottom: 1px solid var(--gray-200-color);

    .item {
      max-width: 220px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      border-radius: 10px;
      border: 1.5px solid var(--gray-200-color);
      cursor: pointer;

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