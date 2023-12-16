<script setup lang="ts">
import ProductItem from '@/components/elements/product/ProductItem.vue'
import useGetScooterById from '../hooks/getProductScooter';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';
import Alert from '@/components/UI/Alert.vue';

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
</script>

<template>
  <div>
    <ProductItem :card="product" @change-img="changeImg" />
    <Alert />
  </div>
</template>

<style lang="scss" scoped></style>