<script setup lang="ts">
import { ref, onMounted } from 'vue'
const video = ref<HTMLVideoElement | null>(null)
onMounted(() => {
  if (video.value) {
    video.value.play()
  }
})
</script>

<template>
  <div class="video">
    <video style="width: 100%; cursor: auto;" src="/video/main.mp4" ref="video" loop muted>
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video {
  position: relative;
  height: 630px;
  // border-radius: 10px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 100px;

  .img {
    position: absolute;
    z-index: 0;
    height: 919px;
    width: 100%;
    bottom: -14px;
    left: 0;
  }

  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 136px;
    height: 136px;
  }
}

@media screen and (max-width: 1120px) {
  .video {
    height: unset;
  }
}

@media screen and (max-width: 992px) {
  .video {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 600px) {
  .video {
    margin-bottom: 60px;
  }
}
</style>