<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import BannerBlog from '@/components/elements/blog/BannerBlog.vue';
import NewsBlog from '@/components/elements/blog/NewsBlog.vue';
</script>

<template>
  <div>
    <NavigationTopPage :title="'Блог'" />
    <BannerBlog />
    <div class="container">
      <NewsBlog />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>