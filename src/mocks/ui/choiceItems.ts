import type { IEquipment } from "@/types/equipment.interface";
import { ref } from "vue";

export const choiceItems1 = ref<IEquipment[]>([
  { id: 0, title: 'Базовая', active: true },
  { id: 1, title: 'Версия MAX', active: false },
  { id: 2, title: 'VIP-версия', active: false },
])
export const choiceItems2 = ref<IEquipment[]>([
  { id: 0, title: 'Шоссейная (базовая)', active: true },
  { id: 1, title: 'Внедорожная', active: false, price: '4 000 руб.' },
  { id: 2, title: 'Внедорожная с установкой', active: false, price: '4 500 руб.' },
  { id: 3, title: 'Внедорожная шипированная', active: false, price: '5 600 руб.' },
])
export const choiceItems3 = ref<IEquipment[]>([
  { id: 0, title: 'Стандартная 1 год', active: true, price: 'Бесплатно' },
  { id: 1, title: 'Расширенная 2 года', active: false, price: '2 990 руб.' }
])
export const choiceItems4 = ref<IEquipment[]>([
  { id: 0, title: 'Нет', active: true },
  { id: 1, title: 'Настройка', active: false, price: '1 520 руб.' },
  { id: 2, title: 'Гидроизоляция', active: false, price: '3 850 руб.' },
  { id: 3, title: 'Гидроизоляция и настройка', active: false, price: '3 409 руб. (-30%)' },
])
export const choiceItems5 = ref<IEquipment[]>([
  { id: 0, title: 'Без упаковки', active: true },
  { id: 1, img: '/icons/product/pink.svg', active: false, title: 'Розовый' },
  { id: 2, img: '/icons/product/purple.svg', active: false, title: 'Синий' },
  { id: 3, img: '/icons/product/red.svg', active: false, title: 'Красный' },
])