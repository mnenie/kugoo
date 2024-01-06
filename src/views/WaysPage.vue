<script setup lang="ts">
import NavBackLink from '@/components/UI/links/NavBackLink.vue';
import PayBlockTotal from '@/components/elements/basket/PayBlockTotal.vue';
import AlertErrorWays from '@/components/elements/ways/AlertErrorWays.vue';
import HeadWays from '@/components/elements/ways/HeadWays.vue';
import WaysBlock from '@/components/elements/ways/WaysBlock.vue'

</script>

<template>
  <div class="ways_page">
    <NavBackLink />
    <HeadWays />
    <div class="container">
      <div class="blocks">
        <WaysBlock />
        <PayBlockTotal :btn-name="'Подтвердить заказ'" />
      </div>
    </div>
  </div>
  <AlertErrorWays />
</template>

<style lang="scss" scoped>
.ways_page{
  margin-bottom: 100px;
}
.blocks {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

@media screen and (max-width: 1100px) {
  .blocks {
    flex-direction: column;
    width: 100%;
    gap: 50px;
  }
}
</style>