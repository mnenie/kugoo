<script setup lang="ts">
import { useUser } from '@/stores/user';
const user = useUser()
</script> 

<template>
  <div class="container">
    <div class="success_auth">
      <div class="form">
        <h2 class="size_2 title"><span style="color: var(--purple-color);">KUGOO</span> user_{{ user.idUser }}</h2>
        <span class="size_6" style="color: var(--black-color); margin-bottom: 15px;">Вы успешно зарегистрировались на сайте</span>
        <ButtonPurpleLg style="margin-top: 0px; width: 100%;" @click="user.userLogout">Выйти</ButtonPurpleLg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.success_auth {
  margin: 50px 0 100px 0;
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
}
@media screen and (max-width: 992px){
  .success_auth{
    margin: 30px 0 90px 0;
  }
}
@media screen and (max-width: 600px){
  .success_auth{
    margin: 40px 0 180px 0;
  }
}
</style>