import type { ICards } from '@/types/cards.interface'
import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
export const useCart = defineStore('cart', () => {
  const products = ref<ICards[]>(JSON.parse(localStorage.getItem('products') ?? '[]') as ICards[])
  const cartIndex = ref<number>(JSON.parse(localStorage.getItem('cartIndex') || '0'))
  const flag = ref<boolean>(JSON.parse(localStorage.getItem('flagCart') || 'false'))
  const flBasket = ref<boolean>(false)
  const alertItem = ref<boolean>(false)
  const productCounts = ref<{ [productId: number]: number }>({})

  const addIndex = () => {
    alertItem.value = true
    flag.value = true
    cartIndex.value += 1
    localStorage.setItem('cartIndex', JSON.stringify(cartIndex.value))
    localStorage.setItem('flagCart', JSON.stringify(flag.value))

    setTimeout(() => {
      alertItem.value = false
    }, 3000)
  }

  const updateProductCounts = () => {
    localStorage.setItem('productCounts', JSON.stringify(productCounts.value))
  }
  const initProductCounts = () => {
    const storedProductCounts = localStorage.getItem('productCounts')
    if (storedProductCounts) {
      productCounts.value = JSON.parse(storedProductCounts)
    }
  }

  initProductCounts()

  const addToCart = async (product: ICards) => {
    addIndex()
    const productInCart = products.value.find((item) => item.id === product.id)
    if (productInCart) {
      changeQuantity(product.id, 'inc')
    } else {
      products.value.push(product)
      updateProductCounts()
      localStorage.setItem('products', JSON.stringify(products.value))
      products.value = JSON.parse(localStorage.getItem('products')!)
      if (!productCounts.value[product.id]) {
        productCounts.value[product.id] = 1
      }
    }
  }

  const changeQuantity = (productId: number, action: 'inc' | 'dec') => {
    if (productCounts.value[productId] === undefined) {
      if (action === 'inc') {
        productCounts.value[productId] = 1
      }
      ;('')
    } else {
      if (action === 'dec' && productCounts.value[productId] > 1) {
        productCounts.value[productId]--
      } else if (action === 'inc') {
        productCounts.value[productId]++
      }
    }
    cartIndex.value = Object.values(productCounts.value).reduce((acc, count) => acc + count, 0)
    localStorage.setItem('cartIndex', JSON.stringify(cartIndex.value))
    updateProductCounts()
  }

  const changeSum = computed(() => {
    return (productId: number, sum: string) => {
      const numSum = Number(sum.replace(' ', ''))
      if (!isNaN(numSum)) {
        const initialSum = numSum
        if (productCounts.value[productId] && productCounts.value[productId] > 1) {
          const newSum = numSum * productCounts.value[productId]
          const formattedNewSum = newSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          return formattedNewSum
        } else {
          const formattedInitialSum = initialSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          return formattedInitialSum
        }
      }
    }
  })

  const getCountForProduct = (productId: number) => {
    if (!productCounts.value[productId]) {
      productCounts.value[productId] = 1
    }
    return productCounts.value[productId]
  }

  const getTotalSum = computed(() => {
    let totalSum = 0
    for (const product of products.value) {
      const productId = product.id
      const productSum = product.price
      const formattedSum = changeSum.value(productId, productSum)

      const numSum = Number(formattedSum!.replace(' ', ''))

      if (!isNaN(numSum)) {
        totalSum += numSum
      }
    }
    const formattedTotalSum = totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    return formattedTotalSum
  })

  const removeAllProducts = () => {
    localStorage.removeItem('products')
    localStorage.removeItem('cartIndex')
    localStorage.removeItem('flagCart')
    localStorage.removeItem('productCounts')
    products.value = [] as ICards[]
    cartIndex.value = 0
    flag.value = false
  }

  const removeProductById = (productId: number) => {
    products.value = products.value.filter((product) => product.id !== productId)
    delete productCounts.value[productId]

    updateProductCounts()
    localStorage.setItem('products', JSON.stringify(products.value))
    cartIndex.value = Object.values(productCounts.value).reduce((acc, count) => acc + count, 0)
    localStorage.setItem('cartIndex', JSON.stringify(cartIndex.value))
  }

  watchEffect(() => {
    if (products.value.length === 0 && cartIndex.value == 0) {
      removeAllProducts()
    }
  })

  return {
    flag,
    cartIndex,
    flBasket,
    alertItem,
    addIndex,
    addToCart,
    products,
    changeQuantity,
    changeSum,
    productCounts,
    getCountForProduct,
    getTotalSum,
    removeAllProducts,
    removeProductById
  }
})
