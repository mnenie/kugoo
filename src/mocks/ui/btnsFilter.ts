import type { IBtns } from "@/types/ui.interface";
import { ref } from "vue";

export const btnsFilter = ref<IBtns[]>([
  {
    id: 1,
    body: 'Все',
    active: true,
  },
  {
    id: 2,
    body: 'Хиты продаж',
    active: false,
  },
  {
    id: 3,
    body: 'Для города',
    active: false,
  },
  {
    id: 4,
    body: 'Для взрослых',
    active: false,
  },
  {
    id: 5,
    body: 'Для детей',
    active: false,
  }
])
export const btnsFilter2 = ref<IBtns[]>([
  {
    id: 1,
    body: 'Электросамокаты',
    active: true,
  },
  {
    id: 2,
    body: 'Гироскутеры',
    active: false,
  },
  {
    id: 3,
    body: 'Электроскутеры',
    active: false,
  },
  {
    id: 4,
    body: 'Электровелосипеды',
    active: false,
  }
])
export const btnsFilter3 = ref<IBtns[]>([
  {
    id: 1,
    body: 'Гидроизоляция',
    active: true,
  },
  {
    id: 2,
    body: 'Настройка',
    active: false,
  },
  {
    id: 3,
    body: 'Все вместе',
    active: false,
  }
])