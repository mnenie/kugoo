import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
export const useSwiperStore = defineStore('swiper', () => {
  const swiperInstance = ref()
  const count = ref<number>(1)
  const div = ref<number>(11)

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
    swiperInstance.value.on('slideChangeTransitionStart', () => {
      count.value = (count.value % 3) + 1;
      div.value = count.value * 11;
    })
  }

  const nextSlide = computed(() => {
    return swiperInstance.value.slideNext()
  })

  const prevSlide = computed(() => {
    if (count.value === 1) {
      return false;
    } else {
      swiperInstance.value.slidePrev();
      count.value = (count.value % 3) + 1;
      div.value = count.value * 11;
      return true;
    }
  });

  return {
    swiperInstance,
    count,
    div,
    onSwiper,
    nextSlide,
    prevSlide
  }
})
