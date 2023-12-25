<script setup lang="ts">
import { ref } from 'vue';
import { ClipLoader } from 'vue3-spinner'
const color = ref('#6f73ee')
const size = ref('60px')
</script>

<template>
  <div class="loader">
    <ClipLoader :color="color" :size="size" />
  </div>
</template>


<style lang="scss">
.loader {
  margin-top: 120px;
  margin-bottom: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-clip{
  border-width: 0.25em !important;
  background-color: transparent !important;
}
</style>