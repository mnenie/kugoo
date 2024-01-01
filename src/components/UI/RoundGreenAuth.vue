<script setup lang="ts">
import { useUser } from '@/stores/user';
import { computed, ref, watchEffect } from 'vue';

const user = useUser()
if(sessionStorage.getItem('token')){
  user.isAuth = true
}

</script>

<template>
  <div class="round_cart_green" v-if="user.isAuth">
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