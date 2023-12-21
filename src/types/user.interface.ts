export interface IUser {
  email: string
  number: number | string
  name: string
  lastname: string
}

export interface IUserAuth {
  user: IUser
  token: string
}
