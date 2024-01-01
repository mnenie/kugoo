import type { IStocks } from '@/types/stocks.interface'
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default function useStocks() {
  const stocks = ref<IStocks[]>([])
  const loader = ref<boolean>(true)
  const getAllStocks = async () => {
    try {
      loader.value = true
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/stocks.json')
      stocks.value = response.data
      loader.value = false
    } catch (err) {
      console.log(err)
    }
  }
  onMounted(async () => {
    await getAllStocks()
  })

  return {
    stocks,
    getAllStocks, 
    loader
  }
}
