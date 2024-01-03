<script setup lang="ts">
const props = defineProps<{
  len: number
  style: string
}>()
</script>

<template>
  <div v-for="item in len" :key="item" class="card-loader" :style="style"></div>
</template>

<style lang="scss" scoped>
.card-loader {
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);
  position: relative;
  border-radius: 2px;
  margin-bottom: 0;
  overflow: hidden;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    background-color: #f1f1f1;
    box-shadow: -48px 78px 0 -48px #f1f1f1, -51px 102px 0 -51px #ededed;
  }

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: loader-animate;
    animation-timing-function: linear;
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#00ffffff', GradientType=1);
  }
}

@keyframes loader-animate {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>