<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import NavBackLink from '@/components/UI/links/NavBackLink.vue';

const id = ref<string>('');
const route = useRoute();

id.value = route.params.id as string;

const getName = computed(() => {
  const componentName = `ThanksComponent${id.value}`;
  const component = defineAsyncComponent(() => import(`@/components/elements/thanks/${componentName}.vue`));
  return component;
});
</script>

<template>
  <div class="thanks_blocks">
    <NavBackLink />
    <component :is="getName" />
  </div>
</template>

<style lang="scss" scoped>
.thanks_blocks{
  margin-bottom: 90px;
}
</style>
