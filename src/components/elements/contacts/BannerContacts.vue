<script setup lang="ts">

</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <h1 class="size_1">Контакты и адреса</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  padding: 75px 0;
  border-radius: 10px;
  background: linear-gradient(88deg, #6F73EE 24.95%, rgba(111, 115, 238, 0.00) 59.45%);

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url('/img/contacts/banner.png') no-repeat top right;
    z-index: -1;
    background-size: contain;
  }

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--white-color);
  }
}
@media screen and (max-width: 1200px){
  .banner{
    &::after{
      background-size: cover;
    }
  }
}
@media screen and (max-width: 920px){
  .banner{
    &::after{
      right: -220px;
    }
  }
}
</style>