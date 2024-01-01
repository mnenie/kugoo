export interface IPrice {
  id: number
  body: string
  price: number
}
export interface IRepair {
  id: number
  title: string
  active: boolean
  prices: IPrice[]
}
