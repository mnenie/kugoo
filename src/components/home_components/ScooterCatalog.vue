<script setup lang="ts">
import ScooterFilterHome from './ScooterFilterHome.vue';
import ScootersCards from './ScootersCards.vue';
import { btnsFilter } from '@/mocks/ui/btnsFilter';
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { CATALOG_ROUTE } from '@/utils/consts'
import useScooters from '@/hooks/useScooters';


const {cards, cards2, originalCards, originalCards2} = useScooters()
const usl = ref<boolean>(true)
const sortValue = ref<boolean>(false)
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

const filterCards = computed(() => {
  return (index: number) => {
    btnsFilter.value.forEach((btn, i) => {
      btn.active = i === index;
    });
    switch (index) {
      case 0:
        cards.value = [...originalCards.value];
        cards2.value = [...originalCards2.value];
        usl.value = true;
        sortValue.value = false;
        break;
      case 1:
        cards.value = originalCards.value.filter(item => item.rec === 'ХИТ');
        cards2.value = originalCards2.value.filter(item => item.rec === 'ХИТ');
        if (cards2.value) {
          sortValue.value = true
          usl.value = false;
          cards.value.push(...cards2.value);
        }
        break;
      case 2:
        cards.value = originalCards.value.filter(item => item.speed <= '45 км/ч');
        cards2.value = originalCards2.value.filter(item => item.speed <= '45 км/ч');
        if (cards2.value) {
          sortValue.value = true
          usl.value = false;
          cards.value.push(...cards2.value);
        }
        break;
      case 3:
        cards.value = originalCards.value.filter(item => item.power >= 800);
        cards2.value = originalCards2.value.filter(item => item.power >= 800);
        if (cards2.value) {
          sortValue.value = true
          usl.value = false;
          cards.value.push(...cards2.value);
        }
        break;
      case 4:
        cards.value = originalCards.value.filter(item => item.power < 800);
        cards2.value = originalCards2.value.filter(item => item.power < 800);
        if (cards2.value) {
          sortValue.value = true
          usl.value = false;
          cards.value.push(...cards2.value);
        }
        break;
    }
  };
});

const router = useRouter()

onUnmounted(() => {
  cards.value.splice(0, cards.value.length, ...originalCards.value);
})
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
    <btn-large-white v-if="usl" @click="router.push(CATALOG_ROUTE)"
      style="border: 1.3px solid var(--purple-color); margin: 0 auto; display: block;">Смотреть все</btn-large-white>
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