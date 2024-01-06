<script setup lang="ts">
import InputForm from '@/components/UI/InputForm.vue';
import TextArea from '@/components/UI/TextArea.vue'
import { ref } from 'vue';
import { useWays } from '@/stores/ways';

const ways = useWays()

const lastname = ref<string>('')
const name = ref<string>('')
const email = ref<string>('')
const number = ref<string | number>('')

</script>

<template>
  <div class="form_user">
    <p class="size_4"><span style="color: var(--purple-color);">Шаг 2.</span> Укажите данные получателя</p>
    <div class="inputs">
      <div class="input">
        <label class="size_8">Ваша фамилия:</label>
        <InputForm :placeholder="'Введите фамилию'" v-model="lastname" style="width: 100%;"
          :style="'letter-spacing: 0px;'" v-bind="ways.lastname" />
        <div class="size_7" style="color: var(--pink-color); margin-top: 2px; margin-bottom: 10px;">{{ ways.errors.lastname }}
        </div>
      </div>
      <div class="input">
        <label class="size_8">Ваше имя:</label>
        <InputForm :placeholder="'Введите имя'" v-model="name" style="width: 100%;"
          :style="'letter-spacing: 0px;'" v-bind="ways.name" />
        <div class="size_7" style="color: var(--pink-color); margin-top: 2px; margin-bottom: 10px;">{{ ways.errors.name }}
        </div>
      </div>
      <div class="input">
        <label class="size_8">Ваш телефон:</label>
        <InputForm :placeholder="'+7 (___) __ - __ - __'" v-model="number" style="width: 100%;"
           v-bind="ways.phone" />
        <div class="size_7" style="color: var(--pink-color); margin-top: 2px; margin-bottom: 10px;">{{ ways.errors.phone }}
        </div>
      </div>
      <div class="input">
        <label class="size_8">Ваш email:</label>
        <InputForm :placeholder="'Введите email'" v-model="email" style="width: 100%;"
          :style="'letter-spacing: 0px;'" v-bind="ways.email" />
        <div class="size_7" style="color: var(--pink-color); margin-top: 2px; margin-bottom: 10px;">{{ ways.errors.email }}
        </div>
      </div>
    </div>
    <div class="text_area">
      <label class="size_8">Комментарий</label>
      <TextArea />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form_user {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
  }

  .inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    width: 100%;

    .input {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .text_area {
    display: flex;
    flex-direction: column;
  }
}

label {
  margin-bottom: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--black-color);
}
</style>