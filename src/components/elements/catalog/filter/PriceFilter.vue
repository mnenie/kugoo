<script setup lang="ts">

</script>

<template>
  <div class="price">
    <p class="size_5">Цена</p>
    <input class="input" type="range">
    <div class="counts">
      <div class="count">
        <span>0</span>
      </div>
      <div class="line"></div>
      <div class="count">
        <span>1000000</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--black-color);
  }
  .input{
    margin-bottom: 16px;
  }

  .counts {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .count {
      border-radius: 5px;
      border: 1px solid var(--gray-200-color);
      background: #FFF;
      width: 80px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .line {
      width: 15px;
      height: 1px;
      background: var(--black-color);
    }
  }
}
</style>