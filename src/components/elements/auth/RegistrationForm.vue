<script setup lang="ts">
import { AUTH_ROUTE } from '@/utils/consts';
import { ref } from 'vue';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { HOME_ROUTE } from '@/utils/consts';
import type { IUser } from '@/types/user.interface';
import { useUser } from '@/stores/user';

const password = ref<string>('')
const email = ref<string>('')
const router = useRouter()

const user = useUser()

const {
  defineInputBinds: defineRegistrationInputBinds, errors: regErrs, validate: validateReg } = useForm({
    validationSchema: yup.object({
      email: yup.string().email('*Некорректный адрес email').required('*Обязательное поле'),
      password: yup.string().required('*Обязательное поле')
    }),
  });
const emailValidate = defineRegistrationInputBinds('email');
const passwordValidate = defineRegistrationInputBinds('password');


const onSumbit = async () => {
  await validateReg()
  const registrationInfo: IUser = {
    email: email.value,
    password: password.value
  }
  if (Object.keys(regErrs.value).length === 0) {
    await user.userRegistration(registrationInfo)
    router.push(HOME_ROUTE)
  }
}
</script>

<template>
  <div class="auth">
    <div class="form">
      <h2 class="size_2 title"><span style="color: var(--purple-color);">KUGOO</span> ID</h2>
      <InputAuth style="margin-bottom: 15px;" :placeholder="'Введите email'" v-model="email" v-bind="emailValidate">
        <img style="width: 17px; height: 17px;" src="/icons/auth/email.svg" alt="">
      </InputAuth>
      <div class="size_7" v-if="regErrs.email" style="color: var(--pink-color); margin-top: -10px; margin-bottom: 10px;">
        {{ regErrs.email }} </div>
      <InputAuth style="margin-bottom: 15px;" :placeholder="'Введите пароль'" v-model="password"
        v-bind="passwordValidate">
        <img style="width: 17px; height: 17px;" src="/icons/auth/password.svg" alt="">
      </InputAuth>
      <div class="size_7" v-if="regErrs.password"
        style="color: var(--pink-color); margin-top: -10px; margin-bottom: 10px;">
        {{ regErrs.password }} </div>
      <ButtonPurpleLg style="margin-top: 15px;" @click="onSumbit">Зарегистрироваться</ButtonPurpleLg>
    </div>
    <span style="margin-bottom: 2px; color: var(--black-color);" class="size_6">У вас уже есть аккаунт?</span>
    <router-link class="link size_6" :to="AUTH_ROUTE">Войдите</router-link>
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
}
</style>