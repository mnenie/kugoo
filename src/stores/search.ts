import smoothScroll from '@/helpers/smoothScrollHelper'
import useGetAllScooters from '@/hooks/useGetAllScooters'
import type { ICards } from '@/types/cards.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useInput = defineStore('input', () => {
  const search = ref<string>('')
  const flCatalog = ref<boolean>(false)
  const myBlock = ref<HTMLElement | null>(null)
  const cards = ref<ICards[]>([])
  const { smoothScrollToTop } = smoothScroll()
  const {getAllScooters} = useGetAllScooters()

  const searchThis = () => {
    search.value = ''
    flCatalog.value = !flCatalog.value
    smoothScrollToTop()
  }
  const inputCatalog = () => {
    flCatalog.value = search.value.trim() !== ''
  }

  const getScooters = async () => {
    const scooters = await getAllScooters();
    cards.value = scooters
  }

  const filteredProducts = computed(() => {
    if (search.value.trim() === '') {
      return []
    }
    const filtered = cards.value.filter((card) =>
      card.title.toLowerCase().includes(search.value.toLowerCase())
    )
    return filtered
  })
  const error = computed(() => {
    if (search.value.trim() === '') {
      return ''
    }
    const filteredError = filteredProducts.value.length === 0
    return filteredError
  })
  const change = () => {
    flCatalog.value = false
  }
  const focus = () => {
    flCatalog.value = true
  }
  const mouseDown = (event: MouseEvent) => {
    if (myBlock.value) {
      if (!myBlock.value.contains(event.target as Node)) {
        change()
      }
    }
  }
  const changeDrop = () => {
    flCatalog.value = false
  }

  const stopForm = (event: KeyboardEvent) => {
    if(event.key === 'Enter'){
      search.value = ''
    }
  }
  return {
    search,
    flCatalog,
    filteredProducts,
    cards,
    inputCatalog,
    searchThis,
    error,
    change,
    focus,
    mouseDown, 
    changeDrop, 
    stopForm, 
    myBlock, 
    getScooters
  }
})
