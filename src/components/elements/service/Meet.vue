<script setup lang="ts">
import MeetVideo from './MeetVideo.vue';
import MeetContent from './MeetContent.vue';
</script>

<template>
  <div class="container_lg">
    <div class="meet">
      <div>
        <div class="blocks">
          <MeetVideo />
          <MeetContent />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.meet {
  border-radius: 10px;
  background:
    radial-gradient(332.73% 105.25% at 21.88% 87.41%, #539DFF 0%, #2777FC 100%),
    radial-gradient(708.28% 82.86% at 23.3% 72.57%, #595959 0%, #3B3E46 100%);
  padding: 67px 80px 67px 78px;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }
}

@media screen and (max-width: 1340px) {
  .meet {
    padding: 60px;
  }
}

@media screen and (max-width: 1258px) {
  .meet {
    padding: 40px;

    .blocks {
      flex-direction: row-reverse;
      display: block;
    }
  }
}

@media screen and (max-width: 1080px) {
  .meet {
    padding: 30px;
  }
}
@media screen and (max-width: 840px) {
  .meet {
    padding: 30px;
    .blocks {
      flex-direction: column-reverse;
      display: flex !important;
      gap: 30px;
      align-items: center;
    }
  }
}
@media screen and (max-width: 600px){
  .meet{
    margin-bottom: 80px;
  }
}
</style>