<script setup lang="ts">
import NavigationTopPage from '@/components/layout/NavigationTopPage.vue';
import MainBanner from '@/components/elements/testdrive/MainBanner.vue';
import RightList from '@/components/elements/testdrive/RightList.vue';
import LeftList from '@/components/elements/testdrive/LeftList.vue';
import { ref } from 'vue';
const title = ref<string>('Тест-драйв')
</script>

<template>
  <div>
    <NavigationTopPage :title="title" />
    <MainBanner />
    <RightList />
    <LeftList />
  </div>
</template>

<style lang="scss" scoped></style>