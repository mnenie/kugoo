<script setup lang="ts">
import MaxVersionBlockUl from './MaxVersionBlockUl.vue';
import MaxVersionDescription from './MaxVersionDescription.vue';
import MaxVersionBottom from './MaxVersionBottom.vue'
</script>

<template>
  <div class="max_version">
    <h2 class="size_3">Преимущества версии MAX</h2>
    <div class="blocks">
      <MaxVersionDescription />
      <MaxVersionBlockUl />
      <MaxVersionBottom />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.max_version {
  display: flex;
  flex-direction: column;

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 45px;
  }
}
@media screen and (max-width: 1020px){
  .max_version{
    & h2{
      text-align: center;
    }
  }
}
</style>