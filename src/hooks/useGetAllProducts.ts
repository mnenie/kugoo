import type { ICards } from '@/types/cards.interface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function useGetAllProducts() {
  const products = ref<ICards[]>([])

  const getAllProducts = async () => {
    try {
      const resp1 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters.json')
      const resp2 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/bikes/bikes.json')
      const resp3 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/mopeds/mopeds.json')
      const allCards = [...resp1.data.cards1, ...resp1.data.cards2, ...resp2.data, ...resp3.data]
      products.value = allCards
      return products.value
    } catch (err) {
      console.error(err)
    }
  }

  onMounted(async () => {
    await getAllProducts()
  })

  return {
    products, getAllProducts
  }
}
