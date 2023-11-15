<script setup lang="ts">
import BannerService from '@/components/service_components/BannerService.vue';
import Diagnostic from '@/components/service_components/Diagnostic.vue';
import PriceService from '@/components/service_components/PriceService.vue';
import Meet from '@/components//service_components/Meet.vue';
import VideoAbout from '@/components/service_components/VideoAbout.vue';
import ScooterAbout from '@/components/service_components/ScooterAbout.vue';
import Settings from '@/components/service_components/Settings.vue';
import DeliveryService from '@/components/service_components/DeliveryService.vue';
import Team from '@/components/service_components/Team.vue';
import Process from '@/components/service_components/Process.vue';
import Accordion from '@/components/UI/Accordion.vue';
import AddressService from '@/components/service_components/AddressService.vue';
</script>

<template>
  <div>
    <BannerService />
    <Diagnostic />
    <PriceService />
    <Meet />
    <VideoAbout />
    <ScooterAbout />
    <Settings />
    <DeliveryService />
    <Team />
    <Process />
    <Accordion />
    <AddressService />
  </div>
</template>

<style lang="scss" scoped></style>