import type { ICards } from '@/types/cards.interface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function useGetScooterById(id: number) {
  const product = ref<ICards | null>(null)
  const getScooterById = async (itemId: number) => {
    try {
      const response = await axios.get('/data/scooters.json')
      const allCards = [...response.data.cards1, ...response.data.cards2]

      const scooter = allCards.find((card) => card.id === itemId)
      product.value = scooter
      return product.value
    } catch (err) {
      console.error(err)
    }
  }

  onMounted(() => {
    getScooterById(id)
  })

  return {
    product
  }
}
