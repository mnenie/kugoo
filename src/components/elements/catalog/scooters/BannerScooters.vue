<script setup lang="ts">
const props = defineProps<{
  bannerTitle: string
}>()
</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <h1 class="size_1">{{ bannerTitle }} Kugoo Kirin</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background: linear-gradient(88deg, #6F73EE 30.95%, rgba(111, 115, 238, 0.00) 59.45%);
  padding: 75px 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  &::after{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('/img/catalog/banner1.png') no-repeat top right;
    background-size: contain;
    z-index: -1;
  }

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--white-color);
  }
}

@media screen and (max-width: 1240px){
  .banner{
    &::after{
      right: -150px;
    }
  }
}
@media screen and (max-width: 890px){
  .banner{
    &::after{
      right: -300px;
    }
  }
}
@media screen and (max-width: 768px){
  .banner{
    padding: 60px 0;
    &::after{
      right: -200px;
    }
  }
}
@media screen and (max-width: 650px){
  .banner{
    &::after{
      right: -300px;
    }
  }
}
@media screen and (max-width: 540px){
  .banner{
    &::after{
      right: -100px;
    }
  }
}
@media screen and (max-width: 420px){
  .banner{
    &::after{
      right: -280px;
    }
  }
}
</style>