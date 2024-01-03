<script setup lang="ts">
import ProductItem from '@/components/elements/product/ProductItem.vue'
import useGetProductById from '../hooks/useGetProductById';
import { useRoute } from 'vue-router';
import { watchEffect, computed } from 'vue';
import Alert from '@/components/UI/Alert.vue';
import BottomDescriptionProduct from '@/components/elements/product/BottomDescriptionProduct.vue';
import PreloaderLarge from '@/components/UI/preloader/PreloaderLarge.vue';

const route = useRoute()
const {product, getProductById, loader} = useGetProductById(parseInt(route.params.id as string))
const changeImg = (img: string) => {
  if(product.value?.img){
    product.value.img = img
  }
}
watchEffect(async () => {
  const productId = parseInt(route.params.id as string)
  if(product.value?.id !== productId){
    await getProductById(productId)
  }
})

const active = computed(() => {
  return product.value?.imgsMore?.includes(product.value?.img) || false;
});
</script>

<template>
  <PreloaderLarge v-if="loader" />
  <div v-else>
    <ProductItem :card="product" @change-img="changeImg" :active="active" />
    <BottomDescriptionProduct :card="product" />
    <Alert />
  </div>
</template>

<style lang="scss" scoped></style>