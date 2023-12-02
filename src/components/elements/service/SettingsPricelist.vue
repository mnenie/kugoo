<script setup lang="ts">
import ButtonPurpleLg from '@/components/UI/ButtonPurpleLg.vue';
import FilterItems from '@/components/UI/FilterItems.vue';
import { btnsFilter3 } from '@/mocks/ui/btnsFilter';
import useFilterSettings from '@/hooks/useFilterSettings';
import useGetAllScooters from '@/hooks/useGetAllScooters';
import { useModal } from 'vue-final-modal';
import ModalGidroisolation from '@/components/UI/ModalGidroisolation.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { items } = useGetAllScooters()
const { filterSettings, btnTitle, formattedPrice } = useFilterSettings()
const title = ref<string>('')
const about = ref<string>('')
const btn = ref<string>('')

const router = useRouter()
const {open, close, patchOptions} = useModal({
  component: ModalGidroisolation,
  attrs:{
    title: title.value,
    about: about.value,
    btnTitle: btn.value,
    onClose(){
      close()
    },
    onConfirm(){
      close();
      router.push({name: 'thanks', params: {id: '2'}})
    }
  }
})
const openModal = (btnTitle: string) => {
  if(btnTitle === 'Заказать гидроизоляцию'){
    title.value = 'Закажите гидроизоляцию и катайтесь на своем самокате в любую погоду!'
    about.value = 'Оставьте номер, менеджер свяжется с вами в течение 5 минут'
    btn.value = 'Записаться на диагностику'
  }
  if(btnTitle === 'Заказать настройку'){
    title.value = 'Закажите настройку электросамоката перед покупкой'
    about.value = 'Оставьте номер, менеджер свяжется с вами в течение 5 минут'
    btn.value = 'Заказать настройку'
  }
  else if(btnTitle === 'Заказать гидроизоляцию + настройку'){
    title.value = 'Закажите «настройку+гидроизоляцию» и сэкономьте до 1 000 руб.'
    about.value = 'Оставьте номер, менеджер свяжется с вами в течение 5 минут'
    btn.value = 'Заказать все вместе'
  }
  patchOptions({
    attrs: {
      title: title.value, 
      about: about.value,
      btnTitle: btn.value
    }
  })
  open()
}
</script>
<template>
  <div class="price_list">
    <FilterItems class="btns" @filter-cards="filterSettings" :btns-filter="btnsFilter3" />
    <div class="blocks">
      <div v-for="item in items" :key="item.id" class="block">
        <span class="size_6">{{ item.title }}</span>
        <span class="size_6">
          {{ formattedPrice[item.id - 1] }}
        </span>
      </div>
    </div>
    <ButtonPurpleLg @click="openModal(btnTitle)" style="margin-top: -20px;">{{ btnTitle }}</ButtonPurpleLg>
  </div>
</template>

<style lang="scss" scoped>
.price_list {
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;

  .blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .block {
      max-width: 475px;
      width: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--gray-200-color);
    }
  }
}

@media screen and (max-width: 1200px) {
  .price_list {
    gap: 60px;
  }
}

@media screen and (max-width: 1020px) {
  .price_list {
    .blocks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: 30px;

      .block {}
    }
  }
}

@media screen and (max-width: 890px) {
  .price_list {
    .blocks {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      justify-items: center;

      .block {
        max-width: 100%;
      }
    }
  }
}
</style>