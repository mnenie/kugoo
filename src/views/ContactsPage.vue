<script setup lang="ts">
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import BannerContacts from '@/components/elements/contacts/BannerContacts.vue';
import FilterContacts from '@/components/elements/contacts/FilterContacts.vue';
import { btnsFilterContacts } from '@/mocks/ui/btnsFilter';
import TopAddress from '@/components/elements/contacts/TopAddress.vue';
import ContactsBottomBlock from '@/components/elements/contacts/ContactsBottomBlock.vue';

const filterCards = (id: number) => {
  btnsFilterContacts.value.map((btn, i) => {
    btn.active = i === id
  })
}

</script>

<template>
  <div>
    <NavigationTopPage :title="'Контакты'" />
    <BannerContacts />
    <FilterContacts :btns="btnsFilterContacts" @filter-cards="filterCards" />
    <TopAddress :btns="btnsFilterContacts" />
    <ContactsBottomBlock />
  </div>
</template>

<style lang="scss" scoped></style>