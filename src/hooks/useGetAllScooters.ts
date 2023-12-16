import type { ICards } from "@/types/cards.interface"
import axios from "axios"
import { onMounted, ref } from "vue"

export default function useGetAllScooters() {
  const items = ref<ICards[]>([])
  const getAllScooters = async () => {
    try {
      const response = await axios.get('/data/scooters.json')
      const data = response.data
      items.value = [...data.cards1, ...data.cards2]
      return items.value
    }
    catch (e) {
      console.log(e)
      return [] as ICards[]
    }
  }
  onMounted(() => {
    getAllScooters()
  })
  return {
    items, getAllScooters
  }
}