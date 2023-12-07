<script setup lang="ts">
import CategoriesElement from '@/components/elements/home/CategoriesElement.vue';
import useTechnic from '@/hooks/useTechnic';
const { home1 } = useTechnic()
</script>

<template>
  <div class="catalog">
    <div class="container">
      <div class="categories">
        <CategoriesElement :categories="home1" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  margin-bottom: 100px;
  .categories{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}
@media screen and (max-width: 1200px) {
  .catalog{
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
  .catalog{

    .categories {
      gap: 15px;
    }
  }
}
</style>