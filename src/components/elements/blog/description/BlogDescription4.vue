<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text">
      <div class="part_1">
        <p class="size_5">
          Электросамокаты бренда Kugoo за последнее время стали настолько популярными, что многие покупатели не знают, какую модель лучше выбрать. Вся продукция марки подразделяется на несколько серий, каждая из которых имеет собственное назначение. К примеру, модели серии S предназначены для езды по городу. Именно они обладают небольшим весом и компактными габаритами. Серия М подходит для катаний в сельской местности, а серия G предназначена для экстремалов. Рассмотрим, какие варианты электросамокатов Kugoo являются самыми легкими.
        </p>
      </div>
      <div class="part_3">
        <p class="size_5">
          Мы с уверенностью можем сказать какие из электросамокатов являются легкими, а именно: <router-link class="route" to="/products/5">KUGOO S1 Pro, </router-link> <router-link class="route" to="/products/4">KUGOO M4 Pro</router-link>
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