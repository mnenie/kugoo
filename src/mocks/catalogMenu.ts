import type { ICatalogMenu1, ICatalogMenu2 } from "@/types/catalogMenu.interface";
import { ref } from "vue";

export const catalogMenu1 = ref<ICatalogMenu1[]>([
  {
    id: 1,
    svg: '/icons/catalog/1.svg',
    category: 'Электросамокаты',
  },
  {
    id: 2,
    svg: '/icons/catalog/2.svg',
    category: 'Электроскутеры',
  },
  {
    id: 3,
    svg: '/icons/catalog/3.svg',
    category: 'Электровелосипеды',
  },
  {
    id: 4,
    svg: '/icons/catalog/4.svg',
    category: 'Робот-пылесосы',
  },
  {
    id: 5,
    svg: '/icons/catalog/5.svg',
    category: 'Весы',
  },
])

export const catalogMenu2 = ref<ICatalogMenu2[]>([
  {
    id: 1, 
    title: 'Внедорожный'
  },
  {
    id: 2, 
    title: 'Городской'
  },
  {
    id: 3, 
    title: 'Зимний'
  },
  {
    id: 4, 
    title: 'С сиденьем'
  },
  {
    id: 5, 
    title: 'Без сиденья'
  }
])
export const catalogMenu3 = ref<ICatalogMenu2[]>([
  {
    id: 1, 
    title: 'Для детей и подростков'
  },
  {
    id: 2, 
    title: 'Для взрослых'
  },
  {
    id: 3, 
    title: 'Для пенсионеров'
  }
])