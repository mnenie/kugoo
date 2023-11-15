<script setup lang="ts">

</script>

<template>
  <select class="select">
    <option selected class="size_5 option">Везде</option>
    <option class="size_5" value="1">RU</option>
    <option class="size_5" value="2">EU</option>
  </select>
</template>

<style lang="scss" scoped>
.select {
  display: block;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--btn-gray-color);
  background-image: url(../icons/arrowdown.svg);
  background-repeat: no-repeat;
  background-position: right 12px top 14px;
  padding: 6px 12px;
  border-radius: var(--bs-border-radius);
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  outline: none;
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
  width: 76px;
  height: 32px;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: normal;
  border-radius: 5px;
  color: var(--black-color);
  border: none;
  font-family: 'Jost', sans-serif;
}
.option{
  position: relative;
  left: 10px;
}

@media screen and (max-width: 768px) {
  .select {
    font-size: 12px !important;
  }
}
</style>