<script setup lang="ts">
import { footerPays } from '@/mocks/footer/footerPays';
interface IFooterSvg {
  pathSvg: string;
  svgItem: string;
}
const svg: IFooterSvg[] = [
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/viber.svg'
  },
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/whatsapp.svg'
  },
  {
    pathSvg: 'https://vk.com/mnenie_mozhno',
    svgItem: '/icons/telegram.svg'
  },
]
</script>

<template>
  <div class="bottom_display">
    <div class="bottom_display_1">
      <p>Реквизиты</p>
      <p>Политика конфиденциальности</p>
    </div>
    <div class="bottom_2">
      <div class="bottom_display_2">
        <img v-for="pay in footerPays" :src="pay.svg" alt="" :key="pay.id">
      </div>
      <div class="bottom_display_3">
        <p>Online чат:</p>
        <div class="svg-items">
          <a target="_blank" v-for="svgItem in svg" :key="svgItem.pathSvg" :href="svgItem.pathSvg">
            <img :src="svgItem.svgItem" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom_display {
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &_1 {
    display: flex;
    align-items: center;
    gap: 44px;

    & p {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
    }
  }

  .bottom_2 {
    display: flex;
    align-items: center;
    gap: 38px;

    .bottom_display_2 {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .bottom_display_3 {
      display: flex;
      align-items: center;
      gap: 15px;

      & p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
      .svg-items{
        display: flex;
        gap: 14px;
        align-items: flex-end;
        & a {
          width: 16px;
          height: 14px;
          text-decoration: none;

          & img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px){
  .bottom_display{
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>