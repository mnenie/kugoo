<script setup lang="ts">
import { ref } from 'vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';

const placeholder = ref<string>('+7 (___) __ - __ - __')
const phoneValue = ref<string>('')
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
  }),
});
const router = useRouter()
const onSubmit = async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    router.push({ name: 'thanks', params: { id: '2' } })
  }
};
const phone = defineInputBinds('phone');
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="btn_content">
      <div class="input_format">
        <InputForm class="input" :placeholder="placeholder" v-model="phoneValue" v-bind="phone" />
        <div class="size_7" style="color: var(--pink-color);">{{ errors.phone }}</div>
      </div>
      <ButtonPurpleLg class="btn">Проконсультироваться</ButtonPurpleLg>
    </div>
    <Checkbox class="check_block" />
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .btn_content {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    .input {
      min-width: 263px;
      width: 100%;
    }
  }
}

@media screen and (max-width: 1020px) {
  .form {
    .btn_content {
      flex-direction: column;
      align-items: flex-start;

      .input {
        width: 100%;
        min-width: 225px;
      }

      .btn {
        max-width: 290px;
        min-width: 225px;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .form {
    .btn_content {
      gap: 15px;
      .input {
        width: 100%;
        min-width: 225px;
      }

      .btn {
        min-width: 225px;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .form {
    .check_block {
      max-width: 270px !important;
    }
  }
}
</style>