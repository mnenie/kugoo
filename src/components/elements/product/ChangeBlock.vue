<script setup lang="ts">
import type { IDescription } from '@/types/description.interface';
const props = defineProps<{
  item: IDescription
}>()
const emit = defineEmits<{
  (e: 'changeCard'): void
}>()
</script>

<template>
  <div class="block_default">
    <div class="text_content">
      <span style="margin-bottom: 8px; color: var(--gray-600-color);" class="size_7">{{ item.title }}</span>
      <p class="size_4">{{ item.body }}</p>
      <div v-if="item.add || item.price" class="add_block">
        <span style="font-weight: 400;" v-if="item.add">{{ item.add }}</span>
        <p v-if="item.price" style="font-weight: 500; margin-top: 8px;">{{ item.price }}</p>
      </div>
    </div>
    <a class="size_7" @click.prevent="emit('changeCard')" href="#">{{ item.link }}</a>
  </div>
</template>

<style lang="scss" scoped>
.block_default {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-200-color);

  .text_content {
    display: flex;
    flex-direction: column;

    .add_block {
      & span {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--black-color);
    }
  }

  & a {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--purple-color);
  }
}
</style>