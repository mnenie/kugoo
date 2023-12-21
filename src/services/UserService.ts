import $api from '@/api/index'
import type {AxiosResponse} from 'axios'
import type { IUser, IUserAuth } from '@/types/user.interface'

export default class UserService {

  static async registration(user: IUser): Promise<AxiosResponse<IUserAuth>> {
    const response = await $api.post('/users/registration', user)
    return response
  }

  static async login(loginInfo: {email: string, number: number | string}): Promise<AxiosResponse<IUserAuth>> {
    const response = await $api.post('/users/login', loginInfo)
    return response
  }

  static logout(): void {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}