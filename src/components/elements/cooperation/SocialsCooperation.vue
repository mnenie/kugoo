<script setup lang="ts">
import SocialsBlock from './SocialsBlock.vue';
</script>

<template>
  <div class="socilas">
    <div class="container">
      <div class="blocks">
        <div class="text">
          <h1 class="size_1">Общаемся с клиентами, чтобы знать пожелания и предлагать лучший ассортимент и сервис</h1>
          <p class="size_5">И еще приняли активное участие в выставке «Велокульт 2021»</p>
          <router-link class="router size_7" to="/">
            Смотреть как это было
            <img src="/icons/arrowpurple.svg" alt="">
          </router-link>
        </div>
        <SocialsBlock />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.socilas {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 683px;
      color: var(--black-color);

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
      }

      & p {
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 5px;
      }

      .router {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: var(--purple-color);
        transition: gap 0.15s ease-in;

        &:hover {
          gap: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .socilas {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 768px) {
  .socilas{
    .blocks{
      flex-direction: column;
      align-items: center;
      gap: 30px;
      .text{
        align-items: center;
        & h1{
          text-align: center;
        }
        & p{
          text-align: center;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .socilas {
    margin-bottom: 70px;
  }
}

</style>