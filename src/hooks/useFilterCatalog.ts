import { filters, filtersPanel1, filtersPanel2, filtersPanel3, filtersPanel4, filtersPanel5, filtersPanel6 } from '@/mocks/filters'
import type { ICards } from '@/types/cards.interface'
import { computed, ref, watch, type Ref } from 'vue'

export default function useFiterCatalog(
  items: Ref<ICards[]>,
  tempItems: Ref<ICards[]>,
  range: Ref<number[]>
) {
  const originalItems = ref<ICards[]>([])
  const priceFilteredItems = ref<ICards[]>([]);

  watch(tempItems, (newTempItems) => {
    originalItems.value = newTempItems.slice()
    priceFilteredItems.value = newTempItems.slice()
  })

  const filterProductsByPrice = computed(() => {
    return (newRange: number[]) => {
      range.value = newRange
      const [minPrice, maxPrice] = range.value
      priceFilteredItems.value = originalItems.value.filter((item) => {
        const itemPrice = parseFloat(item.price.replace(/\s/g, ''))
        return itemPrice >= minPrice && itemPrice <= maxPrice
      })
      items.value = priceFilteredItems.value
      filterProductsPanel.value()
    }
  })

  const filterProductsByTop = computed(() => {
    return (id: number) => {
      filters.value.forEach((btn, i) => {
        btn.active = i === id
      })
      switch (id) {
        case 0:
          if (
            filtersPanel1.value.some((checkbox) => checkbox.checked) ||
            filtersPanel2.value.some((checkbox) => checkbox.checked) ||
            filtersPanel3.value.some((checkbox) => checkbox.checked) ||
            filtersPanel4.value.some((checkbox) => checkbox.checked) ||
            filtersPanel5.value.some((checkbox) => checkbox.checked) ||
            filtersPanel6.value.some((checkbox) => checkbox.checked)
          ) {
            filterProductsPanel.value()
          } else {
            items.value = priceFilteredItems.value.slice()
          }
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

  const filterProductsPanel = computed(() => {
    return () => {
      const activeCheckboxesByType = filtersPanel1.value.filter((checkbox) => checkbox.checked)
      const activeCheckboxesByWho = filtersPanel2.value.filter((checkbox) => checkbox.checked)
      const activeCheckboxesByWeight = filtersPanel3.value.filter((checkbox) => checkbox.checked)
      const activeCheckboxesBySeats = filtersPanel4.value.filter((checkbox) => checkbox.checked)
      const activeCheckboxesByMileage = filtersPanel5.value.filter((checkbox) => checkbox.checked)
      const activeCheckboxesByPower = filtersPanel6.value.filter((checkbox) => checkbox.checked)
      let filteredItems = priceFilteredItems.value.slice()

      if (activeCheckboxesByType.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesByType.some(
            (checkbox) => item.tags?.map((tag) => tag).includes(checkbox.title)
          )
        })
      }
      if (activeCheckboxesByWho.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesByWho.some((checkbox) => {
            if (parseFloat(item.speed) >= 55) {
              return checkbox.id === 1
            }
            if (parseFloat(item.speed) < 55 && parseFloat(item.speed) > 30) {
              return checkbox.id === 2
            }
            if (parseFloat(item.speed) <= 30) {
              return checkbox.id === 3
            }
            return false
          })
        })
      }
      if (activeCheckboxesByWeight.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesByWeight.some(
            (checkbox) => item.weightType?.includes(checkbox.title.split(' ')[0])
          )
        })
      }
      if (activeCheckboxesBySeats.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesBySeats.some((checkbox) => item.seat?.includes(checkbox.title))
        })
      }
      if (activeCheckboxesByMileage.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesByMileage.some(
            (checkbox) => item.mileage?.split(' ')[1].includes(checkbox.title.split(' ')[1])
          )
        })
      }
      if (activeCheckboxesByPower.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return activeCheckboxesByPower.some(
            (checkbox) => item.power === parseInt(checkbox.title.split(' ')[0])
          )
        })
      }
      items.value = filteredItems
    }
  })

  const clearFilters = () => {
    [ filtersPanel1, filtersPanel2, filtersPanel3, filtersPanel4, filtersPanel5, filtersPanel6
    ].forEach((panel) => {
      panel.value.forEach((checkbox) => (checkbox.checked = false))
    })
    filterProductsPanel.value()
  }
  return {
    filters,
    filterProductsByTop,
    filterProductsPanel,
    clearFilters,
    filterProductsByPrice
  }
}
