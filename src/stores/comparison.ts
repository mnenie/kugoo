import type { ICards } from '@/types/cards.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useComparison = defineStore('comparison', () => {
  const products = ref<ICards[]>(JSON.parse(localStorage.getItem('comparison') ?? '[]') as ICards[])
  const style = ref<boolean>(false)
  const indexComparison = ref<number>(JSON.parse(localStorage.getItem('indexComparison') || '0'))

  const addComparisonProduct = (product: ICards) => {
    if (products.value.findIndex((p) => p.id === product.id) === -1) {
      products.value.push(product)
      indexComparison.value ++
    }
    localStorage.setItem('comparison', JSON.stringify(products.value))
    localStorage.setItem('indexComparison', JSON.stringify(indexComparison.value))
  }

  const removeAllComparisonProducts = () => {
    products.value = []
    localStorage.removeItem('comparison')
    indexComparison.value = 0
    localStorage.removeItem('indexComparison')
  }

  const comparisonProducts = (): boolean[] => {
    if (products.value.length < 2) {
      return []
    }

    const categories: Array<keyof ICards> = ['basket','weight','power','accum','time','speed','mileage',
    'load','lighting','actuator','brake','equipment','guarantees','sale','price']

    const styleCategories: boolean[] = []

    categories.forEach((category) => {
      if (category === 'sale') {
        styleCategories.push(true)
        return
      }
      const values = products.value.map((product) => product[category])
      const allValuesAreEqual = values.every((value) => value === values[0])

      styleCategories.push(allValuesAreEqual)
    })

    return styleCategories
  }

  return {
    addComparisonProduct,
    removeAllComparisonProducts,
    products,
    comparisonProducts,
    style, 
    indexComparison
  }
})
