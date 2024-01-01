import type { ICards } from "@/types/cards.interface"
import axios from "axios"
import { onMounted, ref } from "vue"

export default function useGetAllMopeds(){
  const items = ref<ICards[]>([])
  const tempItems = ref<ICards[]>([])

  const loader = ref<boolean>(true)

  const getAllMopeds = async () => {
    try{
      loader.value = true
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/mopeds/mopeds.json')
      items.value = response.data
      tempItems.value = [...items.value]
      loader.value = false
      return items.value

    } catch(e){
      console.log(e)
      return [] as ICards[]
    }
  }

  onMounted(async () => {
    await getAllMopeds()
  })

  return {
    getAllMopeds, items, tempItems, loader
  }
}