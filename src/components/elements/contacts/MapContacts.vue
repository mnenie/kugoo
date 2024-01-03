<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps';
import { ref, shallowRef, computed } from 'vue';
import type { YMap, LngLat } from '@yandex/ymaps3-types';
import type { IBtns } from '@/types/ui.interface';

const props = defineProps<{
  btns: IBtns[]
}>()
const map = shallowRef<YMap | null>(null);


const center = computed(() => {
  if (props.btns[0].active) {
    return [37.722981, 55.787163] as [number, number]
  }
  if (props.btns[1].active) {
    return [30.315221, 59.861909] as [number, number]
  }
  if (props.btns[2].active) {
    return [39.027083, 45.069537] as [number, number]
  }
  if (props.btns[3].active) {
    return [27.601474, 53.933751] as [number, number]
  }
  if (props.btns[4].active) {
    return [37.617698, 55.755864] as [number, number]
  }
  else {
    return [0, 0] as [number, number];
  }
})
const points = ref([
  { coordinates: [37.722981, 55.787163], icon: '/icons/contacts/point.svg' },
])

const mapMarkers = computed(() => {
  return points.value.map((point) => ({
    coordinates: point.coordinates as LngLat,
    icon: point.icon,
  }));
});
</script>

<template>
  <yandex-map :settings="{
    location: {
      center: center,
      zoom: 12,
    },
  }" class="map">
    <yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>
    <yandex-map-marker v-for="(point, index) in points" :key="index" :settings="mapMarkers">
      <div class="icon" :style="{
        position: 'relative',
        width: '200px',
        height: '200px',
        background: 'no-repeat center center',
        backgroundSize: 'contain',
        backgroundImage: `url(${point.icon})`,
      }"></div>
    </yandex-map-marker>
  </yandex-map>
</template>

<style lang="scss">
.map {
  width: 500px !important;
  height: 350px !important;
}

@media screen and (max-width: 1020px) {
  .map {
    width: 400px !important;
    height: 350px !important;
  }
}

@media screen and (max-width: 890px) {
  .map {
    width: 100% !important;
    height: 350px !important;
  }
}
</style>