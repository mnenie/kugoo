import type { IBasket } from "@/types/cart.interface";
import { ref } from "vue";
export const basketItems = ref<IBasket[]>([
  {
    id: 1,
    title: 'Kugoo Kirin M4',
    price: '29 900',
    img: '/img/cards/scooter1.png'
  },
  {
    id: 2,
    title: 'Kugoo Kirin M4',
    price: '29 900',
    img: '/img/cards/scooter1.png'
  },

  {
    id: 3,
    title: 'Kugoo Kirin M4',
    price: '29 900',
    img: '/img/cards/scooter1.png'
  },
  {
    id: 4,
    title: 'Kugoo Kirin M4',
    price: '29 900',
    img: '/img/cards/scooter1.png'
  },
  {
    id: 5,
    title: 'Kugoo Kirin M4',
    price: '29 900',
    img: '/img/cards/scooter1.png'
  },
])