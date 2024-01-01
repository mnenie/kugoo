import type { ICards } from '@/types/cards.interface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function useGetProductById(id: number) {
  const product = ref<ICards | null>(null)
  const loader = ref<boolean>(true)

  const getProductById = async (itemId: number) => {
    try {
      loader.value = true
      const resp1 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters.json')
      const resp2 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/bikes/bikes.json')
      const resp3 = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/mopeds/mopeds.json')
      const allCards = [...resp1.data.cards1, ...resp1.data.cards2, ...resp2.data, ...resp3.data]

      const scooter = allCards.find((card) => card.id === itemId)
      product.value = scooter
      loader.value = false
      return product.value
    } catch (err) {
      console.error(err)
    }
  }

  onMounted(() => {
    getProductById(id)
  })

  return {
    product, getProductById, loader
  }
}
