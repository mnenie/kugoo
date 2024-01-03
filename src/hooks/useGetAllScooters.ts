import type { ICards } from "@/types/cards.interface"
import axios from "axios"
import { onMounted, ref } from "vue"

export default function useGetAllScooters() {
  const items = ref<ICards[]>([])
  const tempItems = ref<ICards[]>([])

  const loader = ref<boolean>(true)

  const getAllScooters = async () => {
    try {
      loader.value = true
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters.json')
      const data = response.data
      items.value = [...data.cards1, ...data.cards2]
      tempItems.value = [...items.value]
      loader.value = false
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
    items, getAllScooters, tempItems, loader
  }
}