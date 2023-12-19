<script setup lang="ts">
import { ul1, ul2, ul3 } from '@/mocks/maxversion';

</script>

<template>
  <div class="blocks">
    <div class="block">
      <p class="size_7 p_1">Гидроизоляция включает в себя обработку:
      </p>
      <div class="items">
        <div v-for="i in ul1" :key="i.id" class="item">
          <img :src="i.img" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
    <div class="block">
      <p class="size_7  p_2">Сюда входят такие работы как:
      </p>
      <div class="items">
        <div v-for="i in ul2" :key="i.id" class="item">
          <img :src="i.img" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
    <div class="block">
      <p class="size_7  p_3">Предоставим расширенную гарантию на:
      </p>
      <div class="items">
        <div v-for="i in ul3" :key="i.id" class="item">
          <img :src="i.img" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 59px;

  .block {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:last-child {
      margin-left: 26px;
    }

    .p_1 {
      max-width: 250px;
    }

    .p_2 {
      max-width: 136px;
    }

    .p_3 {
      max-width: 188px;
    }

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
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

  .blocks {
    .block {
      &:last-child {
        margin-left: 0;
      }

      .p_1 {
        max-width: unset;
      }

      .p_2 {
        max-width: unset;
      }

      .p_3 {
        max-width: unset;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .blocks{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .items{
    justify-content: center;
  }
}
</style>