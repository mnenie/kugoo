<script setup lang="ts">

</script>

<template>
  <div class="video-block">
    <img src="/img/service/zoom.png" alt="">
    <img src="/icons/zoom.svg" alt="">
  </div>
</template>

<style lang="scss" scoped>
.video-block {
  position: relative;
  display: flex;
  border-radius: 3.888px;
  border: 0.243px solid var(--black-color);
  background: var(--white-color);
  width: 515px;
  height: 263.416px;
  box-shadow: 0px 0px 0px 0.60751px rgba(255, 255, 255, 0.25) inset;


  & img {
    &:first-child {
      position: relative;
      // object-fit: cover;
      width: 515px;
      height: 263.416px;
    }

    &:last-child {
      position: absolute;
      top: -20px;
      right: -20px;
    }
  }
}

@media screen and (max-width: 1258px) {
  .video-block {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
  }
}

@media screen and (max-width: 1210px) {
  .video-block {
    width: 420px;
    height: 220px;

    & img {
      &:first-child {
        width: 420px;
        height: 220px;
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .video-block {
    right: 30px;
  }
}
@media screen and (max-width: 1060px) {
  .video-block {
    width: 360px;
    height: 200px;

    & img {
      &:first-child {
        width: 360px;
        height: 200px;
      }
    }
  }
}
@media screen and (max-width: 930px){
  .video-block {
    right: -80px;
    & img{
      &:last-child{
        right: unset;
        left: -20px;
      }
    }
  }
}
@media screen and (max-width: 840px){
  .video-block {
    position: relative;
    top: unset;
    right: unset;
    transform: unset;
    & img{
      &:last-child{
        right: -20px;
        left: unset;
      }
    }
  }
}
</style>