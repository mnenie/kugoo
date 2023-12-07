<script setup lang="ts">

</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: #fff;
  border: 2px solid #f5f7fa;
  border-radius: 6px;
  color: #000;
  cursor: pointer;
  font-size: 1em;
  margin-left: 0.5em;
  padding: 0.4rem 0.77rem;
}
</style>