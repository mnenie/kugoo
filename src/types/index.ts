export interface IFooterCatalog {
  id: number
  title: string
}

export interface IFooterContacts {
  id: number
  title: string
  number: string
  date?: string
}

export interface IFooterNetwork {
  id: number
  svg: string
  title: string
  num: string
}



export interface IAdvertisement {
  newTitle?: string
  svglink?: string
  link?: string
  img?: string
  id: number
  svg?: string
  title?: string
  body?: string
}

export interface INews {
  id: number
  title: string
  body: string
  img: string
  svg: string
  viewsvg: string
  date: string
  views: string
}
