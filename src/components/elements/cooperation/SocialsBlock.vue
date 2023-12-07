<script setup lang="ts">
const items = [
  { id: 1, icon: '/icons/cooperation/vk.svg', title: 'Вконтакте', num: '3 300', background: '#4B729F' },
  { id: 2, icon: '/icons/cooperation/inst.svg', title: 'Instagram', num: '10 602', background: 'var(--inst-gradient)' },
  { id: 3, icon: '/icons/cooperation/youtube.svg', title: 'YouTube', num: '3 603', background: '#E53935' },
  { id: 4, icon: '/icons/cooperation/tg.svg', title: 'Telegram', num: '432', background: '#039BE5' },
]
</script>

<template>
  <div class="block">
    <div class="socials">
      <div v-for="item in  items " :key="item.id" class="item" :style="{ background: item.background }">
        <div class="icon_block">
          <img :src="item.icon" alt="">
          <span class="size_7">{{ item.title }}</span>
        </div>
        <span class="size_7">{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  border-radius: 10px;
  background: var(--btn-gray-color);
  padding: 30px 34px;
  max-width: 355px;
  min-height: 270px;
  width: 100%;

  .socials {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      height: 45px;
      padding: 13px 20px 12px 16px;

      .icon_block {
        display: flex;
        align-items: center;
        gap: 20px;

        & span {
          color: var(--white-color);
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          opacity: 1;
        }
      }

      & span {
        opacity: 0.7;
        color: var(--white-color);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
}

@media screen and (max-width: 768px){
  .block{
    max-width: 100%;
  }
}
</style>