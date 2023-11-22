<script setup lang="ts">
import { catalogMenu1, catalogMenu2, catalogMenu3 } from '@/mocks/catalogMenu';
defineEmits([
  'closeDropdownRoute'
])
defineProps<{
  ul: boolean
}>()
</script>

<template>
  <div class="ul_drop">
    
  </div>
  <ul v-if="ul" style="width: 652px; padding: 10px 0 10px 10px;" class="ul_drop">
    <div style="display: flex; align-items: center;" class="ul_main">
      <div class="li_1">
        <li v-for="item in catalogMenu1" :key="item.id">
          <router-link @click="$emit('closeDropdownRoute')" class="route_1" style="text-decoration: none;" to="/service">
            <img :src="item.svg" alt="">
            {{ item.category }}
          </router-link>
        </li>
      </div>
      <div class="new_li">
        <div class="li_2">
          <h3>Особенности</h3>
          <li v-for="item in catalogMenu2" :key="item.id">
            <router-link @click="$emit('closeDropdownRoute')" class="li_new" style="text-decoration: none;" to="/">
              {{ item.title }}
            </router-link>
          </li>
        </div>
        <div class="li_2">
          <h3>Для кого</h3>
          <li v-for="item in catalogMenu3" :key="item.id">
            <router-link @click="$emit('closeDropdownRoute')" class="li_new" style="text-decoration: none;" to="/">
              {{ item.title }}
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </ul>
</template>

<style lang="scss" scoped>

.ul_drop{
  position: absolute;
  z-index:10001;
  min-width: var(--bs-dropdown-min-width);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: 5px;
  width: 247px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(111, 115, 238, 0.10);
  transform: translate3d(-50px, 0px, 0);
}
.li_1 {
  padding: 20px 34px 20px 24px;
  border-radius: 5px;
  background: var(--btn-gray-color);
  max-width: 235px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 43px;

  .route_1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
    transition: 0.15s ease-in;

    &:hover {
      color: var(--purple-color);
    }
  }
}

.new_li {
  display: flex;
  align-items: flex-start;
  gap: 61px;

  .li_2 {
    display: flex;
    flex-direction: column;

    & h3 {
      margin-bottom: 15px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }

    & li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .li_new {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--gray-600-color);
      transition: 0.15s ease-in;

      &:hover {
        color: var(--purple-color);
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .ul_drop{
    transform: translate3d(0px, 5px, 0);
  }
}
</style>