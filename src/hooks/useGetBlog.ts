import { onMounted, ref } from "vue";
import axios from 'axios'
import type { INews } from "@/types";

export default function useGetBlog(id: number){
  const blog = ref<INews | null>(null)
  const loader = ref<boolean>(true)

  const getBlogById = async(itemId: number) => {
    try{
      loader.value = true
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/news/news.json')

      const allNews = response.data
      const oneNew = allNews.find((blog: INews) => blog.id === itemId)
      blog.value = oneNew
      loader.value = false

      return blog.value
    } catch(err){
      console.log(err)
    }
  } 

  onMounted(() => {
    getBlogById(id)
  })

  return {
    getBlogById, blog, loader
  }
}