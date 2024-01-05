<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text">
      <div class="part_1">
        <p class="size_5">
          Мы не будем описывать каждую модель в отдельности, это всё можно найти на нашем сайте в специальном разделе под
          названием <router-link class="route" to="/catalog">"Каталог"</router-link>, где можно ознакомиться с товарами и
          просмотреть их подробную характеристику.
        </p>
      </div>
      <div class="part_3">
        <p class="size_5">
          Подбор электросамоката зависит от его характеристик, которые вам нужны.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
    color: var(--black-color);
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }
}

.route {
  text-decoration: none;
  color: var(--purple-color);
}
@media screen and (max-width: 992px){
  .text{
    margin-bottom: 90px;
  }
}
</style>