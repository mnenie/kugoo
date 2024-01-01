import type { ICategories } from "@/types/categories.interface";
import axios from "axios";
import { ref, onMounted } from 'vue';

export default function useTechnic(){
  const home1 = ref<ICategories[]>([]);
  const loader = ref<boolean>(true)

  const loadTechnic = async () => {
    try {
      loader.value = true
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/technic.json')
      home1.value = response.data
      loader.value = false

    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadTechnic)
  return {
    home1, loader
  }
}
