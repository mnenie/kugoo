import { onMounted, onUnmounted, ref } from 'vue'
import type { ICards } from '@/types/cards.interface'
import axios from 'axios'

export default function useScooters() {
  const cards = ref<ICards[]>([])
  const cards2 = ref<ICards[]>([])
  const originalCards = ref<ICards[]>([])
  const originalCards2 = ref<ICards[]>([])

  const loader = ref<boolean>(true)
  
  const loadData = async () => {
    try {
      loader.value = true
      const [response1, response2] = await Promise.all([
        axios.get(`https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters/cards1.json`),
        axios.get(`https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters/cards2.json`),
      ])
      const [data1, data2] = await Promise.all([response1.data, response2.data])
      cards.value = data1
      cards2.value = data2
      originalCards.value = data1
      originalCards2.value = data2
      loader.value = false
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadData)
  onUnmounted(() => {
    cards.value.splice(0, cards.value.length, ...originalCards.value);
  })
  return {
    cards, cards2, originalCards, originalCards2, loader
  }
}
