import { onMounted, onUnmounted, ref } from 'vue'
import type { ICards } from '@/types/cards.interface'
import axios from 'axios'
export default function useScooters() {
  const cards = ref<ICards[]>([])
  const cards2 = ref<ICards[]>([])
  const originalCards = ref<ICards[]>([])
  const originalCards2 = ref<ICards[]>([])

  const loadData = async () => {
    try {
      const [response1, response2] = await Promise.all([
        axios.get('data/scooters.json'),
        axios.get('data/scooters.json')
      ])
      const [data1, data2] = await Promise.all([response1.data, response2.data])
      cards.value = data1.cards1
      cards2.value = data2.cards2
      originalCards.value = data1.cards1
      originalCards2.value = data2.cards2
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadData)
  onUnmounted(() => {
    cards.value.splice(0, cards.value.length, ...originalCards.value);
  })
  return {
    cards, cards2, originalCards, originalCards2
  }
}
