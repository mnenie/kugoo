<template>
  <button class="btn_large">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_large {
  font-size: 16px;
  padding: 15px 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  border: 1.3px solid var(--purple-color);
  background: var(--white-color) !important;
  color: var(--purple-color) !important;
  transition: 0.15s ease-in;

  &:hover {
    
  }
}

@media screen and (max-width: 992px) {
  .btn_large {
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  .btn_large {
    font-size: 12px;
  }
}
</style>