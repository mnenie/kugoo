import { computed, type Ref } from 'vue'
import { btnsFilter2 } from '@/mocks/ui/btnsFilter'
import type { IRepair } from '@/types/repair.interface'
import useRepair from './useRepair'
export default function useFilterRepair(items: Ref<IRepair[]>) {
  const { getRepairScooters, getRepairBikes, getRepairGiro, getRepairMoped } = useRepair()
  const filterPrice = computed(() => {
    return async (index: number) => {
      btnsFilter2.value.forEach((btn, i) => {
        btn.active = i === index
      })
      switch (index) {
        case 0:
          await getRepairScooters(items)
          break
        case 1:
          await getRepairGiro(items)
          break
        case 2:
          await getRepairMoped(items)
          break
        case 3:
          await getRepairBikes(items)
          break
      }
    }
  })

  return {
    filterPrice
  }
}
