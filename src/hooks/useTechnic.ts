import type { ICategories } from "@/types/categories.interface";
import axios from "axios";
import { ref, onMounted } from 'vue';

export default function useTechnic(){
  const home1 = ref<ICategories[]>([]);

  const loadTechnic = async () => {
    try {
      const response = await axios.get('data/technic.json')
      home1.value = response.data.technic

    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadTechnic)
  return {
    home1
  }
}
