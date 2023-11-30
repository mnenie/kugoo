<script setup lang="ts">
interface INavigationTop {
  title: string
}
defineProps<INavigationTop>()
</script>

<template>
  <div class="navigation">
    <div class="container">
      <div class="block">
        <router-link to="/" class="home">
          <img src="/icons/navigationtop/home.svg" alt="">
          <span class="size_8">Главная</span>
        </router-link>
        <span class="size_8 line">/</span>
        <span class="size_8 title">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  margin: 20px 0;

  .block {
    display: flex;
    align-items: center;
    gap: 3px;

    .home {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      text-decoration: none;

      & img {
        width: 15px;
        height: 15px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
      }
    }

    .line {
      color: var(--gray-600-color);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .title {
      color: var(--black-color);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 540px){
  .navigation{
    margin: 0 0 20px 0;
  }
}
</style>