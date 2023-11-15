<script setup lang="ts">
import { useModal, ModalsContainer } from 'vue-final-modal';
import Numbers from '@/components/UI/Numbers.vue';
import ModalPhone from '@/components/UI/ModalPhone.vue';

interface IHeader {
  pathTo: string;
  itemTo: string;
}
interface ISvg {
  pathSvg: string;
  svgItem: string;
}
defineProps<{
  items: IHeader[],
  svg: ISvg[]
}>()
const { open, close } = useModal({
  component: ModalPhone,
  attrs:{
    onClose(){
      close()
    },
    onConfirm(){
      close();
    }
  }
})

</script>

<template>
  <div class="header-1">
    <div class="container">
      <div class="header-1__content">
        <div class="router_display">
          <router-link class="router_item size_8" v-for="item in items" :to="{ path: item.pathTo }" :key="item.pathTo">
            {{ item.itemTo }}
          </router-link>
          <a @click="open" style="cursor: pointer;"
            class="router_item size_8">Заказать звонок</a>
          <div class="svg_header">
            <div v-for="itemSvg in svg" :key="itemSvg.pathSvg">
              <a class="img_to" style="height: 12px;" target="_blank" :href="itemSvg.pathSvg" :key="itemSvg.svgItem">
                <img :src="itemSvg.svgItem" alt="">
              </a>
            </div>
          </div>
        </div>
        <Numbers />
      </div>
    </div>
    <ModalsContainer />
  </div>
</template>


<style lang="scss" scoped>
.header-1 {
  height: 39px;
  background: var(--white-color);
  padding: 11px 0;
  border-bottom: 1px solid rgba(236, 243, 255, 1);

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .router_display {
      display: flex;
      gap: 30px;

      .router_item {
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
        transition: 0.15s ease;

        &:hover {
          color: var(--purple-color);
        }
      }

      .svg_header {
        display: flex;
        width: 53px;
        justify-content: space-between;
        align-items: flex-start;

        .img_to {
          width: 12px;
          height: 12px;
          text-decoration: none;
          display: block;

          & img {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 670px) {
  .header-1 {
    .router_display {
      gap: 20px;
    }
  }
}
</style>