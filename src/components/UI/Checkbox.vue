<script setup lang="ts">

</script>

<template>
  <div class="check_block">
    <input type="checkbox" :checked="'true'" :disabled="'true'" id="flexCheckChecked">
    <label class="size_8" for="flexCheckChecked">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
      <router-link class="route" to="/">политикой конфиденциальности</router-link>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.check_block {
  max-width: 330px;
  display: flex;
  gap: 12px;

  & input {
    margin-top: 5px;
  }

  & label {
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: var(--black-color);

    .route {
      color: var(--purple-color);
      text-decoration: none;
    }
  }
}
</style>