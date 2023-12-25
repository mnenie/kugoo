<template>
  <button class="btn_to">
    <slot></slot>
    <img src="/icons/arrow4.svg" alt="">
  </button>
</template>

<style lang="scss" scoped>
.btn_to {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: var(--purple-color);
  border: none;
  padding: 11px 22px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white-color);
  transition: 0.15s ease-in;

  &:hover {
    background: #8185F9;
    backdrop-filter: blur(5px);
  }
}
@media screen and (max-width: 650px){
  .btn_to{
    font-size: 12px;
  }
}
</style>