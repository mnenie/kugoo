import type { INews } from '@/types'
import { ref } from 'vue'

export const homeNews = ref<INews[]>([
  {
    id: 1,
    title: 'Как правильно заряжать электросамокат',
    body: 'Один из первых вопросов, который волнует после покупки электросамоката. Зарядка самоката - это важно!',
    date: '01.09.2023',
    views: '53',
    svg: '/icons/calendar1.svg',
    viewsvg: '/icons/eye.svg',
    img: '/img/news/1.png'
  },
  {
    id: 2,
    title: 'Электро-самокаты против внедорожных.',
    body: 'Появление электрических скутеров полностью изменило ландшафт путешествий на короткие расстояния.',
    date: '17.09.2023',
    views: '124',
    svg: '/icons/calendar1.svg',
    viewsvg: '/icons/eye.svg',
    img: '/img/news/2.png'
  },
  {
    id: 3,
    title: 'Как правильно выбрать электронный самокаты?',
    body: 'Готовы ли вы покорить дикую природу на электрическом самокате для бездорожья? Природа прекрасна.',
    date: '23.10.2023',
    views: '47',
    svg: '/icons/calendar1.svg',
    viewsvg: '/icons/eye.svg',
    img: '/img/news/3.png'
  }
  // {
  //   id: 4,
  //   title: 'Почему электротранспорт в наши дни стремительно развивается?',
  //   body: 'От автомобилей и электропоездов до электронных скутеров и велосипедов - эти стратегии естественны.',
  //   date: '17.12.2023',
  //   views: '96',
  //   svg: '/icons/calendar1.svg',
  //   viewsvg: '/icons/eye.svg',
  //   img: '/img/news/4.png'
  // }
])
