<script setup lang="ts">
import BlockAddition from './BlockAddition.vue';
import BlockOpt from './BlockOpt.vue'
import BlockMarketing from './BlockMarketing.vue'
import BlockWrite from './BlockWrite.vue'
</script>

<template>
  <div class="conatiner_lg">
    <div class="bottom_contacts">
      <div class="container">
        <div class="blocks">
          <BlockAddition />
          <BlockOpt />
          <BlockMarketing />
          <BlockWrite />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom_contacts {
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 44px 0;
  margin-bottom: 80px;
  .blocks{
    display: grid;
    align-items: flex-start;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 768px){
  .bottom_contacts{
    .blocks{
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
}
@media screen and (max-width: 600px){
  .bottom_contacts{
    margin-bottom: 60px;
  }
}
</style>