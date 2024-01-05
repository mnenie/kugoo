<script setup lang="ts">
import CategoriesElement from '@/components/elements/home/CategoriesElement.vue';
import useTechnic from '@/hooks/useTechnic';
import { useRouter } from 'vue-router';
import { CATALOG_BIKES_ROUTE, CATALOG_SCOOTERS_ROUTE } from '@/utils/consts';
import { CATALOG_GYRO_ROUTE, CATALOG_MOPED_ROUTE } from '@/utils/consts';
import Preloader from '@/components/UI/preloader/Preloader.vue';

const { home1, loader } = useTechnic()
const router = useRouter()

const pushToCatalog = (categoryId: number) => {
  home1.value.map((item) => {
    if (item.id === categoryId) {
      if(item.id === 1 || item.id === 7) router.push(CATALOG_SCOOTERS_ROUTE)
      if(item.id === 2 || item.id === 5) router.push(CATALOG_BIKES_ROUTE)
      if(item.id === 3 || item.id === 8) router.push(CATALOG_GYRO_ROUTE)
      if(item.id === 4 || item.id === 6) router.push(CATALOG_MOPED_ROUTE)
    }
  })
};
</script>

<template>
  <div class="catalog">
    <div class="container">
      <div class="categories">
        <Preloader :style="'height: 250px'" :len="8" v-if="loader" />
        <CategoriesElement v-else @push-to-catalog="pushToCatalog" :categories="home1" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  margin-bottom: 100px;

  .categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}

@media screen and (max-width: 1200px) {
  .catalog {
    .categories {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
}

@media screen and (max-width: 992px) {
  .catalog {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 820px) {
  .catalog {
    .categories {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .catalog {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 540px) {
  .catalog {

    .categories {
      gap: 15px;
    }
  }
}
</style>