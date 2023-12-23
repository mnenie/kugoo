<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import DeliveryRequest from '@/components/elements/delivery/DeliveryRequest.vue'
import BannerDelivery from '@/components/elements/delivery/BannerDelivery.vue'
import DownloadBannerDelivery from '@/components/elements/delivery/DownloadBannerDelivery.vue';
</script>

<template>
  <div>
    <NavigationTopPage :title="'Доставка и оплата'" />
    <BannerDelivery />
    <DownloadBannerDelivery />
    <DeliveryRequest />
  </div>
</template>

<style lang="scss" scoped></style>