import { btnsFilter3 } from '@/mocks/ui/btnsFilter'
import { computed, ref } from 'vue'
import useGetAllScooters from './useGetAllScooters'

export default function useFilterSettings() {
  const { items } = useGetAllScooters()
  const btnTitle = ref<string>('Заказать гидроизоляцию')
  const filterSettings = computed(() => {
    return async (index: number) => {
      btnsFilter3.value.forEach((btn, i) => {
        btn.active = i === index
      })
      switch (index) {
        case 0:
          btnTitle.value = 'Заказать гидроизоляцию'
          break
        case 1:
          btnTitle.value = 'Заказать настройку'
          break
        case 2:
          btnTitle.value = 'Заказать гидроизоляцию + настройку'
          break
      }
    }
  })
  const formattedPrice = computed(() => {
    return items.value.map((item) => {
      if (btnTitle.value === 'Заказать гидроизоляцию') {
        return item.gidroisolation !== undefined
          ? new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'rub' }).format(
              item.gidroisolation
            )
          : ''
      } else if (btnTitle.value === 'Заказать настройку') {
        return item.settings !== undefined
          ? new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'rub' }).format(
              item.settings
            )
          : ''
      } else if (btnTitle.value === 'Заказать гидроизоляцию + настройку') {
        return item.gidroset !== undefined
          ? new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'rub' }).format(
              item.gidroset
            )
          : ''
      } else {
        return ''
      }
    })
  })
  return {
    filterSettings,
    btnTitle,
    formattedPrice
  }
}
