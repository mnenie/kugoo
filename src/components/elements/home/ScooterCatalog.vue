<script setup lang="ts">
import ScooterFilterHome from './ScooterFilterHome.vue';
import ScootersCards from './ScootersCards.vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { CATALOG_ROUTE } from '@/utils/consts'
import useScooters from '@/hooks/useScooters';
import useFilteredScooters from '@/hooks/useFilteredScooters';

const { cards, cards2, originalCards, originalCards2} = useScooters()
const {usl, sortValue, filterCards, btnsFilter} = useFilteredScooters(cards, cards2, originalCards, originalCards2)
const style = computed(() => {
  const uslValue = usl.value;
  const sort = sortValue.value ? '0px' : '50px';
  const marginBottom = screenWidth.value <= 540 ? (uslValue ? '30px' : '0px') : sort;
  return `margin-bottom: ${marginBottom}`;
});

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const router = useRouter()

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="catalog_display">
    <ScooterFilterHome @filter-cards="filterCards" :btns-filter="btnsFilter" />
    <ScootersCards :style="style" :cards="cards" />
    <ButtonMore v-if="usl" @click="router.push(CATALOG_ROUTE)"
      style="border: 1.3px solid var(--purple-color); margin: 0 auto; display: block;">Смотреть все</ButtonMore>
  </div>
</template>

<style lang="scss" scoped>
.catalog_display {
  padding-bottom: 110px;
}

@media screen and (max-width: 1200px) {
  .catalog_display {
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 600px) {
  .catalog_display {
    padding-bottom: 60px;
  }
}
</style>