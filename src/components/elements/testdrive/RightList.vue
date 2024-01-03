<script setup lang="ts">
const items = [
  { id: 1, svg: '/icons/testdrive/check.svg', title: 'подходит ли вам конкретная модель;', strong: 'Понять' },
  { id: 2, svg: '/icons/testdrive/check.svg', title: 'самокат в «реальной жизни»;', strong: 'Испытать' },
  { id: 3, svg: '/icons/testdrive/check.svg', title: 'удобство хранения и эксплуатации;', strong: 'Оценить' },
  { id: 4, svg: '/icons/testdrive/check.svg', title: 'реальные характеристики и возможности модели.', strong: 'Узнать' },
]
</script>

<template>
  <div class="right_list">
    <div class="container_lg">
      <div class="container_left">
        <div class="blocks">
          <div class="text">
            <h1 class="size_1">Определите максимально подходящую вам модель
              не теоретически, а на практике</h1>
            <p class="size_4">Тест-драйв поможет:</p>
            <div class="list">
              <div v-for="item in items" :key="item.id" class="item">
                <img :src="item.svg" alt="">
                <span class="size_5"><span class="inside">{{ item.strong }} </span> {{ item.title }}</span>
              </div>
            </div>
          </div>
          <div class="img">
            <img src="/img/testdrive/1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right_list {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .img {
      width: 515px;
      min-width: 450px;
      height: 422px;
      object-fit: cover;

      & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .text {
      display: flex;
      flex-direction: column;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        margin-bottom: 30px;
        max-width: 645px;
      }

      & p {
        margin-bottom: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .item {
          display: flex;
          gap: 10px;
          align-items: center;

          & img {
            width: 22px;
            height: 22px;
          }

          & span {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--black-color);

            .inside {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .right_list {
    .blocks {
      flex-direction: column;

      .text {
        align-items: center;

        & h1 {
          text-align: center;
          max-width: unset;
        }

        .list {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .right_list {
    .blocks {
      .img {
        width: 400px;
        min-width: 400px;
        height: 350px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .right_list {
    margin-bottom: 80px;
  }
}</style>