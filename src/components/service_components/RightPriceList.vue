<script setup lang="ts">
interface IPrice {
  id: number;
  title: string;
  price: number;
}
const items: IPrice[] = [
  {
    id: 1,
    title: 'Замена/установка контроллера',
    price: 1500
  },
  {
    id: 2,
    title: 'Замена/установка батареи',
    price: 1500
  },
  {
    id: 3,
    title: 'Замена/установка деки',
    price: 1500
  },
  {
    id: 4,
    title: 'Замена/установка резиновой накладки на деку',
    price: 1500
  },
  {
    id: 5,
    title: 'Замена/установка руля',
    price: 1500
  },
  {
    id: 6,
    title: 'Замена/установка складного механизма',
    price: 1500
  },
  {
    id: 7,
    title: 'Замена/установка зарядного порта',
    price: 1500
  },
  {
    id: 8,
    title: 'Замена/установка дисплейного модуля',
    price: 1500
  }
]
</script>

<template>
  <div class="right">
    <div class="elements">
      <div v-for="item in items" :key="item.id" class="item">
        <span class="size_6">
          {{ item.title }}
        </span>
        <span class="size_6">
          от {{ new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "rub",
          }).format(item.price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right {
  min-height: 439px;
  max-width: 730px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--gray-200-color);

  .elements {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;
      border-bottom: 1px solid var(--gray-200-color);

      &:last-child {
        border-bottom: unset;
      }

      & span {
        &:first-child {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }
        &:last-child {
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: var(--black-color);
        }
      }
    }
  }
}</style>