import type { INews } from "@/types";
import axios from "axios";
import {onMounted, ref} from 'vue'
export default function useNews() {
  const home = ref<INews[]>([])

  const loadNews = async () => {
    try {
      const response = await axios.get(`https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/news.json`)
      home.value = response.data
    } catch(error) {
      console.log(error)
    }
  }
  onMounted(loadNews)
  return {
    home
  }
}