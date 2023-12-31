<script setup lang="ts">
interface ICheck {
  id: number;
  title: string;
  icon: string;
}
const props = defineProps<{
  items: ICheck[]
}>()
</script>

<template>
  <div class="blocks">
    <div v-for="item in items" :key="item.id" class="block">
      <img :src="item.icon" alt="">
      <span class="size_8">{{ item.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 20px;

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
      font-weight: 500;
      line-height: 15px;
      color: var(--white-color);
    }

    &:first-child {
      & span {
        max-width: 160px;
      }
    }

    &:last-child {
      & span {
        max-width: 230px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .blocks {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 650px) {
  .blocks {
    .block {
      &:last-child {
        & span {
          max-width: 200px;
        }
      }
    }
  }
}</style>