<template>
  <div class="block">
    <p class="size_5">Отдел рекламаций
      и претензий</p>
    <div class="contacts">
      <div class="item">
        <img src="/icons/contacts/email.svg" alt="">
        <span class="size_6">claim@kugoo-russia.ru</span>
      </div>
      <div class="item">
        <img src="/icons/contacts/call.svg" alt="">
        <div class="text">
          <span class="size_6">+7 (499) 350-76-92</span>
          <span class="size_7">Ср-Вс 10:00 - 19:00</span>
        </div>
      </div>
      <div class="item">
        <img src="/icons/contacts/whats.svg" alt="">
        <div class="text">
          <span class="size_6">+7 (911) 284-53-19</span>
          <span class="size_7">Ср-Вс 10:00 - 19:00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 27px;

  & p {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item {
      display: flex;
      align-items: center;
      gap: 15px;
      & img{
        width: 18px;
        height: 18px;
      }

      & span {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;

        & span {
          &:first-child {
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
          }

          &:last-child {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  .block{
    gap: 27px;
  }
}
</style>