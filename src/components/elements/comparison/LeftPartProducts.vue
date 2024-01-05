<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const filters = ref([
  { id: 1, name: 'Доступность' },
  { id: 2, name: 'Вес' },
  { id: 3, name: 'Мощность' },
  { id: 4, name: 'Ёмкость аккумулятора' },
  { id: 5, name: 'Время полной зарядки' },
  { id: 6, name: 'Максимальная скорость' },
  { id: 7, name: 'Максимальный пробег' },
  { id: 8, name: 'Максимальная нагрузка' },
  { id: 10, name: 'Подсветка' },
  { id: 11, name: 'Привод' },
  { id: 12, name: 'Тормозная система' },
  { id: 13, name: 'Комплектация' },
  { id: 14, name: 'Гарантия' },
  { id: 15, name: 'Сумма скидки' },
])

const screenWidth = ref(window.innerWidth);
const isScreenSmall = ref(screenWidth.value < 990);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  isScreenSmall.value = screenWidth.value < 990;
};

onMounted(() => {
  window.addEventListener("resize", handleResize)
})
onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<template>
  <div v-if="!isScreenSmall" class="left_part">
    <p class="size_6 main_p">Параметры</p>
    <div class="filters">
      <div v-for="filter in filters" :key="filter.id" class="filter">
        <p class="size_7">{{ filter.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left_part {
  max-width: 285px;
  min-width: 285px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .main_p {
    padding-bottom: 188.5px;
    border-bottom: 1px solid var(--gray-200-color);
    margin-bottom: 20px;
  }

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
  }

  .filters {
    display: flex;
    flex-direction: column;

    .filter {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--gray-200-color);

    }
  }
}

@media screen and (max-width: 1200px){
  .left_part{
    .main_p{
      padding-bottom: 187.5px;
    }
  }
}
</style>