<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click') : void
}>()
</script>

<template>
  <button @click="emit('click')" class="btn_card">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn_card {
  padding: 15px 25px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--white-color);
  border-radius: 5px;
  background: var(--purple-color);
  border: 1px solid var(--purple-color);
  transition: 0.15s ease-in;
  &:hover{
    background: #8185F9;
    border: 1px solid #8185F9;
  }
}
@media screen and (max-width: 650px){
  .btn_card{
    font-size: 14px;
  }
}
</style>