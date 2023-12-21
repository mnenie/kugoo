import UserService from '@/services/UserService'
import type { IUser } from '@/types/user.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', () => {
  const isAuth = ref<boolean>(false)
  const user = ref({} as IUser)

  const userRegistration = async (userInfo: IUser) => {
    try {
      const response = await UserService.registration(userInfo)
      sessionStorage.setItem('token', response.data.token)
      isAuth.value = true
      user.value = response.data.user
      sessionStorage.setItem('user', JSON.stringify(user.value))
    } catch (err) {
      console.log(err)
    }
  }

  const userLogin = async(loginInfo: {email: string, number: number | string}) => {
    try{
      const response = await UserService.login(loginInfo)
      sessionStorage.setItem('token', response.data.token)
      isAuth.value = true
      user.value = response.data.user
      sessionStorage.setItem('user', JSON.stringify(user.value))
    }
    catch(err) {
      console.log(err)
    }
  }

  const userLogout = () => {
    const response = UserService.logout()
    user.value = {} as IUser
    isAuth.value = false
    return response
  }

  return {
    userRegistration,
    isAuth,
    user, 
    userLogin,
    userLogout
  }
})
