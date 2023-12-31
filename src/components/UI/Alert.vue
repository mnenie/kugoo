<script setup lang="ts">
import { useCart } from '@/stores/cart';
const alert = useCart()
</script>
    
<template>
  <transition name="slide-fade">
    <div v-if="alert.alertItem" class="alert_item">
      <div class="block_alert_item">
        <img src="/icons/checkmark.svg" alt="">
        <span>Товар успешно добавлен в корзину !</span>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.15s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,


.slide-fade-leave-to {
  transform: translateY(-80px);
  opacity: 0;
}
.alert_item {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background: rgba($color: #000000, $alpha: 0.8);
  border-radius: 5px;
}

.block_alert_item {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  gap: 10px;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
}
</style>@/store/cart