<script setup lang="ts">
interface IBlocks {
  title: string;
  body: string;
  id: number
}

const blocks: IBlocks[] = [
  {
    id: 1,
    title: 'Гарантия 1 год',
    body: 'на весь ассортимент'
  },
  {
    id: 2,
    title: 'рассрочка',
    body: 'от 6 месяцев'
  },
  {
    id: 3,
    title: 'Подарки',
    body: 'и бонусам к покупкам '
  }
]
</script>

<template>
  <div class="blocks">
    <div class="container">
      <div class="blocks_items">
        <div class="blocks-1">
          <div v-for="block in blocks" class="block_item" :key="block.id">
            <span class="size_3">{{ block.title }}</span>
            <span class="size_6">{{ block.body }}</span>
          </div>
        </div>
        <div class="yandex" style="height: 76px;">
          <a target="_blank" href="https://market.yandex.ru/shop--kugoo-russia/1071730/reviews"><img src="/img/yandex.svg"
              alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  margin-bottom: 74px;

  .blocks_items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .blocks-1 {
      display: flex;
      align-items: center;
      gap: 78px;
    }

    .block_item {
      display: flex;
      flex-direction: column;

      & span {
        &:first-child {
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          color: var(--black-color);
          margin-bottom: 1px;
        }

        &:last-child {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: var(--black-color);
        }
      }
    }
  }
}

@media screen and (max-width: 990px) {
  .blocks-1 {
    gap: 40px !important;
  }
}

@media screen and (max-width: 768px) {
  .blocks-1 {
    gap: 30px !important;
  }

  .blocks {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 700px) {
  .blocks {
    &_items {
      flex-direction: column;
      gap: 20px;
      .block_item{
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .yandex{
    display: none;
  }
}
@media screen and (max-width: 520px) {

  .blocks {
    margin-bottom: 50px;
  }
}

</style>