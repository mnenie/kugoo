<script setup lang="ts">
defineProps<{
  style: string[]
}>()
</script>

<template>
  <div :style="style" class="news catalog_2">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.news {
  border-radius: 5px;
  padding: 4px 11px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--white-color);
  margin-bottom: 27px;
}

@media screen and (max-width: 600px) {
  .news {
    margin-bottom: 20px;
  }
}
</style>