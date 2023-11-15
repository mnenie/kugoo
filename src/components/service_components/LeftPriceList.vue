<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    id: 1,
    title: 'Kugoo Kirin M4',
    active: true
  },
  {
    id: 2,
    title: 'Kugoo Kirin S2',
    active: false
  },
  {
    id: 3,
    title: 'Kugoo Kirin M5',
    active: false
  },
  {
    id: 4,
    title: 'Kugoo Kirin M7',
    active: false
  },
  {
    id: 5,
    title: 'Kugoo Kirin M8',
    active: false
  },
])
const changeItem = (index: number) => {
  items.value.forEach((btn, i) => {
    btn.active = i === index;
  });
}
</script>

<template>
  <div class="left">
    <ul>
      <li @click="changeItem(index)" class="size_5" v-for="(item, index) in items" :key="item.id"
        :class="{active: item.active}">
        {{ item.title }}
        <div class="line" v-if="item.active">

        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.left {
  min-height: 439px;
  max-width: 350px;
  width: 100%;
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 17px 0 17px 0;
  overflow: hidden;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    & li {
      z-index: 99;
      position: relative;
      padding-left: 32px;
      height: 47px;
      display: flex;
      align-items: center;
      transition: 0.15s ease-in;
      .line {
        position: absolute;
        left: 0;
        height: 47px;
        width: 2px;
        background: var(--purple-color);
        bottom: 0;
      }
    }
  }
}

.active {
  height: 47px;
  width: 100%;
  background: var(--white-color);
  color: var(--purple-color);
}

@media screen and (max-width: 890px){
  .left{
    max-width: 730px;
  }
}
</style>