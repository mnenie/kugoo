<script setup lang="ts">
import { useInput } from '@/stores/mainInput';
import DropdownCards from '@/components/UI/DropdownCards.vue';

const inputMobile = useInput()
</script>

<template>
  <form @submit.prevent class="input_content">
    <input @input="inputMobile.inputCatalog" v-model="inputMobile.search" @keydown="inputMobile.stopForm" @focus="inputMobile.focus" @mousedown="inputMobile.mouseDown" placeholder="Искать самокат KUGOO">
    <img @click="inputMobile.searchThis" src="/icons/searchmobile.svg" alt="">
    <DropdownCards />
  </form>
</template>

<style lang="scss" scoped>
.input_content {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 35px;

  & input {
    position: relative;
    width: 100%;
    height: 35px;
    padding: 9px 10px 9px 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
    border-radius: 5px;
    background: var(--btn-gray-color);
    outline: none;
    border: none;
  }

  & img {
    position: absolute;
    right: 10px;
    top: 11px;
  }
}
</style>