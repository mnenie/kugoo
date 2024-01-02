<script setup lang="ts">

</script>

<template>
   <textarea class="text_area" name="" id="" cols="10" rows="5" placeholder="Оставьте пожелание или комментарий к заказу "></textarea>
</template>

<style lang="scss" scoped>
.text_area {
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid var(--gray-200-color);
  background: var(--white-color);
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0 !important;
  color: var(--gray-600-color);
  transition: 0.15s ease;
  outline: none;
  resize: none;
  &:hover{
    border: 1px solid var(--purple-color);
    color: var(--black-color);
    &::placeholder{
      color: var(--black-color);
      
    }
  }
  &:focus{
    border: 1px solid var(--purple-color);
    color: var(--black-color);
    &::placeholder{
      color: var(--black-color);
    }
  }
}
@media screen and (max-width: 650px){
  .text_area{
    font-size: 14px;
  }
}
</style>