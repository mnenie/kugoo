<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open') : void
}>()
</script>

<template>
  <div class="immediate">
    <span class="size_6">Срочная доставка</span>
    <div class="two">
      <span class="size_6">За 2-4 часа в день заказа. Заказы на срочную доставку принимаются до 17:00, в пятницу — до
        13:00.</span>
      <span class="size_6">При заказе дополнительных услуг (гидроизоляция, настройка) время может быть увеличено.</span>
    </div>
    <div class="three">
      <span class="size_6">Стоимость срочной доставки<span style="cursor: pointer;" @click="emit('open')" class="purple"> уточняйте у менеджера</span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.immediate {
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
      max-width: 301px;
    }
  }

  .three {
    max-width: 212px;
    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .purple{
      color: var(--purple-color);
    }
  }
}

@media screen and (max-width: 970px){
  .immediate{
    .two{
      & span{
        max-width: 250px;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .immediate{
    .two{
      & span{
        max-width: 179px;
      }
    }
  }
}
</style>