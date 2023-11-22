import type { ICards } from "@/types/cards.interface"
import { onMounted, ref } from "vue"

export default function useGetAllScooters() {
  const items = ref<ICards[]>([])
  const getAllScooters = async () => {
    try {
      const response = await fetch('data/scooters.json')
      const data = await response.json()
      items.value = [...data.cards1, ...data.cards2]
    }
    catch (e) {
      console.log(e)
    }
  }
  onMounted(() => {
    getAllScooters()
  })
  return {
    items
  }
}