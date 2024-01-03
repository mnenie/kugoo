<script setup lang="ts">
import NavBackLink from '@/components/UI/links/NavBackLink.vue';
import PaymentCard from '@/components/elements/payment/PaymentCard.vue';
</script>

<template>
  <div class="container">
    <NavBackLink />
    <div class="block">
      <PaymentCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>