<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { IBtns } from '@/types/ui.interface';
const title = ref('ул. Ткацкая, 5 стр. 16.')
const tel = ref('+7 (499) 406-15-79')
const props = defineProps<{
  filters: IBtns[]
}>()
watchEffect(() => {
  const activeId = props.filters
  if(activeId[0].active){
    tel.value = '+7 (499) 406-15-79'
    title.value = 'ул. Ткацкая, 5 стр. 16.'
  }
  if(activeId[1].active){
    title.value = 'ул. Фрунзе, 2, вход с торца здания, (м. Парк Победы)'
    tel.value = '+7 (812) 507-62-79'
  }
  if(activeId[2].active){
    title.value = 'ул. Восточно-Кругликовская, 86.'
    tel.value = '+7 (800) 333-94-76'
  }
})
</script>

<template>
  <div class="middle">
    <span class="size_6" style="font-weight: 400;">Самовывоз из магазина <span style="font-weight: 500;">{{ title }} (Пн -
        Вс 10:00 - 20:00)</span></span>
    <span class="size_6">Перед посещением магазина уточняйте наличие рассматриваемой вами модели по телефону <a
        :href="'tel:' + tel ">{{ tel }}</a></span>
  </div>
</template>

<style lang="scss" scoped>
.middle {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 38px;
  border-bottom: 1px solid rgba(93, 108, 123, 0.2);
  margin-bottom: 33px;

  & span {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }

  & a {
    text-decoration: none;
    color: var(--purple-color);
  }
}
</style>