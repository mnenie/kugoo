<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(1)


const items = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Санкт-Петербург' },
  { id: 3, name: 'Краснодар' },
]
const blocks = [
  { id: 3, title: 'Срочная доставка курьером', body: 'Только по Москве', bottom: 'Стоимость уточняйте у менеджера + 7 (800) 505 54 61' },
  { id: 4, title: 'Служба доставки CDEK', body: 'Регионы России', bottom: 'Стоимость уточняйте у менеджера + 7 (800) 505 54 61' },
]
</script>

<template>
  <div class="delivery">
    <p class="size_4"><span style="color: var(--purple-color);">Шаг 1.</span> Выберите способ доставки</p>
    <div class="blocks">
      <div class="block" :class="[checked === 1 ? 'active' : '']">
        <input v-model="checked" :value="1" :checked="checked === 1" class="input" type="radio">
        <div class="text">
          <div class="title">
            <p class="size_6">Самовывоз из магазина</p>
            <span class="size_8">в Москве</span>
          </div>
          <div class="address">
            <img src="/icons/ways/pin.svg" alt="">
            <span class="size_8">ул. Ткацкая, 5 стр. 16. <br>
              Пн - Вс 10:00 - 20:00. </span>
          </div>
        </div>
      </div>
      <div class="block" :class="[checked === 2 ? 'active' : '']">
        <input v-model="checked" :value="2" :checked="checked === 2" class="input" type="radio">
        <div class="text">
          <div class="title">
            <p class="size_6">Самовывоз из магазина</p>
            <div class="items">
              <div v-for="i in items" :key="i.id" class="item">
                <div class="round"></div>
                <span class="size_8">{{ i.name }}</span>
              </div>
            </div>
          </div>
          <div class="btn">
            <span class="size_8">Бесплатно</span>
          </div>
        </div>
      </div>
      <div v-for="i in blocks" :key="i.id" class="block" :class="[checked === i.id ? 'active' : '']">
        <input v-model="checked" :value="i.id" :checked="checked === i.id" class="input" type="radio">
        <div class="text">
          <div class="title">
            <p class="size_6">{{ i.title }}</p>
            <span class="size_8">{{ i.body }}</span>
          </div>
          <span class="size_8 bottom">{{ i.bottom }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delivery {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  & p {
    font-style: normal;
    font-weight: 500;
    line-height: 119%;
    color: var(--black-color);
  }

  .blocks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}

.block {
  border-radius: 5px;
  background: var(--btn-gray-color);
  border: 1px solid var(--btn-gray-color);
  max-width: 240px;
  width: 100%;
  height: 158px;
  padding: 18px 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .title {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & p {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .address {
      display: flex;
      align-items: flex-start;
      gap: 10px;

      & img {
        width: 15px;
        height: 15px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      gap: 0px;

      .item {
        display: flex;
        align-items: center;
        gap: 10px;

        .round {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--orange-color);
        }
      }
    }
  }

  .bottom {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
  }
}

.input {
  min-width: 16px !important;
  min-height: 16px !important;
  margin-top: 2px !important;
  cursor: pointer;
}

input[type="radio"] {
  accent-color: var(--purple-color);
}

.btn {
  width: 76px;
  height: 23px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--green-color);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  & span {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--white-color);
  }
}

.active {
  border: 1px solid var(--purple-color);
  background: var(--white-color);
}

@media screen and (max-width: 800px) {
  .delivery {
    .blocks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .block{
        max-width: 100%;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .input{
    margin-top: 0 !important;
  }
}
</style>