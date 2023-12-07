import type { INews } from "@/types";
import axios from "axios";
import {onMounted, ref} from 'vue'
export default function useNews() {
  const home = ref<INews[]>([])

  const loadNews = async () => {
    try {
      const response = await axios.get(`data/news.json`)
      home.value = response.data.news
    } catch(error) {
      console.log(error)
    }
  }
  onMounted(loadNews)
  return {
    home
  }
}