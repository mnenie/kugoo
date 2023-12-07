<script setup lang="ts">
import { choiceItems2 } from '@/mocks/ui/choiceItems';
import ChangeBlock from './ChangeBlock.vue'
import dropdownProductHelper from '@/helpers/dropdownProductHelper';
import { ref } from 'vue';
const { isItems, changeCard } = dropdownProductHelper()
const item = ref({
  title: 'Покрышки', body: 'Внедорожная шипованная', add: '+ установка (с доп.комплектом базовых покрышек)', link: 'Изменить', price: '5 600 руб.'
})
</script>

<template>
  <div class="equipment">
    <ChangeBlock v-if="!isItems" :item="item" @change-card="changeCard" />
    <div v-else class="block_1">
      <div class="text">
        <p class="size_6">Тип покрышки</p>
        <img src="/icons/scooters/question.svg" alt="">
      </div>
      <div class="items">
        <div v-for="item in choiceItems2" :key="item.id" :class="['item', item.active ? 'active' : '']">
          <div style="display: flex; flex-direction: column; gap: 5px;" class="spans">
            <span class="size_5">{{ item.title }}</span>
            <span style="color: var(--gray-600-color);" class="size_7">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.equipment {

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
    margin-bottom: 20px;
    border-bottom: 1px solid var(--gray-200-color);

    .item {
      max-width: 220px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 130px;
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
        max-width: 136px;
        text-align: center;
      }
    }
  }
}
</style>