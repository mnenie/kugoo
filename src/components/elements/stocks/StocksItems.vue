<script setup lang="ts">
import useStocks from '@/hooks/useStocks';

const { stocks } = useStocks()
</script>

<template>
  <div class="container">
    <div class="items">
      <div class="stocks">
        <div v-for="stock in stocks" :key="stock.id" class="stock">
          <div class="img">
            <img :src="stock.img" alt="">
          </div>
          <div class="text_content">
            <div class="text">
              <span class="size_8">Срок проведения: {{ stock.date }}</span>
              <h3 class="size_5">{{ stock.title }}</h3>
              <p class="size_7">{{ stock.description }}</p>
            </div>
            <ButtonCardPurple class="btn" @click="$router.push({ name: 'thanks', params: { id: '4' } })">Принять участие в
              акции
            </ButtonCardPurple>
          </div>
        </div>
      </div>
      <p class="size_6 bottom_p">Скоро в нашем интернет-магазине появятся новые акции</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.stocks {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;

  .stock {
    border-radius: 10px;
    background: var(--btn-gray-color);
    max-width: 540px;
    width: 100%;
    min-height: 367px;
    display: flex;
    align-items: stretch;
    overflow: hidden;
    position: relative;

    &:last-child {
      & img {
        width: 260px;
        height: 260px;
      }
    }

    .img {
      background: var(--white-color);
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      height: 367px;
      min-width: 285px;
    }

    .text_content {
      padding: 24px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .text {
        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 10px;
          color: var(--gray-600-color);
        }

        & h3 {
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          color: var(--black-color);
          margin-bottom: 6px;
        }

        & p {
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          color: var(--black-color);
        }
      }
    }
  }
}
.bottom_p{
  color: var(--green-color);
  text-align: center;
}

@media screen and (max-width: 1200px){
  .stocks{
    .stock{
      max-width: 100%;
      .text_content{
        align-items: flex-start;
      }
    }
  }
}
</style>