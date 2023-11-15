<script setup lang="ts">

</script>

<template>
  <div class="video_diagnostic">
    <div class="video_block">
      <div class="inside_radius">
        <div class="video_content">
          <img src="/img/service/video.png" alt="">
          <img src="/icons/videobtn.svg" alt="">
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
          &:first-child {
            position: relative;
            z-index: 0;
            cursor: pointer;
            border-radius: 393.957px;
          }

          &:last-child {
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