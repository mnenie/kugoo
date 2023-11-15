import type { ICategories } from "@/types/categories.interface";
import { ref, onMounted } from 'vue';

export default function useTechnic(){
  const home1 = ref<ICategories[]>([]);

  const loadTechnic = async () => {
    try {
      const response = await fetch('data/technic.json')
      const data = await response.json()
      home1.value = data.technic

    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadTechnic)
  return {
    home1
  }
}
