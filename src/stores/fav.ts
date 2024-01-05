import type { ICards } from '@/types/cards.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFav = defineStore('fav', () => {
  const favIndex = ref<number>(JSON.parse(localStorage.getItem('favIndex') || '0'))
  const products = ref<ICards[]>(JSON.parse(localStorage.getItem('fav') ?? '[]') as ICards[])

  const addFavProducts = (product: ICards) => {
    if (products.value.findIndex(p => p.id === product.id) === -1) {
      products.value.push(product);
      favIndex.value++;
    }
    localStorage.setItem('fav', JSON.stringify(products.value))
    localStorage.setItem('favIndex', JSON.stringify(favIndex.value))
  }

  const removeProductById = (productId: number) => {
    products.value = products.value.filter((product) => product.id !== productId)
    favIndex.value --
    localStorage.setItem('fav', JSON.stringify(products.value))
    localStorage.setItem('favIndex', JSON.stringify(favIndex.value))

    if(products.value.length === 0){
      products.value = [] 
      favIndex.value = 0
      localStorage.removeItem('favIndex')
      localStorage.removeItem('fav')
    }
  }

  return {
    products,
    favIndex,
    addFavProducts,
    removeProductById
  }
})
