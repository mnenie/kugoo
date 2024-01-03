<script setup lang="ts">
import InputForm from '@/components/UI/InputForm.vue';
import TextArea from '@/components/UI/TextArea.vue'
import { ref } from 'vue';

const lastname = ref<string>('')
const name = ref<string>('')
const email = ref<string>('')
const number = ref<string | number>('')

const inputs = ref([
  { id: 1, label: 'Ваша фамилия:', placeholder: 'Введите фамилию', model: lastname.value, style: 'letter-spacing: 0px;' },
  { id: 2, label: 'Ваше имя:', placeholder: 'Введите имя', model: name.value, style: 'letter-spacing: 0px;' },
  { id: 3, label: 'Ваш телефон:', placeholder: '+7 (___) __ - __ - __', model: number.value },
  { id: 4, label: 'Ваш email:', placeholder: 'Введите email', model: email.value, style: 'letter-spacing: 0px;' },
])
</script>

<template>
  <div class="form_user">
    <p class="size_4"><span style="color: var(--purple-color);">Шаг 2.</span> Укажите данные получателя</p>
    <div class="inputs">
      <div v-for="input in inputs" :key="input.id" class="input">
        <label class="size_8">{{ input.label }}</label>
        <InputForm :placeholder="input.placeholder" v-model="input.model" style="width: 100%;" :style="input.style" />
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
  .text_area{
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