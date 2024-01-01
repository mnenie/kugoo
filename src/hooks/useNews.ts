import type { INews } from '@/types'
import axios from 'axios'
import { ref } from 'vue'
export default function useNews() {
  const newsTop = ref<INews[]>([])
  const news = ref<INews[]>([])
  const newsComparison = ref<INews[]>([])
  const newsRec = ref<INews[]>([])

  const loader = ref<boolean>(true)

  const getNewsTop = async () => {
    try {
      loader.value = true
      const response = await axios.get(
        `https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/newstop.json`
      )
      newsTop.value = response.data
      loader.value = false
    } catch (error) {
      console.log(error)
    }
  }
  const getAllNews = async () => {
    try {
      loader.value = true
      const response = await axios.get(
        `https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/news.json`
      )
      news.value = response.data
      loader.value = false
    } catch (error) {
      console.log(error)
    }
  }
  const getNewsRecomendation = async () => {
    try {
      loader.value = true
      const response = await axios.get(
        `https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/newsrec.json`
      )
      newsRec.value = response.data
      loader.value = false
    } catch (error) {
      console.log(error)
    }
  }
  const getNewsComparison = async () => {
    try {
      loader.value = true
      const response = await axios.get(`https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/newscomparison.json`)
      newsComparison.value = response.data
      loader.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    newsTop,
    news,
    newsComparison, 
    newsRec,
    getAllNews,
    getNewsTop,
    getNewsRecomendation,
    getNewsComparison, 
    loader
  }
}
