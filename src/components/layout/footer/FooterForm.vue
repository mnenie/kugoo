<script setup lang="ts">
import { ref } from 'vue';

const title = ref('')

</script>

<template>
  <div class="form_display">
    <div class="container">
      <div class="form_display_content">
        <h1 class="size_5">Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты</h1>
        <div class="form_block">
          <input-purple v-model="title" placeholder="Введите Ваш email" type="text"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required
            style="width: 410px; height: 53px;" />
          <btn-large-white style="height: 53px;">Подписаться</btn-large-white>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form_display {
  min-height: 97px;
  background: var(--purple-color);
  padding: 23px 0 21px 0;

  &_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    & h1 {
      max-width: 445px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
    }

    .form_block {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}

@media screen and (max-width: 820px) {
  .form_display {
    &_content {
      flex-direction: column;
      & h1 {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .form_display {
    &_content {
      .form_block{
        flex-direction: column;
        align-items: unset;
      }
    }
  }
}
</style>