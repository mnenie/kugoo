<script setup lang="ts">
import { ul4, ul5 } from '@/mocks/maxversion';
const blocks = [
  { id: 1, title: 'Ремонт в приоритетном порядке', body: 'Ваш электросамокат будет ремонтироваться в первую очередь. При наличии нужной запчасти время ремонта может составлять до 3 часов.' },
  { id: 2, title: 'Бесплатное ТО', body: 'Ежегодное бесплатное техническое обслуживание вашего транспорта на протяжении 2 лет в наших сервисных центрах в Москве, Санкт-Петербурге и Краснодаре.' },
]

</script>

<template>
  <div class="bottom">
    <div class="blocks">
      <div class="block">
        <h2 class="size_4 h_1">Скидка 10% на ремонт и запчасти</h2>
        <p class="size_7">Вы получаете бессрочную скидку 10%:</p>
        <div class="items">
          <div v-for="i in ul4" :key="i.id" class="item">
            <img :src="i.img" alt="">
            <span class="size_7">{{ i.title }}</span>
          </div>
        </div>
      </div>
      <div class="block">
        <h2 class="size_4 h_2">Дополнительные услуги</h2>
        <p class="size_7">Дополнительно вы можете заказать:</p>
        <div class="items">
          <div v-for="i in ul5" :key="i.id" class="item">
            <img :src="i.img" alt="">
            <span class="size_7">{{ i.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="blocks_3">
      <div v-for="i in blocks" :key="i.id" class="block_34">
        <h2>{{ i.title }}</h2>
        <span>{{ i.body }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .blocks {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  .block {
    display: flex;
    flex-direction: column;

    & h2 {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--black-color);
    }

    & p {
      margin-bottom: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
      white-space: nowrap;
    }

    .h_1 {
      margin-bottom: 20px;
      max-width: 200px;
    }

    .h_2 {
      margin-bottom: 44px;
    }
  }

  .blocks_3 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    .block_34 {
      width: 253px;
      display: flex;
      flex-direction: column;

      &:last-child {
        & h2 {
          margin-bottom: 45px;
        }
      }

      & h2 {
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
        margin-bottom: 20px;
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

.items {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;

    & img {
      width: 10px;
      height: 10px;
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      color: var(--black-color);
    }
  }
}

@media screen and (max-width: 1200px) {
  .items {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .bottom {
    flex-direction: column;
    gap: 50px;

    .blocks {
      .block {
        .h_1 {
          margin-bottom: 20px;
          max-width: unset;
        }

        .h_2 {
          margin-bottom: 20px;
        }
      }
    }

    .blocks_3 {
      .block_34 {
        width: unset;

        &:last-child {
          & h2 {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 745px){
  .bottom{
    .blocks_3{
      flex-direction: column;
      .block_34{
        text-align: center;
        align-items: center;
      }
    }
  }
}
</style>