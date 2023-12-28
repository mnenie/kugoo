<template>
  <div class="block">
    <p class="size_5">Оптовый отдел</p>
    <div class="contacts">
      <div class="item">
        <img src="/icons/contacts/email.svg" alt="">
        <span class="size_6">marketing@kugoo-russia.ru</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 53px;

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

      & img {
        width: 18px;
        height: 18px;
      }

      & span {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
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