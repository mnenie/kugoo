<script setup lang="ts">
import ProductItem from '@/components/elements/product/ProductItem.vue'
import useGetScooterById from '../hooks/getProductScooter';
import { useRoute } from 'vue-router';
import { watchEffect, computed, ref } from 'vue';
import Alert from '@/components/UI/Alert.vue';
import BottomDescriptionProduct from '@/components/elements/product/BottomDescriptionProduct.vue';

const route = useRoute()
const {product, getScooterById} = useGetScooterById(parseInt(route.params.id as string))
const changeImg = (img: string) => {
  if(product.value?.img){
    product.value.img = img
  }
}
watchEffect(async () => {
  const productId = parseInt(route.params.id as string)
  if(product.value?.id !== productId){
    await getScooterById(productId)
  }
})

const active = computed(() => {
  return product.value?.imgsMore?.includes(product.value?.img) || false;
});
</script>

<template>
  <div>
    <ProductItem :card="product" @change-img="changeImg" :active="active" />
    <BottomDescriptionProduct :card="product" />
    <Alert />
  </div>
</template>

<style lang="scss" scoped></style>