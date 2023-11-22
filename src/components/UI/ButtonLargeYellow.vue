<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'btn-yellow-large'
})
</script>

<template>
  <button class="btn_yellow">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_yellow{
  padding: 15px 25px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--orange-color);
  border-radius: 5px;
  background: var(--white-color);
  border: 1.3px solid var(--white-color);
  transition: 0.15s ease-in;
  &:hover{
    background: transparent;
    color: var(--white-color);
  }
}
@media screen and (max-width: 650px){
  .btn_yellow{
    font-size: 14px;
  }
}
</style>