<script setup lang="ts">
import { footerNetwork } from '@/mocks/footer/footerNetwork';
</script>

<template>
  <div class="footer_mobile">
    <div class="networks_blocks">
      <div v-for="item in footerNetwork" class="network-item" :key="item.id">
        <img :src="item.svg" alt="">
        <div class="network-item-about">
          <span>{{ item.title }}</span>
          <span>{{ item.num }}</span>
        </div>
      </div>
    </div>
    <div class="bottom_block">
      <span>Реквизиты</span>
      <span>Политика конфиденциальности</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer_mobile {
  padding: 50px 15px 80px 15px;
  display: flex;
  flex-direction: column;
  position: relative;

  .networks_blocks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
    width: 256px;
    padding-bottom: 24px;


    .network-item {
      flex: calc(50% - 5px);
      border-radius: 5px;
      background: var(--white-color);
      height: 45px;
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 5px 16px 7px 12px;

      & img {
        width: 20px;
        height: 20px;
      }

      &-about {
        display: flex;
        flex-direction: column;

        & span {
          &:first-child {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
          }

          &:last-child {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }
  }

  .bottom_block {
    display: flex;
    align-items: center;
    padding-top: 12px;
    flex-direction: column;
    gap: 3px;
    border-top: 1px solid rgba(93, 108, 123, 0.17);

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
    }
  }
}
</style>