<script setup lang="ts">
import { ref } from 'vue';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import downloadExcelHelper from '@/helpers/downloadExcelHelper';


const place = ref<string>('+7 (___) __ - __ - __')
const phoneValue = ref<string>('')
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: yup.object({
    phone: yup.string()
      .required('*Обязательное поле')
      .matches(/^(\+7|8)([-]?[\s]?)?(\()?\d{3}(\))?([-]?[\s]?)?\d{3}([-]?[\s]?)?\d{2}([-]?[\s]?)?\d{2}$/, '*Вы ввели неправильный номер телефона'),
  }),
});
const {downlandExcel} = downloadExcelHelper()
const onSubmit = async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    await downlandExcel()
  }
};
const phone = defineInputBinds('phone');
</script>

<template>
  <div class="line">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="block">
            <p class="size_6">Давайте обсудим условия сотрудничества, которые подходят именно для вашей компании</p>
            <form @submit.prevent="onSubmit">
              <div class="input_form">
                <input-purple class="input" :placeholder="place" v-bind="phone" v-model="phoneValue" />
                <span>{{ errors.phone }}</span>
              </div>
              <btn-large-white class="btn">Скачать прайс-лист</btn-large-white>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  margin-bottom: 100px;

  .content {
    border-radius: 10px;
    background: var(--purple-color);
    padding: 39px 0 34px 0;

    .block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      & p {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        max-width: 461px;
      }

      & form {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 20px;
        justify-content: flex-end;

        .input_form {
          position: relative;
          max-width: 270px;
          width: 100%;

          .input {
            max-width: 270px;
            width: 100%;
            height: 53px;
          }

          & span {
            color: var(--white-color);
            position: absolute;
            right: 2px;
            top: 0px;
            font-size: 10px;
          }
        }

        .btn {
          height: 53px;
          max-width: 230px;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .line {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 992px) {
  .line {
    .content {
      .block {
        flex-direction: column;
        align-items: center;

        & p {
          text-align: center;
        }

        & form {
          justify-content: center;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .line {

    .content {
      .block {
        & form {
          flex-direction: column;
          align-items: center;
          width: 100%;

          .input_form {
            max-width: 410px;

            .input {
              max-width: 410px;
            }
          }

          .btn {
            max-width: 410px;
          }
        }
      }
    }
  }
}
</style>