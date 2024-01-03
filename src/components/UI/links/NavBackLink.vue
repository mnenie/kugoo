<script setup lang="ts">

</script>

<template>
  <div class="container">
    <router-link :to="$route.name === 'payment' ? '/basket' : '/'" class="navback">
      <img src="/icons/links/arrow.svg" alt="">
      <span class="size_8">{{ $route.name === 'payment' ? 'Вернуться к корзине' : 'Вернуться на главную' }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navback {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
  text-decoration: none;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
  }
}
@media screen and (max-width: 540px){
  .navback{
    margin: 0 0 20px 0;
  }
}
</style>