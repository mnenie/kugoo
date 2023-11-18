<script setup lang="ts">
import LeftDiagnostic from './LeftDiagnostic.vue';
import RightDiagnostic from './RightDiagnostic.vue';
import VideoDiagnostic from './VideoDiagnostic.vue';
</script>

<template>
  <div class="diagnostic_display">
    <div class="container">
      <h1 class="size_1">Проведем диагностику
        и отремонтируем любую неисправность
      </h1>
      <div class="blocks_diagnostic">
        <LeftDiagnostic />
        <VideoDiagnostic />
        <RightDiagnostic />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.diagnostic_display {
  margin-bottom: 98px;
  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
    color: var(--black-color);
    max-width: 825px;
    display: block;
    margin: 0 auto 66px auto;
  }
  .blocks_diagnostic{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1200px){
  .diagnostic_display{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 1056px){
  .diagnostic_display{
    .blocks_diagnostic{
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
}
@media screen and (max-width: 600px){
  .diagnostic_display{
    .blocks_diagnostic{
      gap: 20px;
    }
  }
}
</style>