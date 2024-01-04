<script setup lang="ts">
import { CATALOG_ROUTE } from '@/utils/consts';
import { useRouter } from 'vue-router';

const props = defineProps<{
  emptyTitle: string,
  emptyBody: string,
}>()
const router = useRouter()
</script>

<template>
  <div class="empty_basket">
    <img src="/icons/basket/empty.svg" alt="">
    <h1 class="size_3">{{ emptyTitle }}</h1>
    <p class="size_7">{{ emptyBody }}</p>
    <ButtonCardPurple @click="router.push(CATALOG_ROUTE)">Перейти в каталог</ButtonCardPurple>
  </div>
</template>

<style lang="scss" scoped>
.empty_basket {
  border-radius: 10px;
  background: var(--btn-gray-color);
  width: 100%;
  padding: 45px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: var(--black-color);
    text-align: center;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
    margin-bottom: 25px;
    text-align: center;
  }
}
</style>