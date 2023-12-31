<script setup lang="ts">

</script>

<template>
  <div class="container_lg">
    <div class="banner">
      <div class="container">
        <div class="content">
          <div class="btns">
            <div class="red_block">
              <span class="size_7">До 01.09</span>
            </div>
            <div class="green_block">
              <span class="size_7">+ 2 подарка</span>
            </div>
          </div>
          <h1 class="size_1">выгода 2880 RUB при покупке Kugoo Kirin M4 Pro</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background: linear-gradient(88deg, #6F73EE 24.95%, rgba(111, 115, 238, 0.00) 59.45%);
  margin-bottom: 110px;
  padding: 33px 0;
  position: relative;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    background: url('/img/stocks/banner.png') no-repeat right bottom;
    background-size: contain;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 11px;

    & h1 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: var(--white-color);
      max-width: 600px;
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      .red_block {
        border-radius: 5px;
        border: 1px solid var(--pink-color);
        background: var(--pink-color);
        padding: 4px 8px;

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: var(--white-color);
        }
      }

      .green_block {
        border-radius: 5px;
        border: 1px solid var(--green-color);
        background: var(--green-color);
        padding: 4px 8px;

        & span {
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: var(--white-color);
        }
      }
    }
  }
}

@media screen and (max-width: 1150px){
  .banner{
    &::after{
      background-size: cover;
    }
  }
}
@media screen and (max-width: 992px){
  .banner{
    .content{
      & h1{
        max-width: 450px;
      }
    }
  }
}
@media screen and (max-width:820px){
  .banner{
    &::after{
      right: -138px;
    }
  }
}
@media screen and (max-width: 600px){
  .banner{
    .content{
      & h1{
        max-width: 380px;
      }
    }
  }
}
</style>