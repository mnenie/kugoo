import { defineStore } from 'pinia'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { PAYMENT_ROUTE } from '@/utils/consts'

export const useWays = defineStore('ways', () => {
  const router = useRouter()
  const { defineInputBinds, errors, validate } = useForm({
    validationSchema: yup.object({
      name: yup.string().required('*Обязательное поле'),
      lastname: yup.string().required('*Обязательное поле'),
      phone: yup
        .string()
        .required('*Обязательное поле')
        .matches(
          /^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/,
          '*Вы ввели неправильный номер телефона'
        ),
      email: yup.string().email('Некорректный адрес email').required('*Введите email')
    })
  })
  const phone = defineInputBinds('phone');
  const email = defineInputBinds('email');
  const name = defineInputBinds('name');
  const lastname = defineInputBinds('lastname');

  const onSubmit = async () => {
    await validate()
    if (Object.keys(errors.value).length === 0) {
      router.push(PAYMENT_ROUTE)
    }
  }

  return {
    phone, email, name, lastname, onSubmit, errors
  }
})
