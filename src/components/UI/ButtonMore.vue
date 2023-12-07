<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'btn-more'
})
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
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
    background: var(--purple-color) !important;
    color: var(--white-color) !important;
  }
}

@media screen and (max-width: 992px) {
  .btn {
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  .btn {
    font-size: 12px;
  }
}
</style>