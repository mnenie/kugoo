<script setup lang="ts">

</script>

<template>
  <div class="bottom_part">
    <p class="size_5">Выбирайте подходящий способ оплаты</p>
    <div class="blocks">
      <span class="size_6"><span style="font-weight: 500;">Наложенным платежом</span> при получении в отделениях CDEK с
        предоплатой за доставку: наличными или
        картой</span>
      <span class="size_6"><span style="font-weight: 500;">При 100% предоплате:</span> онлайн на сайте, или через
        интернет-банк по счету</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom_part {
  display: flex;
  flex-direction: column;
  gap: 33px;

  .blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);

      &:first-child {
        max-width: 326px;
      }

      &:nth-child(2) {
        max-width: 313px;
      }
    }
  }
}

@media screen and (max-width: 970px) {
  .bottom_part {
    .blocks {
      & span {
        &:first-child {
          max-width: 220px;
        }

        &:nth-child(2) {
          max-width: 280px;
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .bottom_part {
    .blocks {
      & span {
        &:first-child {
          max-width: 195px;
        }

        &:nth-child(2) {
          max-width: 182px;
        }
      }
    }
  }
}

@media screen and (max-width: 610px) {
  .bottom_part {
    .blocks {
      & span {
        &:first-child {
          max-width: 150px;
        }
      }
    }
  }
}
</style>