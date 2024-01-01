<script setup lang="ts">
import type { IAccordion } from '@/types/accordion.interface';

const props = defineProps<{
  accordion: IAccordion[]
}>()

</script>

<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="item in accordion" :key="item.id">
      <div class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="item.target"
          :aria-expanded="item.expanded" :aria-controls="item.controls">
          <span class="size_6">{{ item.title }}</span>
        </button>
      </div>
      <div :id="item.controls" :class="[item.expanded === true ? 'show' : '']" class="accordion-collapse collapse"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <span class="size_7">{{ item.body }}</span>
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
    & span {
      font-style: normal;
      font-weight: 500;
      line-height: 121%;
      color: var(--black-color);
      max-width: 650px;
    }
  }

  .accordion-body {
    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>