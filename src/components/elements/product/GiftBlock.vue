<script setup lang="ts">
import changeDateHelper from '@/helpers/changeDateHelper';
import ChangeBlock from './ChangeBlock.vue';
import dropdownProductHelper from '@/helpers/dropdownProductHelper';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import GiftBanner from './GiftBanner.vue';
import { choiceItems5 } from '@/mocks/ui/choiceItems';

const { isItems, changeCard } = dropdownProductHelper()
const item = ref({
  title: 'Подарочная упаковка', body: 'Розовый цвет', link: 'Изменить'
})
const { timer, updateTime, remainingTime } = changeDateHelper()
onMounted(() => {
  setInterval(() => {
    updateTime();
  }, 1000);
})
onBeforeUnmount(() => {
  clearInterval(timer);
});
const changeFilter = (id: number) => {
  choiceItems5.value.forEach((btn, i) => {
    btn.active = i === id 
  })
}
</script>

<template>
  <div class="gift_block">
    <ChangeBlock class="gift_change" :item="item" v-if="!isItems" @change-card="changeCard" style="border-bottom: none;" />
    <div v-else class="content">
      <div class="text">
        <p class="size_6">Подарочная упаковка</p>
        <div class="gift_action">
          <span style="color: var(--gray-600-color);" class="size_7">До конца акции</span>
          <p class="size_6">{{ remainingTime }}</p>
        </div>
      </div>
      <GiftBanner />
      <div class="items">
        <div v-for="item in choiceItems5" :key="item.id" :class="['item', item.active ? 'active' : '']" @click="changeFilter(item.id)">
          <img v-if="item.img" :src="item.img" alt="">
          <span class="size_5">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gift_block {
  .gift_change{
    margin-bottom: 30px;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      .gift_action {
        display: flex;
        align-items: center;
        gap: 8px;
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
      // border-bottom: 1px solid var(--gray-200-color);

      .item {
        max-width: 220px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 126px;
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
          text-align: center;
        }
      }
    }
  }
}
</style>