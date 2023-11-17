<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'link-arrow'
})
</script>

<template>
  <div class="link">
    <slot></slot>
    <img src="/icons/market/arrow.svg" alt="">
  </div>
</template>


<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--purple-color);
  cursor: pointer;
  transition: gap 0.15s ease-in;
  &:hover{
    gap: 16px;
  }
}
@media screen and (max-width:650px){
  .link{
    font-size: 12px;
  }
}
</style>