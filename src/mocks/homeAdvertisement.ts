import type { IAdvertisement } from "@/types";
import { ref } from "vue";

export const advertisement1 = ref<IAdvertisement[]>([
  {
    id: 1,
    svg: '/icons/market/cart.svg',
    title: 'Х товаров в каталоге',
    body: 'Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.'
  },
  {
    id: 2,
    svg: '/icons/market/billfold.svg',
    title: '5 способов оплаты',
    body: 'Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».'
  },
  {
    id: 3,
    svg: '/icons/market/guarantee.svg',
    title: 'Полная документация и гарантия 1 год',
    body: 'При покупке вам выдается кассовый чек и гарантийный талон – что дает право на гарантийное обслуживание.'
  },
  {
    id: 4,
    svg: '/icons/market/delivery.svg',
    title: 'Отправка заказа день в день',
    body: 'Отправляем заказы по всей России день в день или забирайте товар самостоятельно'
  },
  {
    id: 5,
    svg: '/icons/market/percentage-discount.svg',
    title: 'Рассрочка без переплат',
    body: 'В нашем магазине можно приобрести любой товар в рассрочку.'
  },
  {
    id: 6,
    img: '/img/scooterMarket.png',
    svglink: '/icons/market/arrow.svg',
    newTitle: 'Больше в каталоге',
    link: 'Перейти'
  },
])
export const advertisement2  = ref<IAdvertisement[]>([
  {
    id: 1,
    svg: '/icons/market/cart.svg',
    title: 'Ремонт от 1 дня',
    body: 'Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.'
  },
  {
    id: 2,
    svg: '/icons/market/billfold.svg',
    title: 'Гидроизоляция для долгой службы',
    body: 'Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.'
  },
  {
    id: 3,
    svg: '/icons/market/guarantee.svg',
    title: 'Ремонтируем только то, что сломалось',
    body: 'Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.'
  },
  {
    id: 4,
    svg: '/icons/market/delivery.svg',
    title: 'Даем гарантию 14 дней на ремонт',
  },
  {
    id: 5,
    svg: '/icons/market/percentage-discount.svg',
    title: 'Оригинальные запчасти',
    body: 'Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.'
  },
  {
    id: 6,
    img: '/img/scooterService.png',
    svglink: '/icons/market/arrow.svg',
    newTitle: 'Больше в сервисе',
    link: 'Перейти'
  },
])