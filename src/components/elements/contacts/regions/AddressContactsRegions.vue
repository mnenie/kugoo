<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { IBtns } from '@/types/ui.interface';
const props = defineProps<{
  filters: IBtns[]
}>()
const tel = ref('+7 (812) 507-62-79')
const title = ref('ул. Фрунзе, 2, вход с торца здания, (м. Парк Победы)')
watchEffect(() => {
  const activeId = props.filters

  if(activeId[1].active){
    title.value = 'ул. Фрунзе, 2, вход с торца здания, (м. Парк Победы)'
    tel.value = '+7 (812) 507-62-79'
  }
  if(activeId[2].active){
    title.value = 'ул. Восточно-Кругликовская, 86.'
    tel.value = '+7 (800) 333-94-76'
  }
  if(activeId[3].active){
    title.value = 'ул. Якуба Коласа, 59/1'
    tel.value = '+375 (29) 859-96-55'
  }
})
</script>

<template>
  <div class="address">
    <p class="size_4 main_p">Адрес магазина и сервисного центра:</p>
    <div class="blocks">
      <div class="block_1">
        <div class="img">
          <img src="/icons/contacts/pin.svg" alt="">
        </div>
        <div class="text">
          <p class="size_5">{{ title }}</p>
          <span class="size_7">Вт - Сб 10:00 - 20:00</span>
          <span class="size_7"> Пн, Вс - выходной</span>
        </div>
      </div>
      <div class="block_2">
        <div class="img">
          <img src="/icons/contacts/phone.svg" alt="">
        </div>
        <p class="size_5">{{ tel }}</p>
      </div>
      <div class="block_3">
        <div class="img">
          <img src="/icons/contacts/warn.svg" alt="">
        </div>
        <div class="text">
          <span>Перед посещением магазина, пожалуйста, <span style="font-weight: 500;">уточняйте наличие рассматриваемой
              вами модели по телефону</span> у
            менеджера.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address {
  display: flex;
  flex-direction: column;

  .main_p {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
    margin-bottom: 30px;
  }

  .blocks {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 500px;

    .block_1 {
      display: flex;
      align-items: stretch;
      gap: 20px;

      .text {
        display: flex;
        flex-direction: column;
        gap: 3px;

        & p {
          margin-bottom: 2px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--gray-600-color);
        }
      }
    }

    .block_2 {
      display: flex;
      align-items: center;
      gap: 20px;

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .block_3 {
      display: flex;
      align-items: stretch;
      gap: 20px;

      .text {
        display: flex;
        flex-direction: column;
        gap: 25px;

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }
      }
    }
  }
}

.img {
  border-radius: 5px;
  background: var(--btn-gray-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  & img {
    width: 21px;
    height: 21px;
  }
}

@media screen and (max-width: 890px) {
  .address {
    align-items: center;

    .blocks {
      max-width: 100%;
    }
  }
}
</style>