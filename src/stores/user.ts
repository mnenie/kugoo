import UserService from '@/services/UserService'
import type { IUser } from '@/types/user.interface'
import { HOME_ROUTE } from '@/utils/consts'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useUser = defineStore('user', () => {
  const isAuth = ref<boolean>(false)
  const user = ref({} as IUser)
  const token = ref('')
  const idUser = ref(sessionStorage.getItem('idUser') || 'null')
  const errorAuth = ref<boolean>(false)
  const errorVal = ref('')
  const router = useRouter()

  const userRegistration = async (userInfo: IUser) => {
    try {
      const response = await UserService.registration(userInfo)
      token.value = response.data.localId
      sessionStorage.setItem('token', response.data.localId)
      isAuth.value = true
      user.value = response.data.user
      idUser.value = response.data.idToken.slice(7, 13)
      sessionStorage.setItem('idUser', response.data.idToken.slice(7, 13))
      router.push(HOME_ROUTE)
    } catch (err) {
      errorAuth.value = true
      errorVal.value = 'Неверно введены данные или аккаунт уже существует'
      console.log(err)
      setTimeout(() => {
        errorAuth.value = false
      }, 2000)
    }
  }

  const userLogin = async (userAuth: IUser) => {
    try {
      const response = await UserService.login(userAuth)
      isAuth.value = true
      user.value = response.data.user
      token.value = response.data.localId
      sessionStorage.setItem('token', response.data.localId)
      idUser.value = response.data.idToken.slice(7, 13)
      sessionStorage.setItem('idUser', response.data.idToken.slice(7, 13))
      router.push(HOME_ROUTE)
    } catch (err) {
      errorAuth.value = true
      errorVal.value = 'Неверно введены данные или аккаунта не существует'
      console.log(err)
      setTimeout(() => {
        errorAuth.value = false
      }, 2000)
    }
  }

  const userLogout = async () => {
    const response = UserService.logout()
    await router.push(HOME_ROUTE)
    user.value = {} as IUser
    isAuth.value = false
    token.value = ''
    idUser.value = ''
    return response
  }

  return {
    userRegistration,
    isAuth,
    user,
    userLogin,
    userLogout,
    token,
    idUser,
    errorAuth,
    errorVal
  }
})
