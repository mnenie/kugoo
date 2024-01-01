<script setup lang="ts">
</script>

<template>
  <div class="cycle"> 
    <div class="container">
      <div class="content">
        <div class="text">
          <h1 class="size_1">Покупайте товар тогда, когда получите
            на него заказ и оплату от своего клиента
          </h1>
          <p class="size_5">За 4 года разработали удобную схему дропшипинга</p>
        </div>
        <img src="/img/cooperation/frame.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cycle {
  margin-bottom: 100px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
      width: 100%;
      height: 100%;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        text-align: center;
        max-width: 856px;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .cycle {
    margin-bottom: 80px;
  }
}

</style>