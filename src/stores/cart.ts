import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCart = defineStore('cart', () => {
  const cartIndex = ref<number>(JSON.parse(localStorage.getItem('cartIndex') || '0'))
  const flag = ref<boolean>(JSON.parse(localStorage.getItem('flagCart') || 'false'))
  const flBasket = ref<boolean>(false)
  const alertItem = ref<boolean>(false)

  const addIndex = () => {
    alertItem.value = true
    flag.value = true
    cartIndex.value += 1
    localStorage.setItem('cartIndex', JSON.stringify(cartIndex.value))
    localStorage.setItem('flagCart', JSON.stringify(flag.value))

    setTimeout(()=> {
      alertItem.value = false
    }, 3000)
  }

  return {
    flag,
    cartIndex,
    flBasket,
    alertItem,
    addIndex
  }
})
