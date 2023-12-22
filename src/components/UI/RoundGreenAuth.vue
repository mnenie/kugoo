import { computed, watchEffect } from 'vue';
<script setup lang="ts">
import { computed } from 'vue';

const token = computed(() => (sessionStorage.getItem('token')))
</script>

<template>
  <div class="round_cart_green" v-if="token">
    <img style="width: 8px; height: 8px;" src="/icons/auth/check.svg" alt="">
  </div>
</template>

<style lang="scss" scoped>
.round_cart_green {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: var(--green-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>