import type { INews } from "@/types";
import {onMounted, ref} from 'vue'
export default function useNews() {
  const home = ref<INews[]>([])

  const loadNews = async () => {
    try {
      const response = await fetch(`data/news.json`)
      const data = await response.json()
      home.value = data.news
    } catch(error) {
      console.log(error)
    }
  }
  onMounted(loadNews)
  return {
    home
  }
}