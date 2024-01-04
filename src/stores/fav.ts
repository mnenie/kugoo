import type { ICards } from '@/types/cards.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFav = defineStore('fav', () => {
  const favIndex = ref<number>(JSON.parse(localStorage.getItem('favIndex') || '0'))
  const products = ref<ICards[]>(JSON.parse(localStorage.getItem('fav') ?? '[]') as ICards[])

  const addFavProducts = (product: ICards) => {
    favIndex.value ++
    products.value.push(product)
    localStorage.setItem('fav', JSON.stringify(products.value))
    localStorage.setItem('favIndex', JSON.stringify(favIndex.value))
  }

  return {
    products,
    favIndex,
    addFavProducts
  }
})
