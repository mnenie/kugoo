<script setup lang="ts">
import { StripeElements, StripeElement } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { onBeforeMount, ref } from 'vue';

let stripeKey = ref(import.meta.env.VITE_API_PUBLIC_KEY_STRIPE)

const stripeLoaded = ref(false)
const elms = ref()
onBeforeMount(() => {
  const stripePromise = loadStripe(stripeKey.value)
  stripePromise.then(() => {
    stripeLoaded.value = true
  })
})

</script>

<template>
  <div class="card_payment">
    <label style="margin-bottom: 5px;" class="size_7">Данные карты</label>
    <StripeElements class="elements" v-slot="{ elements }" ref="elms" :stripe-key="stripeKey">
      <div class="top_card">
        <StripeElement class="cb_top" type="cardNumber" :elements="elements" />
        <div class="imgs">
          <img class="img1" src="/icons/pay3.svg" alt="">
          <img class="img2" src="/icons/pay4.svg" alt="">
          <img class="img3" src="/icons/pay5.svg" alt="">
        </div>
      </div>
      <div class="card_bottom">
        <StripeElement type="cardExpiry" :elements="elements" />
        <div class="cvc">
          <StripeElement class="cb" type="cardCvc" :elements="elements" />
          <img style="width: 27px; height: 24px;" src="/icons/payment/1.png" alt="">
        </div>
      </div>
    </StripeElements>
    <ButtonPurpleLg style="margin-top: 30px; font-size: 14px;">Оплатить</ButtonPurpleLg>
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
  & img{
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