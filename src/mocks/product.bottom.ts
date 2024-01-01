interface IProductBottom{
  title: string;
  body?: string;
  img: string;
  id: number
}

export const ProductBottomBlocks:IProductBottom[] = [
  {
    id: 1, title: '14 дней на обмен и возврат', body: 'Если вас, что-то не устроит в товаре, мы обменяем его на новый или вернем деньги', img: '/img/product/dron.png'
  },
  {
    id: 2, title: '1 год на самокаты', body: 'Обеспечиваем гарантийные обязательства на весь ассортимент самокатов в стандартной комплектации', img: '/img/product/1.png'
  },
  {
    id: 3, title: 'Расширенная гарантия 2 года для версии MAX', img: '/img/product/2.png'
  },
  {
    id: 4, title: 'Расширенная гарантия 3 года для версии VIP', img: '/img/product/3.png'
  }
]