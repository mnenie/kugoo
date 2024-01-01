<script setup lang="ts">
import BannerService from '@/components/elements/service/BannerService.vue';
import Diagnostic from '@/components/elements/service/Diagnostic.vue';
import PriceService from '@/components/elements/service/PriceService.vue';
import Meet from '@/components/elements/service/Meet.vue';
import VideoAbout from '@/components/elements/service/VideoAbout.vue';
import ScooterAbout from '@/components/elements/service/ScooterAbout.vue';
import Settings from '@/components/elements/service/Settings.vue';
import DeliveryService from '@/components/elements/service/DeliveryService.vue';
import Team from '@/components/elements/service/Team.vue';
import Process from '@/components/elements/service/Process.vue';
import Accordion from '@/components/UI/Accordion.vue';
import AddressService from '@/components/elements/service/AddressService.vue';
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