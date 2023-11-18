<script setup lang="ts">
import BannerService from '@/components/elements/service_components/BannerService.vue';
import Diagnostic from '@/components/elements/service_components/Diagnostic.vue';
import PriceService from '@/components/elements/service_components/PriceService.vue';
import Meet from '@/components/elements/service_components/Meet.vue';
import VideoAbout from '@/components/elements/service_components/VideoAbout.vue';
import ScooterAbout from '@/components/elements/service_components/ScooterAbout.vue';
import Settings from '@/components/elements/service_components/Settings.vue';
import DeliveryService from '@/components/elements/service_components/DeliveryService.vue';
import Team from '@/components/elements/service_components/Team.vue';
import Process from '@/components/elements/service_components/Process.vue';
import Accordion from '@/components/UI/Accordion.vue';
import AddressService from '@/components/elements/service_components/AddressService.vue';
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