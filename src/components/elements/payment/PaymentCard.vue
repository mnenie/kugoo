<script setup lang="ts">
import { StripeElements, StripeElement } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { onBeforeMount, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/stores/cart';

let stripeKey = ref(import.meta.env.VITE_API_PUBLIC_KEY_STRIPE)

const elms = ref()
const card = ref()
const result = ref({
  elementErrors: [],
});
const stripeLoaded = ref(false)
onBeforeMount(async () => {
  await loadStripe(stripeKey.value)
  stripeLoaded.value = true
})
const router = useRouter()
const cart = useCart()

const pay = () => {
  if (elms.value && card.value) {
    const elementsArray = [card.value.stripeElement];
    result.value.elementErrors = [];

    const promises = elementsArray.map((element) => {
      return elms.value.instance.createToken(element)
        .then((tokenResult: object) => {
          if (tokenResult.error && Object.keys(tokenResult.error).length !== 0) {
            result.value.elementErrors.push(tokenResult.error);
          }
          return tokenResult;
        });
    });

    Promise.all(promises)
      .then((results) => {
        const hasErrors = results.some(result => result.error && Object.keys(result.error).length !== 0);
        if (!hasErrors) {
          router.push({ name: 'thanks', params: { id: '5' } });
          cart.removeAllProducts()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

</script>

<template>
  <div class="card_payment">
    <label style="margin-bottom: 5px;" class="size_7">Данные карты</label>
    <StripeElements v-if="stripeLoaded" class="elements" v-slot="{ elements }" ref="elms" :stripe-key="stripeKey">
      <div class="top_card">
        <StripeElement ref="card" class="cb_top" type="cardNumber" :elements="elements" />
        <div class="imgs">
          <img class="img1" src="/icons/pay3.svg" alt="">
          <img class="img2" src="/icons/pay4.svg" alt="">
          <img class="img3" src="/icons/pay5.svg" alt="">
        </div>
      </div>
      <div class="card_bottom">
        <StripeElement ref="card" type="cardExpiry" :elements="elements" />
        <div class="cvc">
          <StripeElement ref="card" class="cb" type="cardCvc" :elements="elements" />
          <img style="width: 27px; height: 24px;" src="/icons/payment/cvc.png" alt="">
        </div>
      </div>
    </StripeElements>
    <div v-show="result.elementErrors.length > 0" style="margin-top: 5px; color: var(--pink-color); font-size: 12px;"
      v-for="elementError in result.elementErrors" :key="elementError" class="error">{{ elementError.message }}
    </div>
    <ButtonPurpleLg @click="pay" style="margin-top: 30px; font-size: 14px;">Оплатить</ButtonPurpleLg>
  </div>
</template>

<style lang="scss" scoped>
.card_payment {
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--btn-gray-color);
  border-radius: 16px;
  max-width: 500px;
  width: 100%;

  .elements {
    display: flex;
    flex-direction: column;
    width: 100%;

    .card_bottom {
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
}

.cvc {
  position: relative;

  .cb {
    position: relative;
  }

  & img {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
}

.top_card {
  position: relative;

  .cb_top {
    position: relative;

  }

  .imgs {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>