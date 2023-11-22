<script setup lang="ts">
// import { ref, onBeforeUnmount } from 'vue';

// const counter = ref<number>(0);
// const videoPlayerRef = ref<any>(null);
// const updateCounter = () => {
//   const currentTime = videoPlayerRef.value?.currentTime() || 0;
//   counter.value = Math.floor(currentTime);
// };
// onBeforeUnmount(() => {
//   videoPlayerRef.value?.off('timeupdate', updateCounter);
// });
</script>

<template>
  <div class="video_diagnostic">
    <div class="video_block">
      <div class="inside_radius">
        <div class="video_content">
          <video-player id="CustomVideoPlayer" class="video-player vjs-theme-forest" crossorigin="anonymous" controls
            src="/video/service.mp4" poster="/img/service/video.png" :volume="0.00001"
            :control-bar="{ volumePanel: false, timeDivider: false }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video_diagnostic {
  .video_block {
    width: 442px;
    height: 442px;
    border-radius: 442px;
    border: 1px dashed var(--gray-200-color);
    display: flex;
    align-items: center;
    justify-content: center;

    .inside_radius {
      width: 417.017px;
      height: 417.017px;
      border-radius: 417.017px;
      background: var(--btn-gray-color);
      display: flex;
      align-items: center;
      justify-content: center;

      .video_content {
        border-radius: 393.957px;
        position: relative;
        // background: #C4C4C4;
        width: 393.957px;
        height: 393.957px;
        overflow: hidden;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
          cursor: pointer;
          position: absolute;
          z-index: 99;
          top: 50%;
          left: 50%;
          width: 96px;
          height: 96px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .video_diagnostic {
    .video_block {
      width: 400px;
      height: 400px;
      border-radius: 400px;

      .inside_radius {
        width: 380px;
        height: 380px;
        border-radius: 380px;

        .video_content {
          border-radius: 350px;
          width: 350px;
          height: 350px;

          & img {
            &:first-child {
              border-radius: 350px;
            }
          }
        }
      }
    }
  }
}
</style>