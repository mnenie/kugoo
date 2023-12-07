<script setup lang="ts">
import CategoriesElement from './CategoriesElement.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { CATALOG_ROUTE } from '@/utils/consts';
import useTechnic from '@/hooks/useTechnic';

const title = ref<string>('Смотреть все')

const router = useRouter()
const { home1 } = useTechnic()

</script>

<template>
  <div class="popular_categories">
    <div class="container">
      <div class="categories_display">
        <div class="text_block">
          <h1 class="size_1">Популярные категории</h1>
          <div class="manager_block">
            <div class="img_manager">
              <img src="/img/managersmall.png" alt="">
            </div>
            <div class="text_manager">
              <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
              <a style="cursor: pointer;">Задать вопрос</a>
            </div>
          </div>
        </div>
        <div class="categories">
          <CategoriesElement :categories="home1" />
        </div>
        <btn-more @click="router.push(CATALOG_ROUTE)" style="display: block; margin: 0 auto;">{{ title }}</btn-more>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popular_categories {
  margin-bottom: 100px;
}

.categories_display {
  display: flex;
  flex-direction: column;

  .categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 50px;
  }
}

.text_block {
  margin-bottom: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .manager_block {
    height: 91px;
    border-radius: 5px;
    background: var(--btn-gray-color);
    display: flex;
    align-items: center;
    padding: 10px 16px 10px 10px;
    gap: 19px;

    .img_manager {
      border-radius: 5px;
      position: relative;
      background: var(--orange-color);
      width: 56px;
      height: 71px;
      overflow: hidden;

      & img {
        position: absolute;
        width: 174px;
        height: 116px;
        top: 0px;
        left: -60px;

      }
    }

    .text_manager {
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-width: 178px;

      & p {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }

      & a {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--purple-color);
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .categories_display {
    .categories {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }

  .text_block {
    margin-bottom: 50px;
  }

  .popular_categories {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 992px) {

  .popular_categories {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 820px) {
  .categories_display {
    .categories {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 768px) {
  .text_block {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    .manager_block {
      display: none;
    }
  }
}

@media screen and (max-width: 600px) {
  .popular_categories {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 540px) {
  .categories_display {

    .categories {
      gap: 15px;
      margin-bottom: 30px;
    }
  }
}
</style>