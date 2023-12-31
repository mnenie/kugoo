<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import BannerBlogs from '@/components/elements/blogs/BannerBlogs.vue';
import NewsBlog from '@/components/elements/blogs/NewsBlog.vue';
</script>

<template>
  <div>
    <NavigationTopPage :title="'Блог'" />
    <BannerBlogs />
    <div class="container">
      <NewsBlog />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>