<script setup lang="ts">
const goToInst = () => {
  const externalSiteUrl: string = 'https://www.instagram.com/kugoo_russia_com/';
  window.open(externalSiteUrl, '_blank');
}
</script>

<template>
  <div class="not_found_block">
    <div class="container_lg">
      <div class="content">
        <div class="container">
          <div class="text">
            <h1 class="size_1">Страница не найдена</h1>
            <p class="size_7">Кажется, что-то пошло не так!
              Запрашиваемая страница не существует.
              Возможно, она устарела или была удалена.</p>
            <ButtonNotFound @click="goToInst" style="margin-bottom: 9px;">Перейти в Instagram</ButtonNotFound>
            <span class="size_8">или позвоните нам, чтобы сообщить об ошибке
              +7 (800) 505-54-61</span>
          </div>
        </div>
        <div class="num">404</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not_found_block {
  margin-bottom: 30px;

  .content {
    padding: 72px 0 55px 0;
    position: relative;
    border-radius: 10px;
    background: linear-gradient(88deg, #3B3E46 33%, rgba(111, 115, 238, 0.00) 65.45%);
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url('/img/notfound/main.png') no-repeat right top;
      z-index: -3;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url('/img/notfound/main_2.png') no-repeat right top;
      z-index: -1;
    }

    .num {
      position: absolute;
      font-size: 228.214px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      background: linear-gradient(246deg, #FFF 17.58%, #ABABAB 82.05%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: -2;
      top: 30px;
      right: 210px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        margin-bottom: 14px;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--white-color);
        margin-bottom: 22px;
        max-width: 298px;
      }

      & span {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.7;
        color: var(--white-color);
        max-width: 193px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .not_found_block {
    .content {
      &::after {
        right: -100px;
      }

      &::before {
        right: -100px;
      }

      .num {
        right: 100px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .not_found_block {
    .content {
      &::after {
        right: -150px;
      }

      &::before {
        right: -150px;
      }

      .num {
        top: 50px;
        right: 100px;
        font-size: 200px;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .not_found_block {
    .content {
      &::after {
        right: -200px;
      }

      &::before {
        right: -200px;
      }

      .num {
        right: 50px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .not_found_block {
    .content {
      padding: 60px 0;

      &::after {
        right: -250px;
      }

      &::before {
        right: -250px;
      }

      .num {
        right: 0px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .not_found_block {
    .content {
      padding: 50px 0;

      &::after {
        right: -300px;
      }

      &::before {
        right: -300px;
      }

      .num {
        top: 10px;
        right: -20px;
      }
    }
  }
}</style>