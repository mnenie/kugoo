<template>
  <button class="btn_banner">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_banner {
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--black-color);
  background: var(--white-color);
  border: 1.3px solid var(--white-color);
  transition: 0.15s ease-in;

  &:hover {
    color: var(--white-color);
    background: transparent;
  }
}

@media screen and (max-width: 890px) {
  .btn_banner {
    font-size: 14px;
  }
}
</style>