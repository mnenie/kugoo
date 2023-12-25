<template>
  <button class="btn-gray">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn-gray {
  padding: 15px 25px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(93, 108, 123, 1);
  border-radius: 5px;
  background: var(--btn-gray-color);
  border: 1.3px solid var(--btn-gray-color);
  transition: 0.15s ease;
  &:hover{
    color: var(--purple-color);
  }
}

@media screen and (max-width: 650px){
  .btn-gray{
    font-size: 10px;
  }
}
</style>