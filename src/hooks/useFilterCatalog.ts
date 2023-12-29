import { filters } from '@/mocks/filters'
import type { ICards } from '@/types/cards.interface'
import { computed, type Ref } from 'vue'

export default function useFiterCatalog(items: Ref<ICards[]>, tempItems: Ref<ICards[]>) {
  const filterProductsByTop = computed(() => {
    return (id: number) => {
      filters.value.forEach((btn, i) => {
        btn.active = i === id
      })
      switch (id) {
        case 0:
          items.value = tempItems.value
          break
        case 1:
          items.value = items.value
            .slice()
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          break
        case 2:
          items.value = items.value
            .slice()
            .sort(
              (a, b) =>
                parseInt(a.mileage?.match(/\d+/)?.[0] || '0', 10) -
                parseInt(b.mileage?.match(/\d+/)?.[0] || '0', 10)
            )
          break
      }
    }
  })

  return {
    filters,
    filterProductsByTop
  }
}
