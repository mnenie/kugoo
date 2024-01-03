<script setup lang="ts">
import type { IBtns } from '@/types/ui.interface';
const props = defineProps<{
  filters: IBtns[]
}>()
</script>

<template>
  <div class="courier">
    <span class="size_6">Курьером</span>
    <div class="two">
      <span class="size_6">В течение дня при заказе до 11:00</span>
      <span v-if="filters[1].active || filters[2].active" class="size_6">При заказе дополнительных услуг (гидроизоляция,
        настройка) время может быть увеличено.</span>
    </div>
    <div class="three">
      <span class="size_6">Бесплатная доставка</span>
      <div class="banner">
        <img src="/icons/delivery/fire.png" alt="">
        <span class="size_8">Акция до 15.09</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courier {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(93, 108, 123, 0.2);
  align-items: flex-start;
  margin-bottom: 36px;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }

  .two {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & span {
      &:last-child {
        max-width: 316px;
      }
    }
  }

  .three {
    display: flex;
    align-items: center;
    gap: 15px;

    .banner {
      display: flex;
      align-items: center;
      gap: 5px;
      border-radius: 5px;
      background: var(--orange-color);
      width: 119px;
      height: 23px;
      justify-content: center;

      & img {
        width: 15px;
        height: 15px;
      }

      & span {
        color: var(--white-color);
        font-weight: 500;
      }
    }
  }
}

@media screen and (max-width: 830px) {
  .courier {
    .two {
      & span {
        &:last-child {
          max-width: 280px;
        }
      }
    }

    .three {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}

@media screen and (max-width: 650px) {
  .courier {
    .two {
      & span {
        &:first-child{
          max-width: 150px;
        }
        &:last-child {
          max-width: 167px;
        }
      }
    }
  }
}</style>