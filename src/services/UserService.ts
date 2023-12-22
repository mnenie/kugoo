import $api from '@/api/index'
import type {AxiosResponse} from 'axios'
import type { IUser, IUserAuth } from '@/types/user.interface'

export default class UserService {

  static async registration(user: IUser): Promise<AxiosResponse<IUserAuth>> {
    const userReg = { ...user, returnSecureToken: true}
    const response = await $api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_API_KEY_FIREBASE}`, userReg)
    return response
  }

  static async login(user: IUser): Promise<AxiosResponse<IUserAuth>> {
    const userAuth = { ...user, returnSecureToken: true}
    const response = await $api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY_FIREBASE}`, userAuth)
    return response
  }

  static logout(): void {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}