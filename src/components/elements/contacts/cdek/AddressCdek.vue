<script setup lang="ts">

</script>

<template>
  <div class="cdek">
    <p class="size_4 main_p">Адрес магазина и сервисного центра:</p>
    <div class="blocks">
      <div class="block_1">
        <div class="img">
          <img src="/icons/contacts/phone.svg" alt="">
        </div>
        <p class="size_5">+7 (499) 406-15-79</p>
      </div>
      <div class="block_2">
        <div class="img">
          <img src="/icons/contacts/warn.svg" alt="">
        </div>
        <span class="size_7"><span style="font-weight: 500;">Стоимость и срок доставки</span> вы можете посмотреть в
          разделе «Доставка и оплата» или уточнить у менеджеров по телефону</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek {
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
      align-items: center;
      gap: 20px;

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .block_2 {
      display: flex;
      align-items: stretch;
      gap: 20px;

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
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
  .cdek {
    align-items: center;

    .blocks {
      max-width: 100%;
    }
  }
}</style>