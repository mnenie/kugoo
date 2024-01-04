<script setup lang="ts">
import { useFav } from '@/stores/fav';

const fav = useFav()
</script>

<template>
  <div class="round_fav" v-if="fav.products.length > 0">
    <span>{{ fav.favIndex }}</span>
  </div>
</template>

<style lang="scss" scoped>
.round_fav {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: var(--pink-color);
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
}

@media screen and (max-width: 768px) {
  .round_cart{
    & span {
      font-size: 8px;
    }
  }
}
</style>