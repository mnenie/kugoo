<script setup lang="ts">

</script>


<template>
  <div class="card_banner">
    <div class="img">
      <img src="/img/blog/banner2.jpeg" alt="">
    </div>
    <div class="text">
      <p class="size_8">Как правильно заряжать электросамокат</p>
      <span class="size_9">Один из первых вопросов, который волнует после покупки электросамоката.</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card_banner {
  width: 206.164px;
  height: 216.178px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: rgba(244, 247, 251, 0.10);
  backdrop-filter: blur(1.5px);

  .img {
    position: relative;
    width: 100%;
    height: 109.562px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;

    & img {
      position: absolute;
      top: -20px;
      left: 0;
      width: 206.164px;
      height: 137.836px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    padding: 12px;

    & p {
      font-style: normal;
      font-weight: 500;
      line-height: 119%;
      color: var(--white-color);
      margin-bottom: 7px;
    }

    & span {
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--white-color);
    }
  }
}
</style>