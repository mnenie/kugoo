import { onMounted, onUnmounted, ref } from 'vue'

export default function useClickOutsideHandlerBtn() {
  const styleBtn = ref<boolean>(false)
  const dropdownValue = ref<boolean>(false)
  const classStyle: string = '.dropdown'
  const clickOutsideHandler = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest(classStyle) && !target.closest('.btn-group')) {
      dropdownValue.value = false
      styleBtn.value = false
    }
  }
  onMounted(() => {
    window.addEventListener('click', clickOutsideHandler);
  })
  onUnmounted(() => {
    window.removeEventListener('click', clickOutsideHandler);
  })

  return {
    styleBtn, dropdownValue
  }
}
