<script setup lang="ts">
import { HOME_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import { ref } from 'vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useUser } from '@/stores/user';
import { useRouter } from 'vue-router';

const email = ref<string>('')
const password = ref<string>('')
const user = useUser()
const router = useRouter()

const {
  defineInputBinds: defineLoginInputBinds, errors: loginErrs, validate: validateLogin } = useForm({
    validationSchema: yup.object({
      email: yup.string().email('*Некорректный адрес email').required('*Обязательное поле'),
      password: yup.string().min(8, '*Пароль должен содержать не менее 8 символов').required('*Обязательное поле'),
    }),
  });
const passwordValidate = defineLoginInputBinds('password');
const emailValidate = defineLoginInputBinds('email');

const onSumbit = async () => {
  await validateLogin()
  const authInfo = {
    email: email.value,
    password: password.value,
  }
  if (Object.keys(loginErrs.value).length === 0) {
    await user.userLogin(authInfo)
    router.push(HOME_ROUTE)
    email.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="auth">
    <div class="form">
      <h2 class="size_2 title"><span style="color: var(--purple-color);">KUGOO</span> ID</h2>
      <InputAuth style="margin-bottom: 15px;" :type="'text'" :placeholder="'Введите email'" v-model="email" v-bind="emailValidate">
        <img style="width: 17px; height: 17px;" src="/icons/auth/email.svg" alt="">
      </InputAuth>
      <div class="size_7" v-if="loginErrs.email"
        style="color: var(--pink-color); margin-top: -10px; margin-bottom: 10px;">
        {{ loginErrs.email }} </div>
      <InputAuth style="margin-bottom: 15px;" :placeholder="'Введите пароль'" :type="'password'" v-model="password" v-bind="passwordValidate">
        <img style="width: 17px; height: 17px;" src="/icons/auth/password.svg" alt="">
      </InputAuth>
      <div class="size_7" v-if="loginErrs.password"
        style="color: var(--pink-color); margin-top: -10px; margin-bottom: 10px;">
        {{ loginErrs.password }} </div>
      <ButtonPurpleLg style="margin-top: 15px;" @click="onSumbit">Войти</ButtonPurpleLg>
    </div>
    <span style="margin-bottom: 2px; color: var(--black-color);" class="size_6">У вас еще нет аккаунта?</span>
    <router-link class="link size_6" :to="REGISTRATION_ROUTE">Зарегистрируйтесь</router-link>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--btn-gray-color);
    border-radius: 16px;
    max-width: 500px;
    width: 100%;
    margin-bottom: 10px;

    .title {
      margin-bottom: 25px;
    }
  }

  .link {
    text-decoration: none;
    color: var(--purple-color);
  }
}</style>