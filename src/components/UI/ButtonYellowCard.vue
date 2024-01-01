<template>
  <button class="btn_yellow">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_yellow{
  padding: 10px 20px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--white-color);
  border-radius: 5px;
  background: var(--orange-color);
  border: none;
  transition: 0.15s ease-in;
  &:hover{
    background: #FAB836;
  }
}
@media screen and (max-width: 650px){
  .btn_yellow{
    font-size: 10px;
  }
}
</style>