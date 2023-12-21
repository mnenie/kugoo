<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {TEST_ROUTE} from '@/utils/consts'
const arrElems = ref([
  {
    id: 1,
    title: 'цены от завода-изготовителя Jilong;'
  },
  {
    id: 2,
    title: 'бесплатный тест-драйв самокатов;'
  },
  {
    id: 3,
    title: 'фирменную гарантию 1 год;'
  },
  {
    id: 4,
    title: 'ремонт и обслуживание от 1 дня в собственном сервисном центре;'
  },
  {
    id: 5,
    title: 'более 1 000 запчастей и аксессуаров в наличии'
  },
])
const router = useRouter();
</script>

<template>
  <div class="container_lg">
    <div class="about_block">
      <div class="img_block">
        <img src="/img/about.png" alt="">
        <div class="form_img">
          <h1 class="size_5">Тест-драйв в Москве</h1>
          <p class="size_6">Оцените все преимущества самокатов лично</p>
          <ButtonToPurple @click="router.push(TEST_ROUTE)">
            Подробнее
          </ButtonToPurple>
        </div>
      </div>
      <div class="about_content">
        <h1 class="size_1">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h1>
        <p class="size_6">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь.
          Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному
          обслуживанию.</p>
        <div class="form">
          <p>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
          <ul>
            <li v-for="arr in arrElems" :key="arr.id">{{ arr.title }}</li>
          </ul>
          <router-link class="route" to="/">Смотреть сертификат</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about_block {
  margin-bottom: 100px;
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 29px 28px 29px 28px;
  display: flex;
  gap: 70px;
  align-items: center;

  .img_block {
    position: relative;
    width: 640px;
    height: 565px;
    overflow: hidden;
    border-radius: 10px;

    & img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      width: 848px;
      height: 565px;
      z-index: 0;
    }

    .form_img {
      position: absolute;
      z-index: 1;
      bottom: 20px;
      right: 30px;
      max-width: 233px;
      padding: 17px 0 0 0;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.20);
      backdrop-filter: blur(5px);

      & h1 {
        padding-left: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--white-color);
        margin-bottom: 5px;
      }

      & p {
        padding-left: 21px;
        font-style: normal;
        font-weight: 400;
        line-height: 121.5%;
        color: var(--white-color);
        margin-bottom: 15px;
      }
    }
  }

  .about_content {
    display: flex;
    flex-direction: column;
    max-width: 540px;
    justify-content: flex-end;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      margin-bottom: 18px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
      margin-bottom: 40px;
    }

    .form {
      border-radius: 10px;
      background: var(--white-color);
      padding: 20px 30px 20px 23px;

      & p {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
        margin-bottom: 13px;
      }

      & ul {
        list-style-image: url(../icons/arrowli.svg);
        padding-left: 10px;
        margin-bottom: 13px;

        & li {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
          padding-left: 11px;
        }
      }

      .route {
        text-decoration: none;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--purple-color);
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .about_block{
    gap: 50px;
    flex-direction: column;
    .img_block{
      overflow: unset;
      .form_img{
        right: -76px;
      }
      & img{
        border-radius: 10px;
      }
    }
    .about_content{
      max-width: unset;
    }
  }
}
@media screen and (max-width: 1080px){
  .about_block{
    .img_block{
      overflow: hidden;
      .form_img{
        right: 30px;
      }
    }
  }
}
@media screen and (max-width: 992px){
  .about_block{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 768px){
  .about_block{
    .about_content{
      & h1, .size_6{
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .about_block{
    .img_block{
      max-width: 640px;
      width: 100%;  

      & img{

      }
    }
  }
}
@media screen and (max-width: 992px){
  .about_block{
    margin-bottom: 60px;
  }
}
</style>