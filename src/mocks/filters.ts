import type { IBtns } from "@/types/ui.interface";
import { ref } from "vue";

export const filters = ref<IBtns[]>([
  {
    id: 1,
    body: 'По умолчанию',
    active: true
  },
  {
    id: 2,
    body: 'По цене',
    active: false
  },
  {
    id: 3,
    body: 'По дальности хода',
    active: false
  }
])