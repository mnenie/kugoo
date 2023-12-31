import type { ICards } from "@/types/cards.interface"
import axios from "axios"
import { onMounted, ref } from "vue"

export default function useGetAllBikes(){
  const items = ref<ICards[]>([])
  const tempItems = ref<ICards[]>([])

  const getAllBikes = async () => {
    try{
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/bikes/bikes.json')
      items.value = response.data
      tempItems.value = [...items.value]
      return items.value

    } catch(e){
      console.log(e)
      return [] as ICards[]
    }
  }

  onMounted(async () => {
    await getAllBikes()
  })

  return {
    getAllBikes, items, tempItems
  }
}