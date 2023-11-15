<script setup lang="ts">
import type { IAccordion } from '@/types/accordion.interface';

defineProps<{
  accordion: IAccordion[]
}>()

</script>

<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="item in accordion" :key="item.id">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="item.target"
          :aria-expanded="item.expanded" :aria-controls="item.controls">
          {{ item.title }}
        </button>
      </h2>
      <div :id="item.controls" :class="[item.expanded===true ? 'show' : '']" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {{ item.body }}
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.accordion {
  max-width: 730px;
  width: 100%;

  .accordion-header {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 121%;
    color: var(--black-color);
  }
}
</style>