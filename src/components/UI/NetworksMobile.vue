<script setup lang="ts">
const imgs = [
  {
    id: 1,
    img: '/icons/service/viber.svg'
  },
  {
    id: 2,
    img: '/icons/service/whatsapp.svg'
  },
  {
    id: 3,
    img: '/icons/service/tg.svg'
  },
]
</script>

<template>
  <div class="text">
    <div class="socials">
      <div v-for="img in imgs" :key="img.id" class="social">
        <img :src="img.img" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {

  .socials {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    .social {
      border-radius: 5px;
      border: 1px solid var(--gray-200-color);
      width: 78px;
      height: 53px;
      display: flex;
      align-items: center;

      & img {
        display: block;
        margin: 0 auto;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>