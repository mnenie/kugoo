<script setup lang="ts">
import CategoriesElement from '@/components/elements/home/CategoriesElement.vue';
import useTechnic from '@/hooks/useTechnic';
import { useRouter } from 'vue-router';
import { CATALOG_SCOOTERS_ROUTE } from '@/utils/consts';
const { home1 } = useTechnic()

const router = useRouter()

const pushToCatalog = () => {
  home1.value.map(item => {
    if (item.id === 1) {
      router.push(CATALOG_SCOOTERS_ROUTE)
    }
  })
}
</script>

<template>
  <div class="catalog">
    <div class="container">
      <div class="categories">
        <CategoriesElement @push-to-catalog="pushToCatalog" :categories="home1" />
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

@media screen and (max-width: 820px) {
  .catalog {
    .categories {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .catalog {
    margin-bottom: 80px;
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