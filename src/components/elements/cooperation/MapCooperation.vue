<script setup lang="ts">

</script>

<template>
  <div class="map">
    <div class="container">
      <div class="content">
        <div class="text">
          <h1 class="size_1">Доставляем со складов по <span>Москве, Краснодару и минску бесплатно,</span> по России —
            любой
            транспортной компанией на ваш выбор
          </h1>
          <p class="size_5">Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов. Всегда в наличии на
            складах весь ассортимент, представленный в каталоге.</p>
        </div>
      </div>
    </div>
    <div class="container_lg">
      <div class="img">
        <img src="/icons/cooperation/map.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  margin-bottom: 132px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        margin-bottom: 20px;
        max-width: 978px;
        width: 100%;
        text-align: center;

        & span {
          color: var(--purple-color);
        }
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
        text-align: center;
        max-width: 664px;
        width: 100%;
      }
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    & img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1200px) {
  .map {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 992px) {
  .map {
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 600px) {
  .map {
    margin-bottom: 80px;
  }
}
</style>