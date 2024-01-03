import type { IFilter } from '@/types/filter.interface'
import type { IBtns } from '@/types/ui.interface'
import { ref } from 'vue'

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

export const filtersPanel1 = ref<IFilter[]>([
  { id: 1, checked: false, title: 'Для города' },
  { id: 2, checked: false, title: 'Вне города' }
])
export const filtersPanel2 = ref<IFilter[]>([
  { id: 1, checked: false, title: 'Для взрослого' },
  { id: 2, checked: false, title: 'Для ребенка' },
  { id: 3, checked: false, title: 'Для пенсионера' }
])
export const filtersPanel3 = ref<IFilter[]>([
  { id: 1, checked: false, title: 'Легкий (с 15 кг до 30 кг)' },
  { id: 3, checked: false, title: 'Тяжелый (свыше 30 кг)' }
])
export const filtersPanel4 = ref<IFilter[]>([
  { id: 1, checked: false, title: 'Да' },
  { id: 2, checked: false, title: 'Нет' }
])
export const filtersPanel5 = ref<IFilter[]>([
  { id: 1, checked: false, title: 'До 20 км' },
  { id: 2, checked: false, title: 'До 25 км' },
  { id: 3, checked: false, title: 'До 30 км' },
  { id: 4, checked: false, title: 'До 35 км' },
  { id: 5, checked: false, title: 'До 40 км' },
  { id: 6, checked: false, title: 'До 45 км' },
  { id: 7, checked: false, title: 'До 50 км' },
  { id: 8, checked: false, title: 'До 55 км' },
  { id: 9, checked: false, title: 'До 60 км' },
  { id: 10, checked: false, title: 'До 70 км' }
])
export const filtersPanel6 = ref<IFilter[]>([
  { id: 1, checked: false, title: '249 Вт' },
  { id: 2, checked: false, title: '350 Вт' },
  { id: 3, checked: false, title: '500 Вт' },
  { id: 4, checked: false, title: '600 Вт' },
  { id: 5, checked: false, title: '1000 Вт' },
  { id: 6, checked: false, title: '1600 Вт' },
  { id: 7, checked: false, title: '2000 Вт' },
  { id: 8, checked: false, title: '2400 Вт' }
])