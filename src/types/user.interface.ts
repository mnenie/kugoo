export interface IUser {
  email: string
  password: string
}

export interface IUserAuth {
  user: IUser
  localId: string
  idToken: string
}
