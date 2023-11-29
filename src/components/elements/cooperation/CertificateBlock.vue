<script setup lang="ts">
import TextCertificate from './TextCertificate.vue';
</script>

<template>
  <div class="certificate">
    <div class="container">
      <div class="block">
        <TextCertificate />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.certificate{
  margin-bottom: 50px;
}
@media screen and (max-width: 600px){
  .certificate{
    margin-bottom: 40px;
  }
}
</style>