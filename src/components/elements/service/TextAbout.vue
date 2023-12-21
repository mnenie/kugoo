<script setup lang="ts">
const props = defineProps<{
  list: any[],
  text: {
    title: string,
    title1: string,
    about: string,
    name: string,
    last: string,
  },
  style: string
}>()
</script>

<template>
  <div :style="style" class="text">
    <h2 class="size_3">{{ text.title }}</h2>
    <p class="size_6 p_first">{{ text.title1 }}</p>
    <span class="size_7 span_first">{{ text.about }}</span>
    <div class="list">
      <p class="size_6">{{ text.name }}</p>
      <div class="list_blocks">
        <div v-for="i in list" :key="i.id" class="block">
          <img :src="i.img" alt="">
          <span class="size_7">{{ i.title }}</span>
        </div>
      </div>
    </div>
    <span class="size_7">{{ text.last }}</span>
  </div>
</template>

<style lang="scss" scoped>
.text {
  display: flex;
  flex-direction: column;
  // width: 100%;
  color: var(--black-color);

  & h2 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  .p_first {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .span_first {
    margin-bottom: 23px;
  }

  .list {
    & p {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 15px;
    }

    .list_blocks {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 20px;

      .block {
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
}
</style>