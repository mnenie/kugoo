<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text">
      <div class="part_1">
        <p class="size_5">
          2024 год нас щедро одарил новинками. В этому году райдеры увидели и увилят такие модели электросамокатов, как <router-link class="route" to="/products/4">KugooKirin M4 Pro, </router-link> <router-link class="route" to="/products/1">KugooKirin G2 Pro, </router-link> <router-link class="route" to="/products/8">KugooKirin G3</router-link> а также некоторые рестайлинговые модели и другие.
        </p>
      </div>
      <div class="part_2">
        <p class="size_5">
          Краткие обзоры всех новинок вы можете увидеть в наших социальных сетях, а полноценные обзоры вот-вот выйдут на нашем YouTube канале. Подписывайтесь, чтобы не пропустить.
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
</style>