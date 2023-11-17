<script setup lang="ts">
import MarketHeader from './MarketHeader.vue';
import FormHeaderMobile from './FormHeaderMobile.vue';
import OffcanvasMobile from '@/components/UI/OffcanvasMobile.vue';
import { useBurger } from '@/stores/burger';
const burger = useBurger()

</script>

<template>
  <div class="mobile_new">
    <div class="header_mobile">
      <MarketHeader />
      <div class="container">
        <div class="logo">
          <img src="/icons/Kugoo.svg" alt="">
          <div class="navi">
            <a style="text-decoration: none; height: 16px;" href="tel: +78005055461"><img src="/icons/call.svg"
                alt=""></a>
            <img data-bs-toggle="offcanvas" data-bs-target="#burger" aria-controls="burger"
              src="/icons/burgermob.svg" alt="">
          </div>
        </div>
        <FormHeaderMobile />
      </div>
    </div>
    <OffcanvasMobile />
  </div>
</template>

<style lang="scss" scoped>
.mobile_new{
  position: relative;
}
.header_mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 20px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;

  .navi {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>