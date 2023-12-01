import type { ICards } from '@/types/cards.interface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function useTestDriveScooters() {
  const cards = ref<ICards[]>([])
  const getTestDiveCards = async () => {
    try {
      const response = await axios.get(`data/scooters.json`)
      cards.value = response.data.cardsTest
    } catch (err) {
      console.log(err)
    }
  }
  onMounted(() => {
    getTestDiveCards()
  })
  return {
    cards
  }
}
