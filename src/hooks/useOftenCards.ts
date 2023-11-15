import type { ICards } from "@/types/cards.interface"
import {onMounted, ref} from 'vue'
export default function useOftenCards() {
  const cardsOften = ref<ICards[]>([])

  const loadOften = async () => {
    try {
      const response = await fetch(`data/scooters.json`)
      const data = await response.json()
      cardsOften.value = data.cardsOften
    } catch(error) {
      console.log(error)
    }
  }
  onMounted(loadOften)
  return {
    cardsOften
  }
}