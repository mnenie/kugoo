<script setup lang="ts">
import ProductItem from '@/components/elements/product/ProductItem.vue'
import useGetScooterById from '../hooks/getProductScooter';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute()
const {product} = useGetScooterById(parseInt(route.params.id as string))
const changeImg = (img: string) => {
  if(product.value?.img){
    product.value.img = img
  }
}
watch(() => product.value?.img, (newImg) => {
  if (newImg && product.value?.img) {
    product.value.img = newImg;
  }
});
</script>

<template>
  <div>
    <ProductItem :card="product" @change-img="changeImg" />
  </div>
</template>

<style lang="scss" scoped></style>