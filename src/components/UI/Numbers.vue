<script setup lang="ts">
import useClickOutsideHandlerBtn from '@/hooks/useClickOutsideBtn';
import { ref } from 'vue';
const tels = ref([
  {
    id: 1,
    title: 'Сервисный центр',
    tel: '+ 7 (499) 350 76 92',
    link: 'tel:+74993507692'
  },
  {
    id: 2,
    title: 'Оптовый отдел',
    tel: '+7 (499) 281-64-52',
    date: 'пн-сб 10:00 - 19:00',
    link: 'tel:+74992816452'
  },
  {
    id: 3,
    title: 'Отдел рекламаций и претензий',
    tel: '+7 (499) 350-76-92',
    date: 'ср-вс с 10:00 до 19:00',
    link: 'tel:+74993507692'
  },
])

const {dropdownValue} = useClickOutsideHandlerBtn()
const changeList = () => {
  dropdownValue.value = !dropdownValue.value
}
</script>

<template>
  <div class="number_display">
    <a class="size_8" href="tel:+78005055461">+7 (800) 505-54-61</a>
    <div style="height: 18px;" class="btn-group">
      <img @click="changeList" src="/icons/plusrounded.svg" alt="" />
    </div>
    <Transition name="slide-fade">
      <ul ref="listItem" v-if="dropdownValue" class="dropdown">
        <li class="li_item" v-for="item in tels" :key="item.id">
          <p class="size_8">{{ item.title }}</p>
          <a class="size_4" style="cursor: pointer;" :href="item.link">{{ item.tel }}</a>
          <span class="size_8">{{ item.date }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>


<style lang="scss" scoped>
.number_display {
  display: flex;
  align-items: center;
  gap: 9px;
  position: relative;

  .btn_group {
    position: relative;
  }

  & a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
    transition: 0.15s ease-in;

    &:hover {
      color: var(--purple-color);
    }
  }

  & img {
    cursor: pointer;
  }
}

.li_item {
  padding: 15px 0 15px 20px;
  border-bottom: 1px solid var(--gray-200-color);
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:last-child {
    border-bottom: unset;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--gray-600-color);
  }

  & a {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
    text-decoration: none;
  }

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }
}

.dropdown {
  position: absolute;
  transform: translateY(-10px);
  transition: transform 0.3s ease-in;
  right: 0;
  top: 50px;
  border-radius: 5px;
  width: 247px;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(111, 115, 238, 0.1);
  z-index: 101;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>