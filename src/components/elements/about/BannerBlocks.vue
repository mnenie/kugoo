<script setup lang="ts">
const items = [
  { id: 1, title: 'Работаем с', body: '2017 г' },
  { id: 2, title: 'Специалистов в штате', body: '35' },
  { id: 3, title: 'Клиентов по России и странам СНГ', body: '2 000' },
]
</script>

<template>
  <div class="blocks">
    <div v-for="item in items" :key="item.id" class="block">
      <span class="size_7">{{ item.title }}</span>
      <p class="size_3">{{ item.body }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: flex-end;
  gap: 43px;

  .block {
    display: flex;
    flex-direction: column;
    color: var(--white-color);

    &:first-child {
      gap: 18px;
    }

    &:nth-child(2) {
      max-width: 84px;
    }

    &:last-child {
      max-width: 126px;
    }
  }
}

@media screen and (max-width: 992px) {
  .blocks {
    gap: 30px;
  }
}

@media screen and (max-width: 650px) {
  .blocks {
    .block {
      &:first-child {
        gap: 14px;
      }

      &:nth-child(2) {
        max-width: 70px;
      }

      &:last-child {
        max-width: 126px;
      }
    }
  }
}</style>