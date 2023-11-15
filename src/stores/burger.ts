import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useBurger = defineStore('burger', () => {
  const isOpen = ref<boolean>(false)

  const closeModal = () => {
    isOpen.value = false
  }
  const openModal = () => {
    isOpen.value = true
  }
  return {
    isOpen, 
    closeModal, 
    openModal
  }
})
