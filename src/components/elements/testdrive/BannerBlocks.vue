<script setup lang="ts">
const items = [
  { id: 1, title: 'Поймете, какая модель вам подходит', icon: '/icons/testdrive/scooter.svg' },
  { id: 2, title: 'Проверите лучшие самокаты в деле', icon: '/icons/testdrive/energy.svg' },
]
</script>

<template>
  <div class="blocks">
    <div v-for="item in items" :key="item.id" class="block">
      <div class="img">
        <img :src="item.icon" alt="">
      </div>
      <span class="size_7">{{ item.title }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-bottom: 40px;

  .block {
    display: flex;
    align-items: center;
    gap: 15px;

    .img {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--white-color);
        opacity: 0.2;
      }

      & img {
        width: 16px;
        height: 16px;
        z-index: 1;
      }
    }

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      color: var(--white-color);
      max-width: 149px;
    }
  }
}
@media screen and (max-width: 720px){
  .blocks{
    gap: 20px;
    .block{
      gap: 10px;
    }
  }
}
@media screen and (max-width: 650px){
  .blocks{
    .block{
      & span{
        max-width: 120px;
      }
    }
  }
}
</style>