<script setup lang="ts">
import { useRoute } from 'vue-router';
import useGetBlog from '../hooks/useGetBlog';
import { watchEffect, computed, defineAsyncComponent, ref } from 'vue';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import BlogBanner from '@/components/elements/blog/BlogBanner.vue';
import BlogMore from '@/components/elements/blog/BlogMore.vue';

const route = useRoute()
const { blog, getBlogById } = useGetBlog(parseInt(route.params.id as string))

const idItem = parseInt(route.params.id as string)

watchEffect(async () => {
  if (blog.value?.id === idItem) {
    await getBlogById(parseInt(route.params.id as string))
  }
})

const getBlogName = computed(() => {
  const componentName = `BlogDescription${route.params.id as string}`;
  const component = defineAsyncComponent(() => import(`@/components/elements/blog/description/${componentName}.vue`));
  return component;
})
</script>

<template>
  <div>
    <NavigationTopPage :title="'Блог'" :title2="blog?.title ? blog?.title : 'Нет информации о блоге'" />
    <div v-if="blog" class="elems">
      <BlogBanner :blog="blog" />
      <component :is="getBlogName" />
      <BlogMore />
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin: 50px 0;" v-else>
      <span style="color: var(--pink-color); text-align: center;" class="size_6">Нет информации о блоге</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>