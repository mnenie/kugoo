<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import type { IProperty } from '@/types/property.interface';
import { ref, watchEffect } from 'vue';
const props = defineProps<{
  card: ICards | null
}>()
const items = ref<IProperty[]>([])
watchEffect(() => {
  if (props.card) {
    items.value = [
      { id: 1, title: 'Масса нетто', body: props.card?.weight! },
      { id: 2, title: 'Размер колес ', body: props.card?.wheels! },
      { id: 3, title: 'Мощность', body: props.card?.power! },
      { id: 4, title: 'Подсветка ', body: props.card?.lighting! },
      { id: 5, title: 'Аккумулятор', body: props.card?.accum! },
      { id: 6, title: 'Привод', body: props.card?.actuator! },
      { id: 7, title: 'Максимальная скорость', body: props.card?.speed! },
      { id: 8, title: 'Тормозная система', body: props.card?.brake! },
      { id: 9, title: 'Максимальный пробег', body: props.card?.mileage! },
      { id: 10, title: 'Комплектация', body: props.card?.equipment! },
      { id: 11, title: 'Максимальная нагрузка ', body: props.card?.load! },
      { id: 12, title: 'Гарантия ', body: props.card?.guarantees! }
    ]
  }
})
</script>

<template>
  <div class="property">
    <div v-for="item in items" :key="item.id" class="block">
      <p class="size_6">{{ item.title }}</p>
      <span class="size_6">{{ props.card ? item.body : '' }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.property {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 30px;

  .block {
    max-width: 475px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-200-color);
    margin-bottom: 20px;

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }
  }
}

@media screen and (max-width: 1020px) {
  .property {
    .block {
      max-width: 100%;
    }
  }
}
</style>