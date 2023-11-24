<script setup lang="ts">
import ButtonPurpleLg from '@/components/UI/ButtonPurpleLg.vue';
import { useModal } from 'vue-final-modal';
import ModalGidroisolation from '@/components/UI/ModalGidroisolation.vue';
const items = [
  {
    id: 1,
    img: '/icons/service/check.svg',
    name: '600 руб. в одну сторону'
  },
  {
    id: 2,
    img: '/icons/service/check.svg',
    name: '1000 руб. туда-обратно'
  },
]
const {open, close} = useModal({
  component: ModalGidroisolation,
  attrs: {
    title: 'Закажите доставку в сервисный центр',
    about: 'Менеджер свяжется с вами в течение 5 минут, чтобы уточнить детали доставки',
    btnTitle: 'Заказать доставку',
    onClose(){
      close()
    },
    onConfirm(){
      close();
    }
  }
})
</script>

<template>
  <div class="container_lg">
    <div class="delivery">
      <div class="container">
        <div class="content">
          <h1 class="size_1">Заберем ваш самокат для ремонта и вернем обратно</h1>
          <p class="size_6 p_1">Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
          <p class="size_5 p_2">Что дает гидроизоляция:</p>
          <div class="blocks">
            <div v-for="item in items" :key="item.id" class="block">
              <img :src="item.img" alt="">
              <span class="size_6">{{ item.name }}</span>
            </div>
          </div>
          <!-- <div class="block_crown">
            <span class="size_6">
              Для владельцев версии VIP —
            </span>
            <div class="block_crown_inside">
              <span class="size_6">услуга бесплатна.</span>
            </div>
            <img src="/icons/service/crown.png" alt="" class="img_crown">
          </div> -->
          <ButtonPurpleLg @click="open" style="align-self: flex-start;">Заказать доставку</ButtonPurpleLg>
        </div>
      </div>
      <img class="img" src="/img/dron.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delivery {
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 82px 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;

  .content {
    position: relative;
    z-index: 101;
    display: flex;
    flex-direction: column;
    max-width: 544px;
    width: 100%;
    color: var(--black-color);

    .block_crown {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 7px 8px 35px;
      border-radius: 10px;
      background: var(--white-color);
      max-width: 413px;
      width: 100%;
      position: relative;
      margin-bottom: 30px;

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--black-color);
      }
      &_inside {
        border-radius: 10px;
        background: var(--btn-gray-color);
        padding: 4px 6px;

        & span {
          font-weight: 500;
        }
      }

      .img_crown {
        position: absolute;
        width: 44.954px;
        height: 44.954px;
        transform: rotate(-12.135deg);
        z-index: 10;
        left: -22px;
        top: -5px;
      }
    }

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 7px;
    }

    .p_1 {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 33px;
    }

    .p_2 {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 16px;
    }

    .blocks {
      display: flex;
      align-items: center;
      gap: 46px;
      margin-bottom: 33px;

      .block {
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
          width: 20px;
          height: 20px;
        }

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  .img {
    position: absolute;
    width: 1143.266px;
    height: 817.753px;
    transform: rotate(-6.377deg);
    right: -350px;
    top: -55px;
  }
}

@media screen and (max-width: 1380px) {
  .delivery {
    .img {
      width: 1000px;
      height: 700px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .delivery {
    padding: 50px 0;
    margin-bottom: 80px;

    .img {
      width: 850px;
      height: 600px;
      right: -300px;
    }
  }
}

@media screen and (max-width: 992px) {
  .delivery {
    padding: 40px 0;

    .img {
      width: 700px;
      height: 500px;
      right: -200px;
      top: -20px;
    }
  }
}

@media screen and (max-width: 890px) {
  .delivery {
    .img {
      width: 600px;
      height: 400px;
      right: -250px;
      top: 0px;
    }
  }
}

@media screen and (max-width: 768px) {
  .delivery {
    .content {
      max-width: 480px;
    }
  }
}

@media screen and (max-width: 700px) {
  .delivery {
    padding: 30px 0;

    .img {
      width: 500px;
      height: 350px;
      right: -200px;
      top: 0px;
    }
  }
}

@media screen and (max-width: 650px) {
  .delivery {
    .content {
      max-width: 365px;

      .blocks {
        gap: 20px;
      }
    }

    .img {
      width: 450px;
      height: 300px;
      right: -200px;
      top: 30px;
    }
  }
}

@media screen and (max-width: 600px) {
  .delivery {
    .content {
      max-width: 320px;
    }
  }
}
</style>