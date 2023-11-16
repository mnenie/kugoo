<script setup lang="ts">
import type { IFooterCatalog } from '@/types/index';
import type { IFooterContacts } from '@/types/index';
// import ModalPhone from '@/components/UI/ModalPhone.vue';
defineProps<{
  catalog: IFooterCatalog[],
  buyers: IFooterCatalog[],
  contacts: IFooterContacts[],
  contactsNew: IFooterContacts[]
}>()
</script>


<template>
  <div class="catalog_display">
    <div class="catalog_display_1">
      <h1 class="h1_item">Каталог товаров</h1>
      <div class="route_1">
        <router-link class="route_1_item" v-for="item in catalog" to="/" :key="item.id">{{ item.title }}</router-link>
      </div>
    </div>
    <div class="catalog_display_2">
      <h1 class="h1_item">Покупателям</h1>
      <div class="route_2">
        <router-link class="route_2_item" v-for="item in buyers" to="/" :key="item.id">{{ item.title }}</router-link>
      </div>
    </div>
    <div class="catalog_display_3">
      <h1 class="h1_item">Контакты</h1>
      <div class="grid_contacts_1">
        <div v-for="contact in contacts" :key="contact.id" class="grid_contacts_1_item">
          <span>{{ contact.title }}</span>
          <span>{{ contact.number }}</span>
          <span>{{ contact.date }}</span>
        </div>
      </div>
      <div class="grid_contacts_2">
        <div v-for="contactNew in contactsNew" :key="contactNew.id" class="grid_contacts_2_item">
          <span>{{ contactNew.title }}</span>
          <span>{{ contactNew.number }}</span>
        </div>
      </div>
    </div>
    <a data-bs-toggle="modal" data-bs-target="#modalphone" @click.prevent style="cursor: pointer;" class="a_absolute">Заказать звонок</a>
    <!-- <ModalPhone /> -->
  </div>
</template>

<style lang="scss" scoped>
.catalog_display {
  position: relative;
  padding-top: 46px;
  display: flex;
  align-items: flex-start;

  &_1 {
    display: flex;
    flex-direction: column;
    margin-right: 129px;

    .route_1 {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &_item {
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
      }
    }
  }

  &_2 {
    .route_2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 46px;
      row-gap: 10px;
      margin-right: 110px;

      &_item {
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--gray-600-color);
        white-space: nowrap;
      }
    }
  }

  &_3 {
    display: flex;
    flex-direction: column;

    .grid_contacts_1 {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;

      &_item {
        display: flex;
        flex-direction: column;

        & span {
          &:first-child {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--black-color);
            margin-bottom: 5px;
          }

          &:nth-child(2) {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: var(--black-color);
            margin-bottom: 7px;
          }

          &:last-child {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }

    .grid_contacts_2 {
      display: flex;
      gap: 50px;

      &_item {
        display: flex;
        flex-direction: column;
        gap: 8px;

        & span {
          &:first-child {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 128.5%;
            color: var(--black-color);
          }

          &:last-child {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--gray-600-color);
          }
        }
      }
    }
  }
}

.h1_item {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--black-color);
  margin-bottom: 17px;
  white-space: nowrap;
}

.a_absolute {
  position: absolute;
  right: 0;
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--purple-color);
}

@media screen and (max-width: 1064px) {
  .catalog_display {
    flex-wrap: wrap;
    &_2{
      margin-bottom: 30px;
    }
  }
}
@media screen and (max-width: 680px) {
  .catalog_display {
      gap: 20px;
  }
}
</style>