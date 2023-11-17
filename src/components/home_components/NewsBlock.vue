<script setup lang="ts">
import useNews from '@/hooks/useNews';
const {home} = useNews()
</script>

<template>
  <div v-for="news in home" :key="news.id" class="news_block">
    <div class="img_item">
      <img class="img" :src="news.img" alt="">
    </div>
    <div class="text_block">
      <h1 class="size_4">{{ news.title }}</h1>
      <p class="size_7">{{ news.body }}</p>
      <div class="bottom_section">
        <div class="date">
          <img :src="news.svg" alt="">
          {{ news.date }}
        </div>
        <div class="views">
          <img :src="news.viewsvg" alt="">
          {{ news.views }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news_block {
  max-width: 350px;
  width: 100%;
  min-height: 393px !important;
  border-radius: 10px;
  background: var(--btn-gray-color);
  overflow: hidden;

  .img_item {
    width: 350px;
    height: 186px;
    overflow: hidden;
    position: relative;

    .img {
      top: -15px;
      width: 350px;
      height: 234px;
      position: absolute;
    }
  }

  .text_block {
    display: flex;
    flex-direction: column;
    padding: 26px 20px 26px 20px;

    & h1 {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--black-color);
      margin-bottom: 11px;
    }

    & p {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
      margin-bottom: 18px;
    }
  }

  .bottom_section {
    display: flex;
    align-items: center;
    gap: 25px;

    .date {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);

      & img {
        width: 18px;
        height: 18px;
      }
    }

    .views {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
    }
  }
}

@media screen and (max-width: 890px) {
  .news_block {
    max-width: 100%;
    min-height: unset !important;
    padding-top: 20px;

    .img_item {
      border-radius: 10px;
      margin: 0 auto;
      padding-right: 20px;

      .img {
        // width: 100%;
        border-radius: 10px;
      }
    }

    .text_block {
      text-align: center;
    }

    .bottom_section {
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 824px) {
  .news_block {
    max-width: 100%;
    padding-top: 0;

    .img_item {
      width: 100%;

      .img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 685px) {
  .news_block {
    .img_item {
      .img {
        height: 214px;
      }
    }
  }
}
@media screen and (max-width: 670px) {
  .news_block {
    .img_item {
      .img {
        height: 207px;
      }
    }
  }
}

@media screen and (max-width: 572px) {
  .news_block {
    .img_item {
      .img {
        height: 180px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .news_block {
    .img_item {
      .img {
        height: 238px;
      }
    }
  }
}
@media screen and (max-width: 435px) {
  .news_block {
    .img_item {
      .img {
        height: 225px;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .news_block {
    .img_item {
      .img {
        height: 200px;
      }
    }
  }
}
@media screen and (max-width: 390px) {
  .news_block {
    .img_item {
      .img {
        top: 0;
        height: 180px;
      }
    }
  }
}
</style>