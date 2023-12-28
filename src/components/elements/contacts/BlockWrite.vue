<template>
  <div class="block">
    <p class="size_5">Оптовый отдел</p>
    <div class="contacts">
      <span class="size_7">Если у вас возникли предложения или пожелания, которые помогут улучшить работу нашей компании,
        вы можете написать через специальную форму напрямую руководителю компании.</span>
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

    & span {
      font-style: normal;
      font-weight:400;
      line-height: normal;
      color: var(--black-color);
    }

  }
}

@media screen and (max-width: 768px){
  .block{
    gap: 27px;
  }
}
</style>