<script setup lang="ts">
import { btnsFilter4 } from '@/mocks/ui/btnsFilter';
import TopCityPart from './city/TopCityPart.vue'
import MiddlePart from './MiddlePart.vue';
import BottomCityPart from './city/BottomCityPart.vue'
import { computed } from 'vue';
import TopPartRegion from './region/TopPartRegion.vue';
import TopPartAfter from './after/TopPartAfter.vue';
import BottomRegionPart from './region/BottomRegionPart.vue'
import BottomAfterPart from './after/BottomAfterPart.vue';
import { useModal } from 'vue-final-modal';
import ModalPhone from '@/components/UI/ModalPhone.vue';
import { useRouter } from 'vue-router';

const filterParts = computed(() => {
  return (id: number) => {
    btnsFilter4.value.map((btn, i) => {
      btn.active = i === id;
    })
  }
})

const router = useRouter()

const { open, close } = useModal({
  component: ModalPhone,
  attrs: {
    onClose() {
      close()
    },
    onConfirm() {
      close()
      router.push({ name: 'thanks', params: { id: '2' } })
    }
  }
})
</script>

<template>
  <div class="send_content">
    <div class="container">
      <div class="blocks">
        <h1 class="size_1">Отправляем по России в день заказа</h1>
        <span class="size_6">Выберите свой регион</span>
        <FilterItems class="filters" :btns-filter="btnsFilter4" @filter-cards="filterParts" />
        <div class="ways">
          <p class="size_5">Способ доставки</p>
          <p class="size_5">Время доставки</p>
          <p class="size_5">Стоимость</p>
        </div>
        <div class="parts">
          <TopCityPart @open="open" v-if="btnsFilter4[0].active || btnsFilter4[1].active || btnsFilter4[2].active"
            :filters="btnsFilter4" />
          <TopPartRegion @open="open" v-if="btnsFilter4[3].active" />
          <TopPartAfter @open="open" v-if="btnsFilter4[4].active" />
          <MiddlePart :filters="btnsFilter4" />
          <BottomCityPart v-if="btnsFilter4[0].active || btnsFilter4[1].active || btnsFilter4[2].active" />
          <BottomRegionPart v-if="btnsFilter4[3].active" />
          <BottomAfterPart v-if="btnsFilter4[4].active" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.send_content {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    flex-direction: column;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--black-color);
      margin-bottom: 50px;
    }

    & span {
      margin-bottom: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--black-color);
    }

    .filters {
      margin-bottom: 50px;
    }

    .ways {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 38px;


      & p {
        align-self: start;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--black-color);
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .send_content {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 600px) {
  .send_content {
    margin-bottom: 60px;

    .blocks {
      & h1 {
        margin-bottom: 40px;
      }
    }
  }

  .filters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>