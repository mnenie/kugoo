<script setup lang="ts">
import TeamBlock from './TeamBlock.vue';
import TeamMembers from './TeamMembers.vue';
</script>

<template>
  <div class="team">
    <div class="container">
      <div class="content">
        <h1 class="size_1">Команда сервисного центра</h1>
        <TeamBlock />
      </div>
    </div>
    <div class="container_lg">
      <TeamMembers />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team {
  overflow: hidden;
  margin-bottom: 100px;

  .content {
    & h1 {
      text-align: center;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 50px;
    }
  }
}
</style>