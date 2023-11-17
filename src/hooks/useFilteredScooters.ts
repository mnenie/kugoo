import { computed, ref } from 'vue'
import { btnsFilter } from '@/mocks/ui/btnsFilter'

export default function useFilteredScooters(cards, cards2, originalCards, originalCards2) {
  const usl = ref<boolean>(true)
  const sortValue = ref<boolean>(false)
  const filterCards = computed(() => {
    return (index: number) => {
      btnsFilter.value.forEach((btn, i) => {
        btn.active = i === index
      })
      switch (index) {
        case 0:
          cards.value = [...originalCards.value]
          cards2.value = [...originalCards2.value]
          usl.value = true
          sortValue.value = false
          break
        case 1:
          cards.value = originalCards.value.filter((item) => item.rec === 'ХИТ')
          cards2.value = originalCards2.value.filter((item) => item.rec === 'ХИТ')
          if (cards2.value) {
            sortValue.value = true
            usl.value = false
            cards.value.push(...cards2.value)
          }
          break
        case 2:
          cards.value = originalCards.value.filter((item) => item.speed <= '45 км/ч')
          cards2.value = originalCards2.value.filter((item) => item.speed <= '45 км/ч')
          if (cards2.value) {
            sortValue.value = true
            usl.value = false
            cards.value.push(...cards2.value)
          }
          break
        case 3:
          cards.value = originalCards.value.filter((item) => item.power >= 800)
          cards2.value = originalCards2.value.filter((item) => item.power >= 800)
          if (cards2.value) {
            sortValue.value = true
            usl.value = false
            cards.value.push(...cards2.value)
          }
          break
        case 4:
          cards.value = originalCards.value.filter((item) => item.power < 800)
          cards2.value = originalCards2.value.filter((item) => item.power < 800)
          if (cards2.value) {
            sortValue.value = true
            usl.value = false
            cards.value.push(...cards2.value)
          }
          break
      }
    }
  })

  return {
    usl, sortValue, filterCards, btnsFilter
  }
}
