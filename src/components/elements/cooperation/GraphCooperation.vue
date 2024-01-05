<script setup lang="ts">

</script>

<template>
  <div class="graph_block">
    <div class="container">
      <div class="blocks">
        <div class="text">
          <h1 class="size_1">Kugoo — самый популярный бренд электротранспорта в России</h1>
          <p class="size_6">Количество поисковых запросов от потенциальных клиентов в 2020 г. по сравнению с 2019 г.
            выросло в 2 раза согласно сервису оценки спроса и популярности.</p>
          <p class="size_6">Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос на продукцию от завода
            Jilong выше в несколько раз.</p>
        </div>
        <div class="img">
          <img src="/img/cooperation/metric.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.graph_block {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: var(--black-color);
      max-width: 430px;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .img {
      width: 573px;
      height: 326px;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: 0 10px 40px #41464c12;

      & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .graph_block {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 1070px) {
  .graph_block {
    .blocks {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .text {
        max-width: unset;
        align-items: center;

        & h1 {
          text-align: center;
        }
        & p{
          text-align: center;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .graph_block {
    .blocks {
      .img {
        width: 100%;
        height: 100%;
      }

    }
  }
}
@media screen and (max-width: 600px) {
  .graph_block {
    margin-bottom: 60px;
  }
}
</style>