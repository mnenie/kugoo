<script setup lang="ts">
import AboutBanner from '@/components/elements/about/AboutBanner.vue'
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import Advertisement from '@/components/elements/home/Advertisement.vue';
import CertificateAbout from '@/components/elements/about/CertificateAbout.vue';
import TeamAbout from '@/components/elements/about/TeamAbout.vue';
import ReviewsHome from '@/components/elements/home/ReviewsHome.vue';
import VideoSection from '@/components/elements/home/VideoSection.vue';
import News from '@/components/elements/home/News.vue';
import TestDriveBlock from '@/components/elements/about/TestDriveBlock.vue';
</script>

<template>
  <div>
    <NavigationTopPage :title="'О магазине'" />
    <AboutBanner />
    <CertificateAbout />
    <Advertisement />
    <TeamAbout />
    <TestDriveBlock />
    <ReviewsHome />
    <VideoSection />
    <News />
  </div>
</template>

<style lang="scss" scoped></style>