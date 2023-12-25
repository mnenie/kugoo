<script setup lang="ts">
const items = [
  { id: 1, span: 'До', scale: '25%', body: 'ваша прибыль с продажи единицы товара Kugoo' },
  { id: 2, span: 'От', scale: '3 шт.', body: 'минимальная оптовая партия' },
]
</script>

<template>
  <div class="blocks">
    <div v-for="item in items" :key="item.id" class="block">
      <span class="size_7 main">{{ item.span }} <h3 class="size_3">{{ item.scale }}</h3></span>
      <span class="size_8 inside">{{ item.body }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: center;
  gap: 20px;

  .block {
    width: 188px;
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--btn-gray-color);
    flex-direction: column;
    padding: 15px 17px 19px 17px;

    .main {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--purple-color);
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 8px;

      & h3 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--purple-color);
      }
    }

    &:last-child {
      .inside {
        max-width: 88px;
      }
    }

    .inside {
      text-align: center;
      color: var(--black-color);
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
    }
  }
}
@media screen and (max-width: 790px){
  .blocks{
    width: 100%;
    justify-content: center;
    .block{
      max-width: 300px;
      width: 100%;
      &:last-child{
        .inside{
          max-width: 80px;
        }
      }
      .inside{
        max-width: 200px;
      }
    }
  }
}
</style>