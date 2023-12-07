<script setup lang="ts">
import { ref } from 'vue';

const modal = 'modalphone2'
const place = ref('+7 (___) __ - __ - __')
</script>

<template>
  <modal-lg :modal="modal">
    <div class="modal_phone">
      <div class="text_content">
        <h1>Менеджер позвонит вам в течение 5 минут</h1>
        <p>ответит на все вопросы и проконсультирует по продуктам Kugoo</p>
        <form @submit.prevent style="max-width: 263px; width: 100%; display: flex; flex-direction: column">
          <input-form :placeholder="place" style="margin-bottom: 19px;" />
          <btn-purple-lg data-bs-dismiss="modal" style="margin-bottom: 16px;">Да, нужна консультация</btn-purple-lg>
          <div class="check_block">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
              <router-link class="route" to="/">политикой конфиденциальности</router-link>
            </label>
          </div>
        </form>
      </div>
      <img class="img" src="/img/womanmodal.png" alt="">
      <div class="circle"></div>
    </div>
  </modal-lg>
</template>

<style lang="scss" scoped>
.modal_phone {
  position: relative;
  overflow: hidden;
  padding: 40px;
  z-index: 2;

  .img {
    position: absolute;
    right: 70px;
    bottom: 0;
    z-index: 1;
  }

  .circle {
    position: absolute;
    right: -320px;
    bottom: -400px;
    width: 742px;
    height: 742px;
    border-radius: 742px;
    background: var(--btn-gray-color);
    z-index: 0;
  }
}

.text_content {
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    max-width: 355px;
    color: var(--black-color);
    margin-bottom: 16px;
  }

  & p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--black-color);
    max-width: 311px;
    margin-bottom: 35px;
  }
}

.check_block {
  display: flex;
  gap: 12px;

  & input {
    margin-top: 5px;
  }

  & label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: var(--black-color);

    .route {
      color: var(--purple-color);
      text-decoration: none;
    }
  }
}
</style>