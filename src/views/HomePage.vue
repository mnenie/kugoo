<script setup lang="ts">
import AboutHome from '@/components/elements/home/AboutHome.vue';
import AfterCardsHome from '@/components/elements/home/AfterCardsHome.vue';
import BannerHome from '@/components/elements/home/BannerHome.vue';
import BlockContentHome from '@/components/elements/home/BlockContentHome.vue';
import PopularCategories from '@/components/elements/home/PopularCategories.vue';
import ScooterCatalog from '@/components/elements/home/ScooterCatalog.vue';
import SliderMain from '@/components/elements/home/SliderMain.vue';
import Advertisement from '@/components/elements/home/Advertisement.vue';
import VideoHome from '@/components/elements/home/VideoHome.vue';
import ReviewsHome from '@/components/elements/home/ReviewsHome.vue';
import VideoSection from '@/components/elements/home/VideoSection.vue';
import News from '@/components/elements/home/News.vue';
import Accordion from '@/components/UI/Accordion.vue';
import OfftenBuy from '@/components/elements/home/OfftenBuy.vue';
import Alert from '@/components/UI/Alert.vue';
</script>

<template>
  <div>
    <SliderMain />
    <BlockContentHome />
    <ScooterCatalog />
    <AfterCardsHome />
    <BannerHome />
    <PopularCategories />
    <AboutHome />
    <Advertisement />
    <VideoHome />
    <ReviewsHome />
    <VideoSection />
    <News />
    <Accordion />
    <OfftenBuy />
    <Alert />
  </div>
</template>

<style lang="scss" scoped></style>