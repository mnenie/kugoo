<script setup lang="ts">
import { ref } from 'vue';
import ButtonPurpleLg from '@/components/UI/ButtonPurpleLg.vue';
import { useRouter } from 'vue-router';

const prices = ref([
  { id: 1, title: 'Стоимость товаров', price: '106 680 ₽' },
  { id: 2, title: 'Сумма скидки', price: '0 ₽' },
  { id: 3, title: 'Итого без учета доставки', price: '106 680 ₽' },
])
const checked = ref<boolean>(true)
const router = useRouter()
</script>

<template>
  <div class="pay_block">
    <div class="total">
      <span class="size_8">Итого</span>
      <h2 class="size_3">106 680 ₽</h2>
    </div>
    <div class="cost_blocks">
      <div v-for="item in prices" :key="item.id" class="cost_block">
        <span class="size_8">{{ item.title }}</span>
        <p class="size_6">{{ item.price }}</p>
      </div>
    </div>
    <ButtonPurpleLg @click="router.push('/registration')" style="width: 100%;">Оформить заказ</ButtonPurpleLg>
    <div class="check_block">
      <input type="checkbox" :checked="checked" :disabled="checked" id="flexCheckChecked">
      <label class="size_8" for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
        <router-link class="route" to="/">политикой конфиденциальности</router-link>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pay_block {
  padding: 20px 27px 25px 27px;
  border-radius: 5px;
  background: var(--btn-gray-color);
  min-height: 367px;
  max-width: 285px;
  width: 100%;

  .total {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    padding-bottom: 11px;
    border-bottom: 1px solid rgba(40, 39, 57, 0.1);
    margin-bottom: 14px;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }

    & h2 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
    }
  }

  .cost_blocks {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(40, 39, 57, 0.1);

    .cost_block {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }

  .check_block {
    max-width: 320px;
    display: flex;
    gap: 12px;
    margin-top: 15px;

    & input {
      margin-top: 5px;
    }

    & label {
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
}
</style>