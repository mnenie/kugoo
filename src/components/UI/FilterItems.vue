<script setup lang="ts">
import type { IBtns } from '@/types/ui.interface';

defineProps<{
  btnsFilter: IBtns[]
}>()
const emits = defineEmits<{
  (e: 'filterCards', index: number): void
}>()
</script>

<template>
  <div class="btn_section">
    <btn-gray @click="$emit('filterCards', index)" v-for="(btn, index) in btnsFilter" :key="btn.id"
      :class="[btn.active === true ? 'active_item' : '']">
      {{ btn.body }}
    </btn-gray>
  </div>
</template>

<style lang="scss" scoped>
.btn_section {
  display: flex;
  gap: 10px;
  align-items: center;
}

.active_item {
  transition: 0.15s ease;
  border: 1.3px solid var(--purple-color);
  color: var(--purple-color);
  background: var(--white-color);
}

@media screen and (max-width: 600px) {
  .btn_section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>