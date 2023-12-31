import UserService from '@/services/UserService'
import type { IUser } from '@/types/user.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', () => {
  const isAuth = ref<boolean>(false)
  const user = ref({} as IUser)
  const token = ref('')

  const userRegistration = async (userInfo: IUser) => {
    try {
      const response = await UserService.registration(userInfo)
      token.value = response.data.localId
      sessionStorage.setItem('token', response.data.localId)
      isAuth.value = true
      user.value = response.data.user
    } catch (err) {
      console.log(err)
    }
  }

  const userLogin = async(userAuth: IUser) => {
    try{
      const response = await UserService.login(userAuth)
      isAuth.value = true
      user.value = response.data.user
      token.value = response.data.localId
      sessionStorage.setItem('token', response.data.localId)
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
    userLogout,
    token
  }
})
