<script setup lang="ts">
import EmptyBasket from '@/components/elements/basket/EmptyBasket.vue';
import NavBackLink from '@/components/UI/links/NavBackLink.vue';
import FillFav from '@/components/elements/fav/FillFav.vue';
import { useFav } from '@/stores/fav';

const fav = useFav()
</script>

<template>
  <div class="blocks">
    <NavBackLink />
    <div class="container">
      <h1 class="size_1">избранное</h1>
      <FillFav v-if="fav.products.length > 0" />
      <EmptyBasket v-else :empty-body="'Добавьте товары в избранное, чтобы просмотреть или купить их позже'"
        :empty-title="'В избранном пусто'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  flex-direction: column;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin: 30px 0 37px 0;
  }
}
@media screen and (max-width: 768px){
  .blocks{
    & h1{
      margin: 20px 0 37px 0;
    }
  }
}
</style>