<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const emailValue = ref<string>('')
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Некорректный адрес email').required('*Введите email')
  }),
});
const confirmEmail = async () => {
  await validate()
  if (Object.keys(errors.value).length === 0) {
    emailValue.value = ''
  }
}
const email = defineInputBinds('email')
</script>

<template>
  <div class="form_display">
    <div class="container">
      <div class="form_display_content">
        <h1 class="size_5">Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты</h1>
        <div class="form_block">
          <div class="input_container">
            <input-purple v-model="emailValue" placeholder="Введите Ваш email" type="text" v-bind="email"
              style="width: 410px; height: 53px;" />
            <span>{{ errors.email }}</span>
          </div>
          <btn-large-white @click="confirmEmail" style="height: 53px;">Подписаться</btn-large-white>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form_display {
  min-height: 97px;
  background: var(--purple-color);
  padding: 23px 0 21px 0;

  &_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    & h1 {
      max-width: 445px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
    }

    .form_block {
      display: flex;
      align-items: center;
      gap: 20px;
      .input_container{
        display: flex;
        flex-direction: column;
        position: relative;
        & span{
          color: var(--white-color);
          position: absolute;
          right: 5px;
          top: 0px;
          font-size: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .form_display {
    &_content {
      flex-direction: column;

      & h1 {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .form_display {
    &_content {
      .form_block {
        flex-direction: column;
        align-items: unset;
      }
    }
  }
}
</style>