<script setup lang="ts">
import type { IBtns } from '@/types/ui.interface';

const props = defineProps<{
  btnsFilter: IBtns[]
}>()
const emit = defineEmits<{
  (e: 'filterCards', index: number): void
}>()
</script>

<template>
  <div class="btn_section">
    <ButtonGray class="btn" @click="emit('filterCards', index)" v-for="(btn, index) in btnsFilter" :key="btn.id"
      :class="[btn.active === true ? 'active_item' : '']">
      {{ btn.body }}
    </ButtonGray>
  </div>
</template>

<style lang="scss" scoped>
.btn_section {
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.active_item {
  transition: 0.15s ease;
  border: 1.3px solid var(--purple-color);
  color: var(--purple-color);
  background: var(--white-color);
}


@media screen and (max-width: 600px) {
  .btn_section {

    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>