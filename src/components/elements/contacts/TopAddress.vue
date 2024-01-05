<script setup lang="ts">
import AddressesContacts from './moscow/AddressesContacts.vue';
import MapContacts from './MapContacts.vue';
import AddressContactsRegions from './regions/AddressContactsRegions.vue';
import AddressCdek from './cdek/AddressCdek.vue';
import type { IBtns } from '@/types/ui.interface';

const props = defineProps<{
  btns: IBtns[]
}>()
</script>

<template>
  <div class="container">
    <div class="top_address">
      <AddressesContacts v-if="btns[0].active" />
      <AddressContactsRegions :filters="btns" v-if="btns[1].active || btns[2].active || btns[3].active" />
      <AddressCdek v-if="btns[4].active" />
      <MapContacts :btns="btns" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top_address {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 100px;
}
@media screen and (max-width: 992px){
  .top_address{
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 890px){
  .top_address{
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }
}
@media screen and (max-width: 600px){
  .top_address{
    margin-bottom: 60px;
  }
}
</style>