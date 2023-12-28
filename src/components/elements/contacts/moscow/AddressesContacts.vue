<script setup lang="ts">

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
          <p class="size_5">ул. Ткацкая, 5 стр. 16 (м. Семеновская)</p>
          <span class="size_7">Пн-Вс 10:00 - 20:00 (магазин)</span>
          <span class="size_7">Пн-Вс 10:00 - 20:00 (сервисный центр)</span>
        </div>
      </div>
      <div class="block_2">
        <div class="img">
          <img src="/icons/contacts/phone.svg" alt="">
        </div>
        <div class="text">
          <div class="text_1">
            <span class="size_7">Магазин</span>
            <p class="size_5">+7 (499) 406-15-79</p>
          </div>
          <div class="text_2">
            <span class="size_7">Сервисный центр</span>
            <p class="size_5">+7 (499) 350-76-92</p>
          </div>
        </div>
      </div>
      <div class="block_3">
        <div class="img">
          <img src="/icons/contacts/warn.svg" alt="">
        </div>
        <div class="text">
          <span><span style="font-weight: 500;">Бесплатная парковка</span> (для въезда предварительно запросите
            у менеджера пропуск)</span>
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
      align-items: stretch;
      gap: 20px;

      .text {
        display: flex;
        align-items: center;
        gap: 30px;

        .text_1,
        .text_2 {
          display: flex;
          flex-direction: column;
          gap: 4px;

          & span {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }

          & p {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--black-color);
          }
        }
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
  padding: 0 8px;

  & img {
    width: 21px;
    height: 21px;
  }
}

@media screen and (max-width: 890px){
  .address{
    align-items: center;
    .blocks{
       max-width: 100%;
    }
  }
}
</style>