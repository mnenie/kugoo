<script setup lang="ts">
import MarketHeader from './MarketHeader.vue';
import FormHeaderMobile from './FormHeaderMobile.vue';
import OffcanvasMobile from '@/components/UI/OffcanvasMobile.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const scrollY = ref(window.scrollY);
const offset = ref(60);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="mobile_new">
    <div class="header_mobile">
      <MarketHeader />
      <div class="container">
        <div :class="{'logo': true, 'fixed': scrollY > offset}">
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
  transition: padding 0.2s ease;

  .navi {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: var(--white-color);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 10px 40px #41464c12;
  padding: 18px 15px;
}
</style>