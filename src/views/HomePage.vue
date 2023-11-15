<script setup lang="ts">
import AboutHome from '@/components/home_components/AboutHome.vue';
import AfterCardsHome from '@/components/home_components/AfterCardsHome.vue';
import BannerHome from '@/components/home_components/BannerHome.vue';
import BlockContentHome from '@/components/home_components/BlockContentHome.vue';
import PopularCategories from '@/components/home_components/PopularCategories.vue';
import ScooterCatalog from '@/components/home_components/ScooterCatalog.vue';
import SliderMain from '@/components/home_components/SliderMain.vue';
import Advertisement from '@/components/home_components/Advertisement.vue';
import VideoHome from '@/components/home_components/VideoHome.vue';
import ReviewsHome from '@/components/home_components/ReviewsHome.vue';
import VideoSection from '@/components/home_components/VideoSection.vue';
import News from '@/components/home_components/News.vue';
import Accordion from '@/components/UI/Accordion.vue';
import OfftenBuy from '@/components/home_components/OfftenBuy.vue';
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