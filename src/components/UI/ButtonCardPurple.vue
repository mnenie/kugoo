<template>
  <button class="btn_card">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_card {
  padding: 10px 20px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--white-color);
  border-radius: 5px;
  background: var(--purple-color);
  border: none;
  transition: 0.15s ease-in;

  &:hover {
    background: #8185F9;
  }
}

@media screen and (max-width: 650px) {
  .btn_card {
    font-size: 10px;
  }
}
</style>