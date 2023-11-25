<script setup lang="ts">
const items = [
  { id: 1, svg: "/icons/cooperation/billfold.svg", title: 'Отсутствие демпинга — контроль цен и МРЦ' },
  { id: 2, svg: "/icons/cooperation/box.svg", title: 'Бесплатная доставка до любой ТК' },
  { id: 3, svg: "/icons/cooperation/updatearrow.svg", title: 'Беспроблемный возврат и замена брака' },
  { id: 4, svg: "/icons/cooperation/money.svg", title: 'Франшиза с окупаемостью в первые 6 месяцев' },
]
</script>

<template>
  <div class="items">
    <div v-for="item in items" class="item" :key="item.id">
      <div class="img">
        <img :src="item.svg">
      </div>
      <span class="size_7">{{ item.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  max-width: 520px;

  .item {
    display: flex;
    gap: 15px;
    align-items: center;

    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      min-width: 40px;
      min-height: 40px;
      height: 40px;
      border-radius: 5px;
      background: rgba(111, 115, 238, 0.10);

      & img {
        width: 16px;
        height: 16px;
      }
    }

    & span {
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      color: var(--black-color);
      max-width: 180px;
    }
  }
}

@media screen and (max-width: 992px){
  .items{
    display: flex;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 900px){
  .items{
    display: grid;
    justify-content: center;
    gap: 20px;
    .item{
      max-width: 230px;
      width: 100%;
    }
  }
}
</style>